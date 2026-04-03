// import React, {useState} from "react";

// const App=()=>{
//   const [toggle , setToggle] = useState(false)
//   return(
//     <>
//     <h1>Hello World</h1>
//     <button onClick={()=>setToggle(!toggle)}>{toggle ? "On" : "Off"}</button>
//     {!toggle && <p>Lorem ipsum dolor sit amet.</p> }
//     {!toggle ? <p>Lorem ipsum dolor sit amet.</p> : null }
//     </>
//   )
// }
// export default App



// import React, { useState } from 'react'
// import Card from './components/Card'

// const App = () => {
//   const [toggle , setToggle] = useState(true)
//   return (
//     <>
//       <h1>Hello world</h1>
//       <button onClick={()=>setToggle(!toggle)}>toggle btn</button>
//       {toggle && <Card title="Iphone 15 pro" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi, accusamus deserunt consectetur ex minus minima iusto illum voluptates iste atque vel earum. Ipsa ea dignissimos eius. Perspiciatis, beatae fugiat." btnTitle="reset" />}
//     </>
//   )
// }

// export default App




// import React , {useEffect , useState} from "react";

// function App (){
//   const [loading , setLoading] = useState(true);
//   const [error , setError] = useState(false);
//   const [users , setUsers] = useState(null);
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(res => {
//       console.log(res);
//       setUsers(res)
//     }).catch(err=>{
//       console.log(err);
//       setError(err)
//     }).finally(()=>{
//       setLoading(false)
//     })
//   },[])
//   return(
//     <>
//     <h1>Hello World</h1>
//     {loading && <h1>Loading...</h1> }
//     {error && <h1>internal Server Error</h1>}

// {users && users.map(item=>{
//   return <h1 key={item.id}>{item.name}</h1>
// })}

//     </>
//   )
// }
// export default App

import React, {useState , useEffect} from "react";

function App(){
const [user , setUser] = useState(null);
const [loading , setLoading] = useState(true);
const [error , setError] = useState(false);
  

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
.then(res=>{
  console.log(res);
  setUser(res)

}).catch(error=>{
  console.log(error);
  setError(error)
  
}).finally(()=>{
  setLoading(false);
})
},[])
return(
  <>
  <h1>Hello World</h1>
  {loading && <h1>...Loading</h1> }
  {error && <h1>internal server error</h1>}

  {user && user.map(item=>{
    return <h1 key={item.id}>{item.name}</h1>
  })}
  </>
)
}

export default App