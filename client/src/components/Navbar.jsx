import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">📋 TaskBoard Pro</Link>
        <div className="d-flex align-items-center">
          {user ? (
            <>
              <span className="text-white me-3">👤 {user.email}</span>
              <button className="btn btn-outline-light btn-sm" onClick={() => {
                logout()
                navigate('/login')
              }}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light btn-sm me-2" to="/login">Login</Link>
              <Link className="btn btn-light btn-sm" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
