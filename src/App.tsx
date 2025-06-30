import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { DataProvider } from './context/DataContext'
import Header from './components/Layout/Header'
import Dashboard from './components/Dashboard/Dashboard'
import AuthForm from './components/Auth/AuthForm'
import Profile from './components/Profile/Profile'
import Analytics from './components/Analytics/Analytics'
import Research from './components/Research/Research'
import HowItWorks from './components/Pages/HowItWorks'

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-7xl">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<AuthForm />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/research" element={<Research />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
              </Routes>
            </main>
          </div>
        </Router>
      </DataProvider>
    </AuthProvider>
  )
}

export default App