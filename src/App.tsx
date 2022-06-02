import React, { useState } from 'react';
import './App.css';
import InputFilds from './components/InputFilds';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC =()=> {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState <Todo[]>([])
  const eventHandler=(e:React.FormEvent)=>{

    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("")
    }
  }
  console.log(todos)
  return (
    <div className="App">
       <span className='heading'>todo list</span>
       <InputFilds todo={todo} setTodo={setTodo} eventHandler={eventHandler} />
       {/* {todos.map((t)=>
         <li>{t.todo}</li>
       )} */}
       <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
