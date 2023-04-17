import React from 'react'
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
            return(
                <div className='item'>
                    <p className='Name'>{item.Name}</p>
                    <p className='Special'>{item.Special}</p>
                    <p className='Price'>{item.Price}</p>
                </div>
            )
        })}
        </div>
    )
}

export default MealsList
