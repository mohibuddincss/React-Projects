
 import React, { useState } from "react";

export default function Todo(props) {
const [task , setTask] = useState("");
const [tasks, setTasks] = useState([]);

const addTask = () =>{
    console.log('Add Task');
    
    if(!task){
        alert('Enter You Todo')
        return;
    }

    const newTask = {
        id: Date.now(),
        text:task
    };
    setTasks([...tasks , newTask])
    setTask("");
}

const updateTodo = (action , index)=>{
    if(action === 'delete'){
        const updated = [...tasks];
        updated.splice(index , 1);
        setTasks(updated)
    }else{
            const updatedTitle = prompt("Enter updated title", tasks[index].text);

            if(!updatedTitle) return;

            const updated = [...tasks];
            updated[index].text = updatedTitle;
            
            setTasks(updated);
        }
}

  return (
    <div>
        <h1>Chotu List</h1>
      <div>
        <input type="text" value={task} onChange={()=>setTask(e.target.value)} />
        <button onClcik={addTask} >Add</button>
      </div>
      
      <div>
        {tasks.map((item , index)=>(
            <div key={item.id}> 
            <p>{item.text}</p>

            <div>
                <button className="delete"
                onClick={() => updateTodo('delete', index)}>
                    

                    Delete
                </button>

                <button className="edit"
                onClick={()=>updateTodo('edit' , index)}>
                    Edit
                </button>
            </div>

            </div>
        ))}
      </div>
      
    </div>
  );
}
// const Todo = (props) => {

//     const [task, setTask] = useState("")
//     const [tasks, setTasks] = useState([]);

//     const addTask = () => {
//         if (!task) {
//             alert("Enter your Todo")
//             return;
//         }

//         const newTask = {
//             id: Date.now(),
//             text: task
//         };
//         setTasks([...tasks, newTask])
//         setTask("");
//     }

//     const updateTodo = (action, index) => {
//         if(action === "delete"){
//             const updated = [...tasks];
//             updated.splice(index,1);
//             setTasks(updated)
//         }

//         else{
//             const updatedTitle = prompt("Enter updated title", tasks[index].text);

//             if(!updatedTitle) return;

//             const updated = [...tasks];
//             updated[index].text = updatedTitle;
            
//             setTasks(updated);
//         }
//     }

//     return (
//         <div>
//             <div className="todo-input">
//             <input
//                 type="text"
//                 value={task}
//                 onChange={(e) => setTask(e.target.value)}
//                 placeholder="Add task..."
//             />
//             <button className="btn edit" onClick={addTask}>Add</button>
//             </div>


//             <div>
//                 {tasks.map((item,index) => (
//                     <div key={item.id} className="task">
//                         <p>{item.text}</p>

//                         <div className="actions">
//                             <button
//                                 className="btn delete"
//                                 onClick={() => updateTodo("delete", index)}>
//                                 Delete
//                             </button>
//                             <button
//                                 className="btn edit"
//                                 onClick={() => updateTodo("update", index)}>
//                                 Edit
//                             </button>
//                         </div>

//                     </div>
//                 ))}
//             </div>

//         </div>
//     );


// }
// export default Todo