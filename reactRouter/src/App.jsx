import React from 'react'
import ReactRouter from './router/ReactRouter'
import Navbar from './component/Navbar'
import Login from './component/Login'

function App() {
  return (
    <div>
      <Navbar/>
      <ReactRouter/>
      <Login/>
    </div>
  )
}

export default App
