import React from "react";
import "./MealsList.css"
const MealItem = (props) => {
  return (
    <div className='item'>
        <div className="mealsDetails">
            <p className="Name">{props.Name}</p>
            <p className="Special">{props.Special}</p>
            <p className="Price">{props.Price}</p>
        </div>
        <form>
            <label>Amount</label>
            <input type='number' step='1' min='0'/>
            <button type='submit' className="addBtn" >+ADD</button>
        </form>
    </div>
  );
};

export default MealItem;
