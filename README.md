# 🏠 Ayat - Neighborhood Community Platform

<div align="center">

![Ayat Logo](https://img.shields.io/badge/Ayat-Neighbors%20Helping%20Neighbors-blue?style=for-the-badge&logo=home)

**A modern, full-stack community platform connecting neighbors in Bangalore for mutual aid and support**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-green?style=for-the-badge)](https://sensational-bienenstitch-4d5d3a.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-TechTyphoon-black?style=for-the-badge&logo=github)](https://github.com/TechTyphoon)
[![Email](https://img.shields.io/badge/Email-Contact%20Developer-red?style=for-the-badge&logo=gmail)](mailto:mr.mahendrareddy21@gmail.com)

</div>

---

## 📖 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [💻 Development Setup](#-development-setup)
- [🔧 Configuration](#-configuration)
- [📱 Usage Guide](#-usage-guide)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Support](#-support)

---

## 🌟 Overview

**Ayat** is a comprehensive neighborhood community platform designed to strengthen local connections and facilitate mutual aid among neighbors in Bangalore. The platform enables residents to share announcements, request help, offer services, and build meaningful relationships within their local community.

### 🎯 Mission
To build stronger, more connected communities by leveraging technology to facilitate neighbor-to-neighbor support and mutual aid.

### 🌍 Impact
- **Community Building**: Connects neighbors who might never have met otherwise
- **Mutual Aid**: Facilitates help exchange for daily needs and emergencies
- **Social Capital**:It Builds trust and relationships through reputation systems
- **Local Resilience**: Strengthens neighborhood capacity for self-support

---

## ✨ Key Features

### 🏘️ **Community Features**
- **📢 Community Feed**: Share announcements, offers, and general posts with neighbors
- **🤝 Service Exchange**: Request help or offer services within your neighborhood  
- **💬 Real-time Interactions**: Like posts, comment, and engage with community
- **🔔 Smart Notifications**: Get notified about likes, comments, service requests, and completions
- **📍 Neighborhood-based Content**: All content filtered by geographic location

### 👥 **User Management**
- **🔐 Secure Authentication**: JWT-based login/registration system
- **👤 Rich User Profiles**: Showcase skills, bio, reputation, and profile pictures
- **⭐ Reputation System**: Community-driven rating system for service providers
- **✏️ Profile Management**: Edit profile information, skills, and preferences

### 🛠️ **Service Management**
- **📝 Service Requests**: Create, edit, delete service requests
- **✅ Service Acceptance**: Volunteer to help neighbors
- **✔️ Service Completion**: Mark services as completed
- **📊 Service Reviews**: Rate and review completed services
- **🏷️ Category Filtering**: Organize services by type (Household, Tutoring, Tech Help, etc.)

### 📊 **Admin Dashboard** (Admin Only)
- **📈 Community Analytics**: Real-time engagement metrics and health indicators
- **🕸️ Network Analysis**: Social connection patterns and community structure analysis
- **📤 Data Export**: Export community data in CSV/JSON formats for analysis
- **👥 User Management**: View community member information and statistics

### 📱 **Technical Features**
- **📱 Mobile Responsive**: Works seamlessly on all devices and screen sizes
- **🔄 Offline Capability**: Automatic fallback to localStorage when backend unavailable
- **⚡ Real-time Updates**: Live synchronization when backend is connected
- **📲 Progressive Web App**: Can be installed on mobile devices
- **🌐 Cross-browser Support**: Works on all modern browsers

---

## 🏗️ Architecture

### **Technology Stack**

#### **Frontend**
```
React 18.3.1          → Modern UI framework with hooks and context
TypeScript 5.5.3      → Type safety and enhanced developer experience
Tailwind CSS 3.4.1    → Utility-first CSS framework for rapid styling
Vite 5.4.2            → Fast build tool and development server
React Router DOM 6.8.1 → Client-side routing
Lucide React 0.344.0  → Beautiful, consistent icon library
```

#### **Backend**
```
Node.js               → JavaScript runtime environment
Express.js 4.18.2     → Web application framework
MongoDB               → NoSQL database for flexible data storage
Mongoose              → MongoDB object modeling for Node.js
JWT                   → JSON Web Tokens for secure authentication
bcryptjs 2.4.3        → Password hashing for security
```

#### **Security & Performance**
```
Helmet.js             → Security headers
CORS                  → Cross-origin resource sharing configuration
Rate Limiting         → API abuse prevention
Input Validation      → Comprehensive data validation
Password Hashing      → Secure password storage
Token-based Auth      → Stateless authentication
```

### **System Architecture**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (React)       │◄──►│   (Node.js)     │◄──►│   (MongoDB)     │
│   Port: 5173    │    │   Port: 5000    │    │   Port: 27017   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### **Data Flow**
```
User Action → Optimistic Update → API Call → Database Update → 
Response Validation → State Reconciliation → UI Update
```

---

## 🚀 Quick Start

### **Prerequisites**
- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **MongoDB** v4.4 or higher ([Download](https://www.mongodb.com/try/download/community))
- **Git** for version control

### **1. Clone the Repository**
```bash
git clone https://github.com/TechTyphoon/ayat-community.git
cd ayat-community
```

### **2. Install Dependencies**
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### **3. Quick Demo (Frontend Only)**
```bash
# Start the frontend with mock data
npm run dev
```
Visit `http://localhost:5173` to see the platform with sample data.

### **4. Full Setup (With Backend)**
```bash
# Start MongoDB
# On macOS: brew services start mongodb-community
# On Ubuntu: sudo systemctl start mongod
# On Windows: Start MongoDB service

# Setup backend environment
cd server
cp .env.example .env
# Edit .env with your configuration

# Seed database with sample data
npm run seed

# Start backend
npm run dev

# In another terminal, start frontend
cd ..
npm run dev
```

---

## 💻 Development Setup

### **Environment Configuration**

#### **Backend Environment (.env)**
```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/ayat_development
MONGODB_TEST_URI=mongodb://localhost:27017/ayat_test

# JWT Security (IMPORTANT: Use a strong secret)
JWT_SECRET=your_super_secure_jwt_secret_key_minimum_32_characters
JWT_EXPIRE=7d

# Server Configuration
NODE_ENV=development
PORT=5000

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### **Frontend Environment (Optional)**
```env
VITE_API_URL=http://localhost:5000/api
```

### **Development Workflow**

#### **Running Development Environment**
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend  
npm run dev
```

#### **Available Scripts**
```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Backend
cd server
npm run dev          # Start with nodemon (auto-reload)
npm start            # Start production server
npm run seed         # Seed database with sample data
```

### **Project Structure**
```
ayat-community/
├── src/                          # Frontend source code
│   ├── components/              # React components
│   │   ├── Auth/               # Authentication components
│   │   ├── Dashboard/          # Main dashboard components
│   │   ├── Layout/             # Layout components (Header, Footer)
│   │   ├── Profile/            # User profile components
│   │   ├── Analytics/          # Admin analytics components
│   │   ├── Research/           # Data export components
│   │   └── Pages/              # Static pages (How it Works, etc.)
│   ├── context/                # React Context providers
│   ├── config/                 # API configuration
│   ├── types/                  # TypeScript type definitions
│   └── main.tsx               # Application entry point
├── server/                      # Backend source code
│   ├── models/                 # MongoDB models
│   ├── routes/                 # API routes
│   ├── middleware/             # Express middleware
│   ├── config/                 # Database configuration
│   └── server.js              # Server entry point
├── public/                     # Static assets
└── docs/                       # Documentation files
```

---

## 🔧 Configuration

### **Customization Options**

#### **1. Adding Your Neighborhood**
Edit `src/components/Layout/Header.tsx`:
```typescript
const neighborhoods = [
  'Your Neighborhood Name',
  'Koramangala', 'Indiranagar', // ... existing neighborhoods
];
```

#### **2. Branding Customization**
- **App Name**: Edit `index.html` title tag
- **Logo**: Update logo components in Header and AuthForm
- **Colors**: Modify `tailwind.config.js` color scheme
- **Fonts**: Update font imports in `index.html`

#### **3. Admin Access**
Update admin email in `src/components/Layout/Header.tsx`:
```typescript
const isAdmin = user?.email === 'your-admin-email@example.com';
```

#### **4. Service Categories**
Edit categories in `src/types/index.ts`:
```typescript
export interface ServiceRequest {
  category: 'YourCategory1' | 'YourCategory2' | 'Other';
  // ... other fields
}
```

---

## 📱 Usage Guide

### **For New Users**

#### **1. Registration**
1. Visit the application URL
2. Click "Don't have an account? Sign up"
3. Fill in your details (username, email, password, neighborhood)
4. Complete your profile with bio and skills
5. Start connecting with neighbors!

#### **2. Getting Started**
- **Browse Posts**: See what's happening in your neighborhood
- **Create Posts**: Share announcements, offers, or general updates
- **Request Help**: Create service requests when you need assistance
- **Offer Help**: Accept service requests from neighbors
- **Build Reputation**: Complete services and receive reviews

### **For Community Organizers**

#### **1. Deployment**
- Follow the setup guide above
- Deploy to a cloud service (see deployment options below)
- Share the URL with community members

#### **2. Community Management**
- Encourage initial registrations
- Seed content with announcements and offers
- Monitor community health through admin dashboard
- Facilitate introductions between neighbors

### **Demo Accounts**
For testing purposes, use these demo accounts:
- **Email**: john@example.com | **Password**: password123
- **Email**: sarah@example.com | **Password**: password123
- **Email**: mike@example.com | **Password**: password123

---

## 🚀 Deployment

### **Option 1: Frontend-Only (GitHub Pages)**
```bash
# Build and deploy to GitHub Pages
npm run build
npm run deploy
```

### **Option 2: Full-Stack Deployment**

#### **Backend Deployment (Heroku)**
```bash
# Install Heroku CLI and login
heroku create your-app-name-api
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set JWT_SECRET=your_secret_here
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL=https://your-frontend-domain.com

# Deploy
git subtree push --prefix server heroku main
```

#### **Frontend Deployment (Netlify)**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

#### **Alternative Platforms**
- **Railway**: One-click deployment with GitHub integration
- **DigitalOcean App Platform**: Easy full-stack deployment
- **Vercel**: Excellent for frontend with serverless functions

### **Docker Deployment**
```yaml
# docker-compose.yml
version: '3.8'
services:
  backend:
    build: ./server
    ports: ["5000:5000"]
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/ayat_production
    depends_on: [mongo]
  
  frontend:
    build: .
    ports: ["80:80"]
    depends_on: [backend]
  
  mongo:
    image: mongo:6.0
    volumes: [mongo_data:/data/db]

volumes:
  mongo_data:
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Getting Started**
1. **Fork the repository** on GitHub
2. **Clone your fork**: `git clone https://github.com/yourusername/ayat-community.git`
3. **Create a feature branch**: `git checkout -b feature/amazing-feature`
4. **Make your changes** and test thoroughly
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Submit a Pull Request** with detailed description

### **Contribution Guidelines**
- Follow existing code style and conventions
- Add TypeScript types for new features
- Test both frontend and backend changes
- Update documentation for new features
- Write clear commit messages

### **Areas for Contribution**
- 🐛 **Bug Fixes**: Help identify and fix issues
- ✨ **New Features**: Add functionality to improve the platform
- 📚 **Documentation**: Improve guides and documentation
- 🎨 **UI/UX**: Enhance user interface and experience
- 🔒 **Security**: Improve platform security measures
- 🌐 **Localization**: Add support for multiple languages

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **What this means:**
- ✅ **Commercial use** - Use for commercial projects
- ✅ **Modification** - Modify the code as needed
- ✅ **Distribution** - Share with others
- ✅ **Private use** - Use for personal projects
- ❗ **License and copyright notice** - Include original license

---

## 📞 Support

### **Get Help**

#### **📧 Email Support**
- **Developer**: [mr.mahendrareddy21@gmail.com](mailto:mr.mahendrareddy21@gmail.com)
- **Subject**: Include "Ayat Support" for faster response
- **Response Time**: Usually within 24 hours

#### **🐛 Bug Reports**
- **GitHub Issues**: [Create an issue](https://github.com/TechTyphoon/ayat-community/issues)
- **Email**: [mr.mahendrareddy21@gmail.com](mailto:mr.mahendrareddy21@gmail.com?subject=Ayat%20Bug%20Report)

#### **💡 Feature Requests**
- **GitHub Discussions**: Share ideas with the community
- **Email**: [mr.mahendrareddy21@gmail.com](mailto:mr.mahendrareddy21@gmail.com?subject=Ayat%20Feature%20Request)

#### **📚 Documentation**
- **Technical Docs**: See `TECHNICAL_DOCUMENTATION.md`
- **Deployment Guide**: See `DEPLOYMENT_GUIDE.md`
- **API Docs**: Available at `/api` endpoint when backend is running

### **Community**

#### **🌟 Show Your Support**
- ⭐ **Star this repository** if you find it helpful
- 🍴 **Fork and contribute** to make it better
- 📢 **Share with others** who might benefit
- 💬 **Provide feedback** to help us improve

#### **🔗 Connect**
- **GitHub**: [@TechTyphoon](https://github.com/TechTyphoon)
- **Email**: [mr.mahendrareddy21@gmail.com](mailto:mr.mahendrareddy21@gmail.com)
- **Live Demo**: [Visit Ayat](https://sensational-bienenstitch-4d5d3a.netlify.app)

---

## 🎯 Roadmap

### **Immediate (Next Release)**
- [ ] WebSocket integration for real-time updates
- [ ] Push notifications for mobile devices
- [ ] Advanced search and filtering
- [ ] User blocking and reporting features

### **Short Term (3-6 months)**
- [ ] Event planning and coordination features
- [ ] Marketplace for buying/selling items
- [ ] Integration with local business directories
- [ ] Multi-language support

### **Long Term (6+ months)**
- [ ] Mobile app (React Native)
- [ ] Integration with smart city services
- [ ] AI-powered matching for services
- [ ] Video calling for remote assistance

---

## 🙏 Acknowledgments

### **Built With Love**
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Node.js & Express** - Backend framework
- **MongoDB** - Database
- **Lucide React** - Icon library

### **Inspiration**
This project was inspired by the need for stronger neighborhood communities and the power of technology to bring people together for mutual aid and support.

### **Special Thanks**
- All community organizers who believe in neighbor-to-neighbor support
- Beta testers who provided valuable feedback
- Open source contributors who make projects like this possible

---

<div align="center">

**Made with ❤️ for stronger communities**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-success?style=for-the-badge)](https://sensational-bienenstich-4d5d3a.netlify.app)

**Version**: 2.0.0 | **Last Updated**: December 2024 | **Maintainer**: [TechTyphoon](https://github.com/TechTyphoon)

</div>