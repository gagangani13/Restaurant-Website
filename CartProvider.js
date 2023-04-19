// import { useContext } from "react";
import { useState } from "react";
import CartContext from "./CartContext";
// import React from 'react'
const CartProvider = (props) => {
    const[items,updateItems]=useState([])
    function addItemFunctionHandler(item) {
      updateItems([...items,item]);
      console.log(cartContext);
    }
    function removeItemFunctionHandler(id) {
        const removed=items.filter((item)=>{
            if(item.Id===id && item.Qty>0){
                return item.Qty-=1
            }
            return item
        })
        console.log(removed);
        updateItems(removed)
    }
    function addItemInCartFunctionHandler(id) {
        const added=items.filter((item)=>{
            if(item.Id===id && item.Qty>0){
                return item.Qty=Number(item.Qty)+1
            }
            return item
        })
        console.log(added);
        updateItems(added)
    }

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemFunctionHandler,
    removeItem:removeItemFunctionHandler,
    addItemInCart:addItemInCartFunctionHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
