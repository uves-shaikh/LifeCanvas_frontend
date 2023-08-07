import React, { useState } from 'react'
import './login.css'

const Register = () => {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    async function register(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body : JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'}
        })

        if(response.status === 200){
            alert('registration successful')
        } else {
            alert("Registeration failed")
        }
    }

    return (
        <form className='register' onSubmit={register}>
            <h2>Register</h2>
            <input type="email" 
            placeholder='Register With Your E-Mail'
            value={username}
            onChange={ev => setUsername(ev.target.value)}
            />
            <input type="password" 
            placeholder='Set Your Password'
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            />
            <button>Register</button>
        </form>
    )
}

export default Register