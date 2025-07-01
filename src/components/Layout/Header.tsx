import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Home, LogOut, BarChart3, FileText } from 'lucide-react'

const Header: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const isAdmin = user?.email === 'admin@example.com'

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Ayat</span>
          </Link>

          <nav className="flex items-center space-x-6">
            {user ? (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600">
                  Dashboard
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-blue-600">
                  Profile
                </Link>
                {isAdmin && (
                  <>
                    <Link to="/analytics" className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                      <BarChart3 className="h-4 w-4" />
                      <span>Analytics</span>
                    </Link>
                    <Link to="/research" className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                      <FileText className="h-4 w-4" />
                      <span>Research</span>
                    </Link>
                  </>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header