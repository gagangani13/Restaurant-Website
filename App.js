import Header from "./Components/Layout/Header";
import "./mainPage.css"
import MealsList from "./Components/Layout/MealsList";
import { useState } from "react";
import CartPopUp from "./Components/Layout/CartPopUp";
import CartProvider from "./Components/Context/CartProvider";
function App() {
  const[cartPop,setCartPop]=useState(false)
  function cartButton() {
    if(!cartPop){
      setCartPop(true)
    }else{
      setCartPop(false)
    }
  }
  
 
  return (
    <CartProvider>
      <Header onApp={cartButton}/> 
      <MealsList/>
      {cartPop&&<CartPopUp onClose={cartButton}/>}
    </CartProvider>
  );
}

export default App;
