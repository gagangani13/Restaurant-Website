import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'
import "./CartOrder.css"
const CartOrder = (props) => {
  const details=useContext(CartContext)

  return (
    <>
      <ol className='itemsList'>
        {details.items.map((item)=>{
          return <li>{item.Name}--{item.Qty}QTY</li>
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
