import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { checkAuth } from '../api/users'

export const AuthContext = createContext({
  isAuthenticated: false,
  loading: true,
  setIsAuthenticated: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth().then((ok) => {
      setIsAuthenticated(ok)
      setLoading(false)
    })
  }, [])

  if (loading) return null

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
