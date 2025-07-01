import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  username: string
  email: string
  neighborhood: string
  bio?: string
  skills?: string[]
  profilePicture?: string
  reputation?: number
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
  updateProfile: (userData: Partial<User>) => Promise<void>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, _password: string) => {
    setIsLoading(true)
    try {
      // Mock login - replace with actual API call
      const mockUser: User = {
        id: '1',
        username: 'demo_user',
        email,
        neighborhood: 'Koramangala',
        bio: 'Community member',
        skills: ['Cooking', 'Tech Support'],
        reputation: 4.5
      }
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
    } catch (error) {
      throw new Error('Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: any) => {
    setIsLoading(true)
    try {
      // Mock registration - replace with actual API call
      const newUser: User = {
        id: Date.now().toString(),
        ...userData,
        reputation: 0
      }
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
    } catch (error) {
      throw new Error('Registration failed')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const updateProfile = async (userData: Partial<User>) => {
    if (!user) return
    
    const updatedUser = { ...user, ...userData }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    login,
    register,
    logout,
    updateProfile,
    isLoading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}