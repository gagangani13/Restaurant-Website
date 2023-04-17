import React from 'react'
import "./CartOrder.css"
const CartOrder = () => {
  return (
    <>
        <label>Total Amount</label>
        <div className='amount'>$35</div>
        <button className='closeBtn'>Close</button>
        <button className='orderBtn'>Order</button>
    </>
  )
}

export default CartOrder
