import React from 'react'
import "./Header.css"
import meals from "../../meals2.jpg"
import CartButton from "./CartButton"
const Header = () => {
  return (
    <>
    <header>
        <h2>
            <i class="fa-solid fa-salad fa-fade"></i>
            South Indian Meals
        </h2>
        <CartButton/>
    </header>
    <div className='main-image'>
         <img className="main-image img" src={meals} alt='meals'/>
    </div>
   
    </>
    
  )
}
export default Header
