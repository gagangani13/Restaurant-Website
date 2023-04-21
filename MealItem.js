
import { useRef ,useContext} from "react";
import "./MealsList.css"
import CartContext from "../Context/CartContext";
const MealItem = (props) => { 
  const countItemsRef=useRef(1)
  const details=useContext(CartContext)
  function addToCart(e) {
    e.preventDefault()
    if(countItemsRef.current.value>0){
    const data=({'Name':props.Name,'Price':props.Price,'Qty':Number(countItemsRef.current.value),'Id':Number(props.Id)})
    details.addItem(data);}
    else{
      alert('Please order minimum of 1 Quantity')
    }
    
  }
  return (
    <div className='item'>
        <div >
            <p className="Name">{props.Name}</p>
            <p className="Special">{props.Special}</p>
            <p className="Price">Rs.{props.Price}</p>
        </div>
        <form onSubmit={addToCart}>
            <label>Quantity</label>
            <input type='number' step='1' min='1' ref={countItemsRef}/>
            <button type='submit' className="addBtn">+ADD</button>
        </form>
    </div>
  );
};

export default MealItem;
