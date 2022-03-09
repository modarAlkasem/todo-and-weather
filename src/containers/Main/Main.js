import React , { useState} from "react";
// import {Typography,Container} from '@mui/material';
import Form from "../../components/UI/Form/Form";
import TodoList from "../../components/TodoList/TodoList";
import Modal from "../../components/UI/Modal/Modal";
import TodoDetails from "../../components/TodoDetails/TodoDetails";
import classes from './Main.module.css';




const Main  = props=>{
    const [formState,setformState] = useState({
        title :'',
        description : '',
        createdAt : null,
        FinishedAt :null ,
        archiveAt : null,
       id : -1
    });
    const [todos,setTodos] = useState([]);
    const [formMode , setFormMode] = useState('add');
    const[indivTodo , setIndiviTodo] = useState(null);
    const updateTodoHandler = (id)=>{
        const todoIndex = todos.findIndex(todo=>todo.id===id);
        const todo = todos[todoIndex];
        setformState({
                ...todo
        });
        setFormMode('update');
    };
    const continueUpdateTodo = (event)=>{
        event.preventDefault();
        const todoIndex = todos.findIndex(todo=>todo.id===formState.id);
        const updatedTodos = [...todos];
        updatedTodos[todoIndex] = {...formState};
        setTodos([...updatedTodos]);
        setformState({
            title :'',
            description : '',
            createdAt : null,
            FinishedAt :null ,
            archiveAt : null,
           id : -1
        });
    }
    const deleteTodoHandler = (id)=>{
        const updatedTodos = todos.filter(todo=>todo.id!==id);
        setTodos([...updatedTodos]);

    }
    const archiveTodoHandler =(id)=>{

        const todoIndex = todos.findIndex(todo=>todo.id===id);
        const updatedTodos = [...todos];
        let updatedTodo = updatedTodos[todoIndex];
        updatedTodo = {
            ...updatedTodo,
            archiveAt : new Date()
        }
        updatedTodos[todoIndex] = updatedTodo;
        setTodos(updatedTodos);

    }
    const viewTodoHandler = (id)=>{
        const todoIndex = todos.findIndex(todo=>todo.id===id);
        const todo = todos[todoIndex];
        setIndiviTodo(todo);

    }
    const closeTodoViewer = ()=>{
        setIndiviTodo(null);
        
    }
    
    return(
        <div className={classes.Main}>
            <Modal show=  {indivTodo} modelClosed = {closeTodoViewer}>
                {indivTodo ? <TodoDetails todo = {indivTodo} /> : null }  
            </Modal>
             <TodoList todos = {todos} 
             updateTodoHandler = {updateTodoHandler}
             deleteTodoHandler = {deleteTodoHandler}
             archiveTodoHandler = {archiveTodoHandler}
             viewTodoHandler = {viewTodoHandler}
             />
            <Form 
            setformState = {setformState} 
            formState = {formState} 
            todos = {todos}
            setTodos = {setTodos}
            formMode = {formMode}
            continueUpdateTodo = {continueUpdateTodo}
            />
           
            
        </div>

    );
}

export default Main;