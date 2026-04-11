function Login() {
  return (
    <div className="login-container">
      <h3>Login</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

export default Login;











// import React from 'react'
// import { useNavigate } from 'react-router';
// function Login() {
//     const navigate = useNavigate()
//     const Login = ()=>{
//         navigate('/about');
//     }
//   return (
//     <div>
//       <button onClick={Login} >Login</button>
//     </div>
//   )
// }

// export default Login
