import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'
import "./CartButton.css"
const CartButton = (props) => {
  const details=useContext(CartContext)
  // let quantity=0;
  // details.items.forEach((item)=>{
  //    quantity+=Number(item.Qty)
  // })
  const quantity=details.items.reduce((acc,curr)=>{
    return acc+Number(curr.Qty)
  },0)
  return (
    <button className='cartButton' onClick={props.onHeader}>
        <i class="fa-solid fa-cart-shopping" style={{color:'white'}}></i>
        <span className='cart'>Cart</span>
        <span className='items'>{quantity}</span>
    </button>
  )
}

export default CartButton
