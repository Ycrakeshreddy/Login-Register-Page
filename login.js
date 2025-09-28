import React , {useState} from 'react';

function Login() {
  const[Email,setEmail] = useState('');
  const[Password,setPassword] = useState('');


  const handleLogin = () => {

    console.log("Email : ",Email);
    console.log("Password : ",Password)
  };


return (
  <div>

<h1>Login</h1>

    <input 
    type='Email'
    placeholder='enter Your Email'
    value={Email}
    onChange={(e) => setEmail(e.target.value)}
    />

<br></br>
<br></br>


<input
type='Password'
placeholder='enter your password'
value={Password}
onChange={(e)=>setPassword(e.target.value)}

/>

<br></br>

<button onChange={handleLogin}> Login </button>
  </div>
);

}

export default Login;
