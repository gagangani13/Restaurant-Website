
import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = (props) => {
    const[items,updateItems]=useState([])
    function addItemFunctionHandler(newItem) {
      let flag=false;
      const cartItems=items.filter((item)=>{
        if(item.Id===newItem.Id){
          flag=true;
          return item.Qty=Number(item.Qty)+Number(newItem.Qty)
        }
        return item
      })
      if(flag){
        updateItems(cartItems)
      }else{
        updateItems([...items,newItem])
      }
    }
    function removeItemFunctionHandler(id){
      const removeItem=items.filter((item)=>{
        return item.Id!==Number(id)
      })
      updateItems(removeItem)
    }
    function removeItemInCartFunctionHandler(id) {
        const removed=items.filter((item)=>{
          if(item.Id===Number(id) && item.Qty>0){
              return item.Qty-=1
          }
          return item
        })
        updateItems(removed)
    }
    function addItemInCartFunctionHandler(id) {
        const added=items.filter((item)=>{
          if(item.Id===Number(id) && item.Qty>0){
              return item.Qty=Number(item.Qty)+1
          }
          return item
        })
        updateItems(added)
    }

  const cartContext = {
    items: items,
    totalAmount: 0,
    removeItem:removeItemFunctionHandler,
    addItem: addItemFunctionHandler,
    removeItemInCart:removeItemInCartFunctionHandler,
    addItemInCart:addItemInCartFunctionHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
