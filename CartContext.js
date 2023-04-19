// import React from 'react'
// const CartContext = () => {
//   return  React.createContext({
//     items:[],
//     totalAmount:0,
//     addItem:(item)=>{},
//     removeItem:(id)=>{}
//   })
// }
//This was not working ... took 4 hrs..:(
import { createContext } from 'react';
const CartContext=createContext({
        items:[],
        totalAmount:0,
        addItem:(item)=>{},
        removeItem:(id)=>{},
        addItemInCart:(id)=>{}
})
export default CartContext;
