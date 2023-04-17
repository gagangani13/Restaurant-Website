import Header from "./Components/Layout/Header";
import "./mainPage.css"
import Message from "./Components/Layout/Message";
import MealsList from "./Components/Layout/MealsList";
import { useState } from "react";
import CartPopUp from "./Components/Layout/CartPopUp";
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
    <div>
      <Header onApp={cartButton}/> 
      <Message/>
      <MealsList/>
      {cartPop&&<CartPopUp onClose={cartButton}/>}
    </div>
  );
}

export default App;
