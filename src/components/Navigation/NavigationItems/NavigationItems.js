import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
const NavigationItems = props=>(
    <ul className = {classes.NavigationItems}>
        <NavigationItem link = '/' exact> Todo</NavigationItem>
        <NavigationItem link = '/weather' exact> Current Weather</NavigationItem>
     
    </ul>
);

export default NavigationItems;
