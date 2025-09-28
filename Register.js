import React , {useState} from 'react';

function Register() {

  const[Name,setName] = useState('');
  const[Email,setEmail] = useState('');
  const[password,setPassword] = useState('');


  const handleRegister = () => {

    console.log("Name ",Name);
    console.log("Email : ",Email)
   console.log("Password : ",password);


  };

  return(

<div>
  <h1>Register</h1>

  <input
  type='Name'
  placeholder='Entet Your name '
  value={Name}
  onChange={(e) => setName(e.target.value)}
  />

<br></br>
<hr></hr>
    <input
  type='Email'
  placeholder='Entet Your Email '
  value={Email}
  onChange={(e) => setEmail(e.target.value)}
  />
<br></br>
<hr></hr>
    <input
  type='password'
  placeholder='Entet Your password'
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  />
<br></br>
<hr></hr>
<button onClick={handleRegister}> Register </button>
</div>
  );
}

export default Register;


