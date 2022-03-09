import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from './../NavigationItems/NavigationItems';
import Backdrop from './../../UI/Backdrop/Backdrop';

const SideDrawer = props=>{
    
    return(
        <React.Fragment>
         <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className ={[classes.SideDrawer , props.open ? classes.Open:classes.Close].join(' ')} >
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>

    );
}

export default SideDrawer;