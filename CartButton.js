import React from 'react'
import "./CartButton.css"
const CartButton = (props) => {
  return (
    <button className='cartButton' onClick={props.onHeader}>
        <i class="fa-solid fa-cart-shopping" style={{color:'white'}}></i>
        <span className='cart'>Cart</span>
        <span className='items'>3</span>
    </button>
  )
}

export default CartButton
