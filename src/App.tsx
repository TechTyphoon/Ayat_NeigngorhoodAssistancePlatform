import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { DataProvider } from './context/DataContext'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Dashboard from './components/Dashboard/Dashboard'
import AuthForm from './components/Auth/AuthForm'
import Profile from './components/Profile/Profile'
import Analytics from './components/Analytics/Analytics'
import Research from './components/Research/Research'
import HowItWorks from './components/Pages/HowItWorks'
import CommunityGuidelines from './components/Pages/CommunityGuidelines'
import SafetyTips from './components/Pages/SafetyTips'
import TermsOfService from './components/Pages/TermsOfService'
import PrivacyPolicy from './components/Pages/PrivacyPolicy'

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<AuthForm />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/research" element={<Research />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/community-guidelines" element={<CommunityGuidelines />} />
                <Route path="/safety-tips" element={<SafetyTips />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </DataProvider>
    </AuthProvider>
  )
}

export default App