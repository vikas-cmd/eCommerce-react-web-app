
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Header from "./components/Header";


import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import CartList from "./components/CartList";
import Login from "./components/Login";
//import PostApi from "./components/postApi";
import Signup from "./components/Signup";






function App() {
  

  


  return (
    <>


  
  

    <Header />
    
     
   <Routes>
   
    <Route path="/" element={<ProductList />}></Route>

  
    <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
    <Route path="/cart/" element={<CartList />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    
    
   </Routes>
   
   



     

      
      
    </>
  )
}

export default App
