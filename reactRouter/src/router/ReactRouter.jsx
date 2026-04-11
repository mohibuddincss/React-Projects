import React from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
// import About from "../pages/Contact";
// import About from "../pages/Services";
import { Route , Routes  } from 'react-router'
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Notfound from '../component/Notfound';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Setting from '../pages/Setting';

function ReactRouter() {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='*' element={<Notfound/>}/>
            
            <Route path='/Dashboard' element={<Dashboard/>} >
                <Route path='profile' element={<Profile/>} />
                <Route path='setting' element={<Setting/>} />
            </Route>
        </Routes>


    </div>
  )
}

export default ReactRouter
