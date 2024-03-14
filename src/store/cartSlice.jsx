import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addCart(state, action){
            state.push({...action.payload, quantity: 1})
        },
        removeCartItem(state, action){
            return state.filter(item => item.id != action.payload);
        },
        cartQuantityDecrease(state, action){
            const cartItem = state.find(item => item.id === action.payload);
            if(cartItem.quantity > 1){
                cartItem.quantity --;
            }
            else{
                cartItem.quantity = 1;
            }
        },
        cartQuantityIncrease(state, action){
            const cartItem = state.find(item => item.id === action.payload);
            cartItem.quantity ++;
        }

    }
})

export const { addCart, removeCartItem, cartQuantityDecrease, cartQuantityIncrease } = cartSlice.actions;
export default cartSlice.reducer;