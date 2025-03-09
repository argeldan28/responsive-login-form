import './Login.css'

export default function Login(){
    return(
        <>
            <div className='container'>

                <div className='login-form'>
                    <h1>Login Form</h1>
                    
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' name='username' placeholder='Username' required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' placeholder='Password' required/>
                    </div>
                    <label>
                        <input type='checkbox' />Remember me
                    </label>

                    <button className='btn-login'>Login</button>
                </div>
                
                
                <div className='welcome'>
                    <h1>Welcome back!</h1>
                    <p>Please enter your username and password to access your account. Don't forget to check 'Remember me' if you want to stay logged in. If you don’t have an account yet, sign up now to get started!</p>
                    <button className='btn-register'>Register</button>
                </div>
            </div>
        </>
    )
}