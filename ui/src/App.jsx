import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { Home } from './pages/Home'
import { AuthGuard } from './components/AuthGuard'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

export function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthGuard />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
