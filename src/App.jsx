import './App.css';
import { Route, Routes } from 'react-router';
import Home from './page/Home/Home';
import Header from './component/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Products from './component/Products/Products';


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
