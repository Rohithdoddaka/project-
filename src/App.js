import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from './Components/Meals/Meals.js'
import CartProvider from "./store/CartProvider";
function App()
{
  const [cartIsShown,setcartIsShown]=useState(false)
  const cartShownHandler=()=>{
  setcartIsShown(true)
  }
  const cartHideHandler=()=>{
  setcartIsShown(false)
  }

  return(
      <CartProvider>
      {cartIsShown&&<Cart onClose={cartHideHandler} />}
          <Header onShown={cartShownHandler}/>
          <main>
            <Meals/>
          </main>
      </CartProvider>
  )
}
export default App;