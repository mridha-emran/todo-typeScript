import React from "react";
import './style.css'

interface Props {
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    eventHandler:(e: React.FormEvent)=>void
}
const InputFilds = ({todo,setTodo,eventHandler}:Props)=>{
    return(
        <div>
            <form className="input" onSubmit={eventHandler}>
                <input type="text" placeholder="enter a task" className="inputBox"
                    value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
                <button className="inputSubmit" type="submit">go</button>
            </form>
        </div>
    )
}

export default InputFilds