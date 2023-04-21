import React from 'react'
import "./Header.css"
import meals from "../../meals.jpg"
import CartButton from "./CartButton"
import Message from "./Message";
import MealsList from "./MealsList"
const Header = (props) => {
  return (
    
    <div className='home'>
      <header>
          <h2 className='title'>
            <i class="fa-solid fa-utensils"></i>
            Indian Restaurant
          </h2>
          <CartButton onHeader={props.onApp}/>
      </header>
      <div className='main-image'>
        <img className="main-image img" src={meals} alt='meals'/>
      </div>
      <Message/>
      <MealsList/>
    </div>
    
  )
}
export default Header
