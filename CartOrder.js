import React from 'react'
import "./CartOrder.css"
const CartOrder = (props) => {
  return (
    <>
        <label>Total Amount</label>
        <div className='amount'>$35</div>
        <button className='closeBtn' onClick={props.onClose}>Close</button>
        <button className='orderBtn'>Order</button>
    </>
  )
}

export default CartOrder
