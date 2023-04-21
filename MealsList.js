import React from 'react'
import MealItem from './MealItem'
import "./MealsList.css"
const MealsList = () => {
    const Menu=[
        {Id:1,Name:'Veg Biryani',Special:'Veg',Price:200},
        {Id:2,Name:'Chicken Biryani',Special:'Non-Veg',Price:250},
        {Id:3,Name:'Buffet',Special:'Veg',Price:800},
        {Id:4,Name:'Roti Curry',Special:'Veg',Price:120}
    ]
    return (
        <div className='menuList'>
        {Menu.map((item)=>{
            return <MealItem Name={item.Name} Special={item.Special} Price={item.Price} Id={item.Id}/>
        })}
        </div>
    )
}

export default MealsList
