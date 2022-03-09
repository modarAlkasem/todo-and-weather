import React from "react";
import {Typography} from '@mui/material';
import classes from './TodoDetails.module.css'

const TodoDetails = props=>{

    return(
        <div className={classes.TodoDetails}> 
            <section className= {classes.Title}> 
                <header>
                    <Typography variant="h5" > 
                            {props.todo.title}
                    </Typography>
                </header>
            </section>
            <section  className= {classes.Dates}>
                <div> Created At : {new Date (props.todo.createdAt).toString().split('(')[0]}</div>
                <div> Archive At : {props.todo.archivedAt?new Date (props.todo.archivedAt).toString():'Not Archived Yet'  }</div>
            </section>
            <section  className= {classes.Description}>
                 Description :{props.todo.description}
            </section>
            <section></section>



        </div>
    );
}

export default TodoDetails;