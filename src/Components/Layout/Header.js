import React,{ Fragment } from "react";
import mealsimage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
  return(
      <Fragment>
        <header className={classes.header}>
         <h1>ReactMeals</h1>
         <HeaderCartButton onShown={props.onShown}/>
        </header>
        <div>
        <img className={classes['main-image']} src={mealsimage} alt="A table of meals" />
        </div>
      </Fragment>
  )
}
export default Header;