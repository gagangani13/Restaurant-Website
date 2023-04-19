
import { useRef ,useContext} from "react";
import "./MealsList.css"
import CartContext from "../Context/CartContext";
const MealItem = (props) => { 
  const countItemsRef=useRef(1)
  const details=useContext(CartContext)
  function addToCart(e) {
    e.preventDefault()
    const data=({'Name':props.Name,'Price':props.Price,'Qty':countItemsRef.current.value})
    // details.addItem(props,countItemsRef.current.value)
    details.addItem(data);
    // details.items.push({Name:props.Name,Price:props.Price})
    console.log(details);
  }
  return (
    <div className='item'>
        <div >
            <p className="Name">{props.Name}</p>
            <p className="Special">{props.Special}</p>
            <p className="Price">{props.Price}</p>
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
