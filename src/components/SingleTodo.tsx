import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./style.css"


interface Props {
    todo:Todo
    todos:Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo =({todo,todos,setTodos}:Props)=>{
    const [edit,setEdit] = useState<boolean>(false)
    const [editTodo,setEditTodo] = useState<string>(todo.todo)

    const handleEventDone = (id:number)=>{
        setTodos(
            todos.map((todo)=>todo.id === id ?{...todo,isDone:!todo.isDone}:todo)
        )
    }
    const handleEventDelete =(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id !== id))
    }  
    
    const handleEventEdit = (e: React.FormEvent, id: number)=>{
      
            e.preventDefault()
            setTodos(
                todos.map((todo) =>(todo.id === id ? {...todo,todo:editTodo}:todo))
            )
            setEdit(false)
        
        
    }
  
    return(
        <form className="singleTodo" onSubmit={(e)=> handleEventEdit(e,todo.id)}>
             {
                 edit ? (
                     <input value={editTodo}
                    onChange ={(e)=>setEditTodo(e.target.value)
                    }
                    className="single-todo-text" />   
                 ):
                  todo.isDone ? (

                            <s className="single-todo-text">{todo.todo}</s>
                        ):(
                            
                            <span className="single-todo-text">{todo.todo}</span>
                        )
                    }    
           
           <div>
            <span className="icon" onClick={()=>{  
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }}}><AiFillEdit /></span>
            <span className="icon" onClick={()=>{handleEventDelete(todo.id)}}><AiFillDelete /></span>
            <span className="icon" onClick={()=>{handleEventDone(todo.id)}}><MdDone /></span>
           </div>
        </form>
    )
}

export default SingleTodo;