import React from "react";
import classes from './Weather.module.css';

const Weather = props=>{
    return(
        <div className={classes.Weather}>
            <div className={classes.DateAndLoc}>
                <div className={classes.Date}>
                     {props.flag ?props.date.toDateString().split(' ')[0]:props.date.getHours()+':'+props.date.getMinutes()}
                     </div>
                <div className={classes.Location} >{props.location}</div>
            </div>
            <div className={classes.Degree}>
                {Math.round(props.degree)} C
            </div>
        </div>
    );
}
export default Weather;