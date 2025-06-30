import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Mail, Github, Twitter, Linkedin, Heart, Shield, FileText, Users, HelpCircle } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Ayat</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building stronger neighborhoods through mutual aid and community connection. 
              Connecting neighbors in Bangalore for support and collaboration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:mr.mahendrareddy21@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/TechTyphoon/ayat-community" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/techtyphoon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/techtyphoon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2">
                  <HelpCircle className="h-4 w-4" />
                  <span>How it Works</span>
                </Link>
              </li>
              <li>
                <Link to="/community-guidelines" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Community Guidelines</span>
                </Link>
              </li>
              <li>
                <Link to="/safety-tips" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Safety Tips</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:mr.mahendrareddy21@gmail.com?subject=Ayat Support Request" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact Support</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="text-gray-300">
                <p className="font-medium text-white mb-1">Developer</p>
                <p>TechTyphoon</p>
              </div>
              <div className="text-gray-300">
                <p className="font-medium text-white mb-1">Email</p>
                <a 
                  href="mailto:mr.mahendrareddy21@gmail.com" 
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  mr.mahendrareddy21@gmail.com
                </a>
              </div>
              <div className="text-gray-300">
                <p className="font-medium text-white mb-1">Location</p>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Ayat Community Platform.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for stronger communities.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Version 2.0.0</span>
              <span>•</span>
              <a 
                href="https://github.com/TechTyphoon/ayat-community" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Open Source
              </a>
              <span>•</span>
              <span>MIT License</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer