import React from "react";
import {TextField , Button }from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import classes from './Form.module.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';



const Form = props=>{
    const textFieldStyles ={
                            
                fontSize: '1rem',
                backgroundColor: 'white',
                marginBottom :'0.5rem'
                
            };
    const submitTodosHandler = (event)=>{
        event.preventDefault();
        props.setTodos([
            ...props.todos,
            {
            title : props.formState.title,
             description : props.formState.description,
             createdAt : new Date(),
             FinishedAt :new Date(new Date().getTime()+3600000) ,
             archiveAt : null,
            id : Math.random()*1000}]);
        props.setformState({
            title :'',
            description : '',
            createdAt : null,
            FinishedAt :null ,
            archiveAt : null,
           id : -1
        });
    }
    const inputChangedHandler = (event , identifier)=>{
       
        if(identifier==='title'){
            props.setformState({
                ...props.formState,
                title : event.target.value
            })
        }else{
            props.setformState({
                ...props.formState,
                description : event.target.value
            })

        }
    }

    return(
 
            <form className={classes.Form}>
            <TextField 
                onChange={(event)=>inputChangedHandler(event,'title')}
                value = {props.formState.title}
                variant="outlined"
                label = 'Title'
                fullWidth
                size="small"
                sx={textFieldStyles}
      

            />
               <TextField 
                onChange={(event)=>inputChangedHandler(event,'description')}
                value = {props.formState.description}
                variant="outlined"
                label = 'description'
                multiline
                rows={3}
                sx={textFieldStyles}
                fullWidth
                
                

            />
            <Button
            variant="contained"
            type="submit"
            onClick={props.formMode ==='add'?submitTodosHandler:props.continueUpdateTodo  }
            startIcon = {props.formMode==='add'? 
            <AddBoxIcon color="0025ca" fontSize="2rem"/>  :
            <EditOutlinedIcon color="0025ca" fontSize="2rem"/>}
            >
               {props.formMode==='add'? 'Add Todo' : 'Update Todo'} 
            </Button>

        </form>




    );
}

export default Form;