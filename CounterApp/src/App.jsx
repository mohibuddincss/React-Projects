import {useState} from 'react'
import './App.css'

function App(){
   const [counter , setCounter] = useState(0)
  const addCounter = ()=>{
    console.log("Add Counter");
    // setCounter(counter + 1) it is a wrong mehtod
    setCounter(()=> counter +1)
  }

  const lessCounter = ()=>{
    if(counter > 0){
      setCounter(counter -1)
      //  console.log("less Counter");
      setCounter(()=> counter-1)
    }
  }


  return(
  <>
  
 <div className="container">
    <h1 className='h'>Counter App</h1>
   <div className="box">
      <button className="Add" id='Bbtn' onClick={addCounter}>+</button>
      <h1 >{counter}</h1>
      <button className="less" id='Bbtn' onClick={lessCounter}>-</button>
   </div>
 </div>
</>
)
}
export default App


