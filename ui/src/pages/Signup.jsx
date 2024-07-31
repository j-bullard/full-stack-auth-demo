import { useState } from 'react'
import { signup } from '../api/users'
import { Link, useNavigate } from 'react-router-dom'

export function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const success = await signup({ username, password })
      if (!success) {
        throw new Error('Signup failed')
      }

      alert('Signup successful! Please login.')
      navigate('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <h1>Signup</h1>
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
            autoComplete='new-password'
          />
        </div>
        <button type='submit'>Signup</button>
      </form>

      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}
