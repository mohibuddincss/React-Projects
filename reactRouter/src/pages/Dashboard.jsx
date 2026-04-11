// import React from 'react'
// import { Link, Outlet } from 'react-router'

// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>

//         <nav>
//             <Link to={"profile"}>Profile</Link>
//             <Link to={"setting"}>Setting</Link>
//             <Outlet/>
//         </nav>
//     </div>
//   )
// }

// export default Dashboard
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard">
        
        <div className="sidebar">
          <Link to="profile">Profile</Link>
          <Link to="setting">Setting</Link>
        </div>

        <div className="dashboard-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;