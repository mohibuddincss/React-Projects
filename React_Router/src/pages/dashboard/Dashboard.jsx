import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
        {/* when we use nessted Route me must remember <Outlet/> */}
      <h1>Dashboard</h1>
        <Link to="/student" >Student</Link>
        <Link to="/teacher" >Teacher</Link>
     <Outlet/>
    </div>
  )
}

export default Dashboard