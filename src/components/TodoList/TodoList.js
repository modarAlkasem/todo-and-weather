import React from "react";
import Todo from "./Todo/Todo";
import classes from './TodoList.module.css';


const TodoList = props=>{
    const todo = props.todos.map(todo=>{
        return <Todo  
        key = {todo.id} 
        updateTodoHandler = {props.updateTodoHandler.bind(this,todo.id)}
        deleteTodoHandler = {props.deleteTodoHandler.bind(this,todo.id)}
        archiveTodoHandler = {props.archiveTodoHandler.bind(this,todo.id)}
        viewTodoHandler = {props.viewTodoHandler.bind(this,todo.id)}
        text ={todo.title}
         />
    })
    return(

        <ul className={classes.TodoList}>
           {todo}
        </ul>
     
    );
}

export default TodoList;