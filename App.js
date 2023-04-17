import Header from "./Components/Layout/Header";
import "./mainPage.css"
import Message from "./Components/Layout/Message";
import MealsList from "./Components/Layout/MealsList";
import { useState } from "react";
import CartPopUp from "./Components/Layout/CartPopUp";
function App() {
  const[cartPop,setCartPop]=useState(false)
  function cartButton() {
    setCartPop(true)
  }
  return (
    <div>
      <Header onApp={cartButton}/> 
      <Message/>
      <MealsList/>
      {cartPop&&<CartPopUp/>}
    </div>
  );
}

export default App;
