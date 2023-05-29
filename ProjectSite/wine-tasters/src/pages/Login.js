import React, { useState } from 'react';
import '../App.css'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Alert from '../components/Alert.js';


const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async (event) => {

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const auth = getAuth();
        try{
            const userCretential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCretential.user;
            localStorage.setItem('accessToken', user.accessToken);
            localStorage.setItem('uID', user.uid);
            window.location.reload();
        }
        catch(error){
            setErrorMessage('Invalid Credentials');
        }
    }
    const handleRegister = async (event) => {

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const auth = getAuth();
        try{
            await createUserWithEmailAndPassword(auth, email, password)
                handleLogin();
        }
        catch(error){
            const errorCode = error.code;
            console.log(error)
            // if(errorCode === 400){
                setErrorMessage('Email already in use');
            // }
            // const errorMessage = error.message;
            // // ..
        };
        
    }
    return (
        <div className='loginContent'>
            {/* <label>
                <input type='text' placeholder='username' className='entryField' required />
            </label> */}
            {errorMessage.length > 0 ? <Alert message={errorMessage} /> : null}
            <label>
                <input type='text' placeholder='email@mail.com' className='loginEntryField' id='email' required autoComplete='off' />
            </label>
            <label>
                <input type='password' placeholder='password' className='loginEntryField password' id='password' required autoComplete='off' />
            </label>
            <button onClick={handleLogin}>
                Login
            </button>
            <button onClick={handleRegister}>
                Register
            </button>
        </div>
    )
}

export default Login;