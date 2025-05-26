import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  function switchToRegister() {
    setIsLogin(false);
  }

  function switchToLogin() {
    setIsLogin(true);
  }

  return (
    <>
      {isLogin ? (
        <Login onRegisterClick={switchToRegister} />
      ) : (
        <Register onLoginClick={switchToLogin} />
      )
      }
    </>
  )
}

export default App
