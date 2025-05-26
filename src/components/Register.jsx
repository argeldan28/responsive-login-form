import { useState } from 'react'
import './Login.css'

export default function Register({ onLoginClick }) {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    function handleChange(identifier, value) {
        setFormData((prev) => ({
            ...prev,
            [identifier]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Register:', formData);
    }

    return (
        <div className='container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h1>Register</h1>

                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={formData.username}
                        onChange={(e) => handleChange('username', e.target.value)} required />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)} required />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)} required />
                </div>

                <button className='btn-register'>Register</button>
                <p style={{ textAlign: 'center' }}>or have account? 
                  <span
                    style={{
                      color: 'rgb(0, 174, 255)',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                    onClick={onLoginClick}
                  >
                    Login
                  </span>
                </p>
                
            </form>

            <div className='welcome'>
                <h1>Welcome!</h1>
                <p>Create your account by filling in your username, email, and password. It only takes a minute to join!</p>
            </div>
        </div>
    );
}
