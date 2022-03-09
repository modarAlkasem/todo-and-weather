import React from "react";
import classes from './Backdrop.module.css';

const Backdrop = props=>{
    const backdrop = props.show
    ?<div 
         className={classes.Backdrop}
         onClick = {props.clicked}
    ></div>  
     :null
    return backdrop;
}

export default Backdrop;