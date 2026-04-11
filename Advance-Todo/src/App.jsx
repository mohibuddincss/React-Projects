import React, { useState } from "react";
import "./App.css"
import Todo from "./components/Todo";

const App = ()=>{
  const[todos, setTodos]= useState([])
  const[category, setCategory]= useState("")

 

  const createTodos = (e)=>{
    e.preventDefault();
    if(!category)
    {
      alert("Enter your App List")
      return;
    }
     
    const newCategory = {
      id: Date.now(),
      name:category
    };

    setTodos([...todos, newCategory])
    setCategory("");
  };

  return(
    <div className="app">
      <h1>Todo App</h1>
    
    <form onSubmit={createTodos}>
      <input type="text" placeholder="Enter List Name" value = {category} onChange={(e)=> setCategory(e.target.value)}/>
    <button type="submit">Create-Todo</button>
    </form>

    <div className="container">
      {todos.map((item)=>(
        <div key ={item.id} className="box">
          <h2>{item.name}</h2>
          <Todo/>

        </div>
      ))}
    </div>

    </div>
  )

}
export default App