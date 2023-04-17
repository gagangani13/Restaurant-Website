import React from 'react'
import "./CartButton.css"
const CartButton = () => {
  return (
    <button className='cartButton'>
        <i class="fa-solid fa-cart-shopping" style={{color:'black'}}></i>
        <span className='cart'>Cart</span>
        <span className='items'>3</span>
    </button>
  )
}

export default CartButton
