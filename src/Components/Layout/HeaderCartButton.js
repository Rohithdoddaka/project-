import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import { useContext } from "react";
import CartContext from "../../store/Cart-context";
const HeaderCartButton=(props)=>{

    const Cartcnx=useContext(CartContext);
    const numOfCartItems=Cartcnx.items.reduce((curNum,item)=>{
    return curNum+item.amount
    },0)
   return(
       <button className={classes.button} onClick={props.onShown}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>YOUR CART</span>
        <span className={classes.badge}>{numOfCartItems}</span>
       </button>
   )
}
export default HeaderCartButton;