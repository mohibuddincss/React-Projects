import React from 'react'
import { Route , Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Student from './pages/dashboard/Student'
import Teacher from './pages/dashboard/Teacher'
import StudentDetail from './pages/dashboard/StudentDetail'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Services from './pages/Services'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
       
        <Route path='/dashboard' element={<Dashboard/>} >
            <Route  path='student' element={<Student/>} >
            <Route path=':id' element={<StudentDetail/>} />
            </Route>
            <Route path='teacher' element={<Teacher/>} />
        </Route>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
