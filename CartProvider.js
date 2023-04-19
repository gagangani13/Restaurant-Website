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
    // const [cartContext, setContext] = useState({
    //   items: [],
    //   totalAmount: 0,
    //   addItem: addItemFunctionHandler,
    //   // removeItem:removeItemFunctionHandler
    // });
//   function addItemFunctionHandler(item) {
//     cartContext.items.push(item);
//     console.log(CartContext);
//   }

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemFunctionHandler,
    // removeItem:removeItemFunctionHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
