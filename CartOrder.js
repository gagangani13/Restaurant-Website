import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'
import "./CartOrder.css"
const CartOrder = (props) => {
  const details=useContext(CartContext)
  let totalPrice=0;
  function minimizeOrder(e){
    details.removeItemInCart(e.target.parentElement.id)
  }
  function maximizeOrder(e){
    details.addItemInCart(e.target.parentElement.id)
  }
  function deleteItem(e) {
    details.removeItem(e.target.parentElement.id)
  }
  return (
    <>
    <h3>Cart Items</h3>
      <ol className='itemsList'>
        {details.items.map((item)=>{
          totalPrice+=item.Price*item.Qty
          return( 
          <div className='cartItem'>
            <li id={item.Id}>
              <span>{item.Name}</span>
              <button onClick={minimizeOrder}>-</button>
              <span className='Qty'>{item.Qty}X</span>
              <button onClick={maximizeOrder}>+</button>
              <button class="fa-solid fa-trash-can" style={{color:'red'}} onClick={deleteItem}></button>
            </li>
            Rs.{item.Price*item.Qty}
          </div>)
          
        })}
      </ol>
      <div className='action'>
        <label>Total Price</label>
        <div className='amount'>Rs.{totalPrice}</div>
        <button className='closeBtn' onClick={props.onClose}>Close</button>
        <button className='orderBtn'>Order</button>
      </div>
    </>
  )
}

export default CartOrder
