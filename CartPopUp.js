import ReactDom from 'react-dom'
import "./CartPopUp.css"
import CartOrder from './CartOrder'
const BackDrop=()=>{
    return (
        <div className='backdropBg'>
            
        </div>
    )
}
const CartShow=(props)=>{
    return (
        <div className='cartShowBg'>
            <CartOrder onClose={props.onClose}/>
        </div>
    )
}
const CartPopUp = (props) => {
  return (
    <>
      {ReactDom.createPortal(<BackDrop/>,document.getElementById('backDrop'))}
      {ReactDom.createPortal(<CartShow onClose={props.onClose}/>,document.getElementById('cartShow'))}
    </>
  )
}

export default CartPopUp
