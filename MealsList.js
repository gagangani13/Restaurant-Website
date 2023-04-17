import React from 'react'
import MealItem from './MealItem'
import "./MealsList.css"
const MealsList = () => {
    const Menu=[
        {Name:'Veg Biryani',Special:'Veg',Price:'$5'},
        {Name:'Chicken Biryani',Special:'Chicken',Price:'$15'},
        {Name:'Mutton Biryani',Special:'Mutton',Price:'$25'},
        {Name:'Poori',Special:'Veg',Price:'$5'}
    ]
    return (
        <div className='menuList'>
        {Menu.map((item)=>{
            return <MealItem Name={item.Name} Special={item.Special} Price={item.Price} />
        })}
        </div>
    )
}

export default MealsList
