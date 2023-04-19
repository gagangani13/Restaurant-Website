import React from 'react'
import "./Header.css"
import meals from "../../meals2.jpg"
import CartButton from "./CartButton"
import Message from "./Message";
const Header = (props) => {
  return (
    
    <>
    <header>
        <h2>
            <i class="fa-solid fa-salad fa-fade"></i>
            South Indian Meals
        </h2>
        <CartButton onHeader={props.onApp}/>
    </header>
    <div className='main-image'>
         <img className="main-image img" src={meals} alt='meals'/>
    </div>
    <Message/>
    </>
    
  )
}
export default Header
