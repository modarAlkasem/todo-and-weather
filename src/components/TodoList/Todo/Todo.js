import React from "react";
import {Button , ButtonGroup }from '@mui/material';
import classes from './Todo.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Todo = props=>{
    const styles = {
        'width' : "20px",
        'padding':'0'

       
    }
    return(
        <li className={classes.Todo}>
        <span>{props.text}</span>
        <ButtonGroup type="button" variant="contained">
        <Button
        
        color="success"
        
        sx={styles}
        onClick = {props.viewTodoHandler}>

            <VisibilityOutlinedIcon />
        </Button>
        <Button
        color="info"
        sx={styles}
        onClick = {props.updateTodoHandler}>

            <ModeEditOutlineOutlinedIcon/>
        </Button>
        <Button
        
        color="warning"
        sx={styles}
        onClick = {props.archiveTodoHandler}>

            <ArchiveOutlinedIcon/>
        </Button>
        <Button
        color="error"
        sx={styles}
        onClick={props.deleteTodoHandler}>

            <DeleteOutlineOutlinedIcon/>
        </Button>
        </ButtonGroup>
  
        </li>
    );
}

export default Todo;