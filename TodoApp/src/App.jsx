// import React, {useState} from "react";
import './App.css'

// const App = ()=> {

//    const [title , setTitle] = useState('');
//   const [description , setDescription] = useState('');
//   const [todo , setTodo] = useState([]);

//   const addTodo = (event)=>{
//     event.preventDefault();
//     console.log(title);
//     console.log(description);

//     const obj = {
//       title , description , id: Date.now()
//     }
//     // insted of this L
//     // todo.push(obj)
//     // console.log(obj);
//     // setTodo([...todo])
//       // use this : both are same work
//     setTodo([...todo, obj])
//     console.log(obj);
//   }

//   const updateTodo = (action , index)=>{
//     console.log(action , index);
//     if(action === 'delete'){
//       todo.splice(index , 1)
//       setTodo([...todo])
//     }else{
//       const updateTitle = prompt('Enter New Title' , todo[index].title)
//       todo[index].title = updateTitle
//       setTodo([...todo])
//     }
    
//   }

//   return(
//     <>
//     <h1>Todo App</h1>
//   <form onSubmit={addTodo} >

//     <input type="text" placeholder="Enter title" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
//     <br /><br />
//     <textarea placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
//     <br /> <button type="submit">AddTodo</button>
//   </form>

    
//     {todo.length>0 ? todo.map((item , index )=>{
//         return <div className="single-todo" key={item.id}>
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//           <button onClick={()=>updateTodo("delete" , index)}>Delete</button>
//           <button onClick={()=>updateTodo("edit" , index)}>edit</button>
//         </div>
//       }): <h3>No Todo is found</h3> }
    

//     </>
//   )
// }

// export default App


import React,{useState} from "react";

const App = () =>{
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [todo , setTodo] = useState([]);

  const addTodo = (event) =>{
      event.preventDefault();
      console.log(title);
      console.log(description);

      const obj = {
        title , description , id: Date.now()
      }
      setTodo([...todo, obj ])
      console.log(obj);
    }

    const updateTodo = (action , index)=>{
      console.log(action , index);
      if(action === "delete"){
        todo.splice(index, 1)
        setTodo([...todo])

        
      }else{
        const updateTitle = prompt("Enter New Title" , todo[index].title) 
        todo[index].title = updateTitle;
        setTodo([...todo])
      }
    }

  return(
    <>
      <form onSubmit={addTodo}>
        <h1>Todo App</h1>
        <input type="text" value={title} placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} />
        <br /> <br />
        <textarea placeholder="Enetr your description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <br />
        <button type="submit">Add Todo</button>
      </form>


      {todo.length>0? todo.map((item , index) =>{
        return (
          <div className="single-todo">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={()=>updateTodo("delete" , index)}>Delete</button>
          <button onClick={()=>updateTodo("edit" , index)}>Edit</button>
        </div>
        )
      }): <h3>Todo Not Fuound</h3> }
    </>
  )
}

export default App