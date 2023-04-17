import ReactDom from 'react-dom'
import "./CartPopUp.css"
import CartOrder from './CartOrder'
const BackDrop=()=>{
    return (
        <div className='backdropBg'>
            
        </div>
    )
}
const CartShow=()=>{
    return (
        <div className='cartShowBg'>
            <CartOrder/>
        </div>
    )
}
const CartPopUp = () => {
  return (
    <>
      {ReactDom.createPortal(<BackDrop/>,document.getElementById('backDrop'))}
      {ReactDom.createPortal(<CartShow/>,document.getElementById('cartShow'))}
    </>
  )
}

export default CartPopUp
