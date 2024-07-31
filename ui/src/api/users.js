export const checkAuth = async () => {
  const res = await fetch('http://localhost:3000/api/v1/users/checkAuth', {
    method: 'GET',
    credentials: 'include',
  })

  return res.ok
}

export const login = async ({ username, password }) => {
  const res = await fetch('http://localhost:3000/api/v1/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  })

  return res.ok
}

export const signup = async ({ username, password }) => {
  const res = await fetch('http://localhost:3000/api/v1/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  })

  return res.ok
}
