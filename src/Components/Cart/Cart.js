import { useContext } from 'react/cjs/react.development'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/Cart-context'

const Cart=(props)=>{

const cartCxt=useContext(CartContext)
const cartitems=<ul className={classes['cart-items']}>{
cartCxt.items.map(item=><li>{item.name}</li>)}

</ul>

const totalAmounts=`$${cartCxt.totalAmount.toFixed(2)}`
const hasItems=cartCxt.items.length > 0
console.log(cartCxt)
  return(
  <Modal onClose={props.onClose}>
 {cartitems}
   <div className={classes.total}>
       <span>Total Amount</span>
       <span>{totalAmounts}</span>
   </div>
   <div className={classes.actions}>
       <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      { hasItems && <button className={classes.button}>Order</button>}
   </div>
   </Modal>
  )
}
export default Cart