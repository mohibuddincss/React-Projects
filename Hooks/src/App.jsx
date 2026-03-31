import { useState } from "react";

function App(){
  const [title , setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todo , setTodo] = useState([]);

  // add Todo

  const addTodo = (event)=>{
    event.preventDefault();
    console.log(title);
    console.log(description);

    const obj = {
      title , description //, id:date.now()
    }
    todo.push(obj)
    console.log(obj);
    setTodo([...todo])
  }

  // update and delete  two in one
  // const updateTodo = (action )=>{
  //   console.log(action);
  //   if(action === "delete"){
  //     todo.splice(index , 1)
  //     setTodo([...todo])
  //   }
  // }

  return(
  <>
    <h1>Todo App</h1>
    <form onSubmit={addTodo} >
      <input type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <br /> <br />
      <textarea placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
    <br /><br />
    <button type="submit">Add Todo</button>
    </form>

    {todo.length>0 ? todo.map() }


  </>
  )
  
}
export default App
