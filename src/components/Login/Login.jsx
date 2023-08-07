import React, { useContext, useState } from 'react'
import './login.css'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const { setUserInfo } = useContext(UserContext)

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
        setRedirect(true)
      })
    } else {
      alert("Wrong information")
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form className='login' onSubmit={login}>
      <h2>Login</h2>
      <input type="email"
        placeholder='Your email should be placed here'
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input type="password"
        placeholder='Password'
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button>Login</button>
    </form>
  )
}

export default Login