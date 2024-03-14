import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = Object.freeze({
    LOADING: "loading",
    IDLE: "idle",
    ERROR: "error"
});
const prodctSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers:{
        setProducts(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
    }
})
export const { setProducts, setStatus } = prodctSlice.actions;
export default prodctSlice.reducer;

export const fetchProducts = () => {
    return async function fetchProductsThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        axios.get("https://fakestoreapi.com/products").then((res) => {
            dispatch(setProducts(res.data));
            dispatch(setStatus(STATUS.IDLE));
        }).catch((err) => {
            dispatch(setStatus(STATUS.ERROR));
        })
    }
}