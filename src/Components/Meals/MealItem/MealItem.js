import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/Cart-context'
import { useContext } from 'react/cjs/react.development'
const MealItem=(props)=>{
    const price=`$${props.price.toFixed(2)}`
    const Cartcnx=useContext(CartContext)
    const addToCartHandler=(amount)=>{
        const price1=`$${props.price.toFixed(2)}`
        console.log("this si price"+price1)
        Cartcnx.addItem({
            id:props.id,
            name: props.name,
            amount:amount,
            price: price1
        }
        )
    }
    return(
        <li className={classes.meal}>
        <div>
           <h3 className={classes.name}>{props.name} </h3>
           <div className={classes.description}>{props.description}</div>
           <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} />
        </div>
        </li>
    )
}
export default MealItem;