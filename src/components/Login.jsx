import { useState } from 'react'
import './Login.css'

export default function Login(){

    const [ enteredValue, setEnteredValue ] = useState({
        username: '',
        password: ''
    })

    function handleInputValue(identifier, value) {
        setEnteredValue((prevValue) => ({
            ...prevValue,
            [identifier]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(enteredValue.username + ' ' + enteredValue.password);
    }

    return(
        <>
            <div className='container'>

                <form className='login-form' onSubmit={handleSubmit}>
                    <h1>Login Form</h1>
                    
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' name='username' placeholder='Username' 
                            onChange={(e) => handleInputValue('username', e.target.value)}
                            value={enteredValue.username} required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' placeholder='Password' 
                            onChange={(e) => handleInputValue('password', e.target.value)} 
                            value={enteredValue.password} required/>
                    </div>
                    <label>
                        <input type='checkbox' />Remember me
                    </label>

                    <button className='btn-login'>Login</button>
                </form>
                
                
                <div className='welcome'>
                    <h1>Welcome back!</h1>
                    <p>Please enter your username and password to access your account. Don't forget to check 'Remember me' if you want to stay logged in. If you don’t have an account yet, sign up now to get started!</p>
                    <button className='btn-register'>Register</button>
                </div>
            </div>
        </>
    )
}