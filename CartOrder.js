import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'
import "./CartOrder.css"
const CartOrder = (props) => {
  const details=useContext(CartContext)
  function minimizeOrder(e){
    details.removeItem(e.target.parentElement.id)
  }
  function maximizeOrder(e){
    details.addItemInCart(e.target.parentElement.id)
  }
  return (
    <>
      <ol className='itemsList'>
        {details.items.map((item)=>{
          return <li id={item.Id}>
            {item.Name}--{item.Qty}QTY
            <button onClick={minimizeOrder}>-</button>
            <button onClick={maximizeOrder}>+</button>
            </li>
        })}
      </ol>
      <div className='action'>
        <label>Total Amount</label>
        <div className='amount'>$35</div>
        <button className='closeBtn' onClick={props.onClose}>Close</button>
        <button className='orderBtn'>Order</button>
      </div>
    </>
  )
}

export default CartOrder
