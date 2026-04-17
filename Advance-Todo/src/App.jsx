import React, { useState } from 'react';
import Todo from './components/Todo';

const App = () => {
  const [input , setInput] = useState("");
  const [todos , setTodos] = useState([]);

  const createTodos = (e)=>{
    e.preventDefault();
    if(!input){
      alert('please bKL enter Your Todo Name')
      return;
    }
    const newInput = {
      id: Date.now(),
      name:input
    };
    // console.log("Todo are Created");

    setTodos([...todos , newInput ]);
    setInput("");

  }

  return (
    <div>

      <h1>Advance Todo App</h1>

        <form onSubmit={createTodos}>
          <input type="text" placeholder='Enter Your Todo Name' value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button value="submit">Create Todo</button>
        </form>  



        <div>
          {todos.map((item)=>{
            <div key={item.id}>
              <h2>{item.name}</h2>
              <Todo/>
            </div>
          })}  
        </div>  
    </div>
  )
}

export default App




// import React, { useState } from "react";
// import "./App.css"
// import Todo from "./components/Todo";

// const App = ()=>{
//   const[todos, setTodos]= useState([])
//   const[category, setCategory]= useState("")

 

//   const createTodos = (e)=>{
//     e.preventDefault();
//     if(!category)
//     {
//       alert("Enter your App List")
//       return;
//     }
     
//     const newCategory = {
//       id: Date.now(),
//       name:category
//     };

//     setTodos([...todos, newCategory])
//     setCategory("");
//   };

//   return(
//     <div className="app">
//       <h1>Todo App</h1>
    
//     <form onSubmit={createTodos}>
//       <input type="text" placeholder="Enter List Name" value = {category} onChange={(e)=> setCategory(e.target.value)}/>
//     <button type="submit">Create-Todo</button>
//     </form>

//     <div className="container">
//       {todos.map((item)=>(
//         <div key ={item.id} className="box">
//           <h2>{item.name}</h2>
//           <Todo/>

//         </div>
//       ))}
//     </div>

//     </div>
//   )

// }
// export default App
















