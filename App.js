import React , {useState} from 'react';

import Login from './Login';

import Register from './Register';

import style from './style.css';

function App()  {
    const[showlogin,setshowLogin] = useState(true);


    const toggleForm = () => {

        setshowLogin(!showlogin);

    };


    return(
        <div className='App'>
            {showlogin ? <Login/> : <Register/>}


            <button onClick={toggleForm}>

                {setshowLogin ? 'Go To Register ' : 'Go To Login'}
            </button>
        </div>
    );

}

export default App;
