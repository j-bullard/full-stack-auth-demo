import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function Logout() {
  const { setIsAuthenticated } = useAuth()
  const navigate = useNavigate()

  return (
    <button
      type='button'
      onClick={async () => {
        const res = await fetch('http://localhost:3000/api/v1/users/logout', {
          method: 'POST',
          credentials: 'include',
        })

        if (res.ok) {
          setIsAuthenticated(false)
          navigate('/login')
        }
      }}
    >
      Logout
    </button>
  )
}
