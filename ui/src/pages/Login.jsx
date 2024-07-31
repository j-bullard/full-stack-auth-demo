import { useState } from 'react'
import { login } from '../api/users'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const success = await login({ username, password })
      if (!success) {
        throw new Error('Login failed')
      }
      setIsAuthenticated(true)
      navigate('/')
    } catch (error) {
      console.error(error)
      alert(error.message)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='username'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='current-password'
          />
        </div>
        <button type='submit'>Login</button>
      </form>

      <p>
        Don't have an account? <Link to='/signup'>Signup</Link>
      </p>
    </div>
  )
}
