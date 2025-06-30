import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext'
import AuthForm from '../Auth/AuthForm'
import PostForm from './PostForm'
import PostList from './PostList'
import ServiceRequestForm from './ServiceRequestForm'
import ServiceRequestList from './ServiceRequestList'

const Dashboard: React.FC = () => {
  const { user } = useAuth()
  const { posts, serviceRequests } = useData()

  if (!user) {
    return <AuthForm />
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Welcome to {user.neighborhood}!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Connect with your neighbors, share announcements, and help each other out.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Posts */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
              Share with Community
            </h2>
            <PostForm />
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Community Feed
            </h2>
            <PostList posts={posts} />
          </div>
        </div>

        {/* Right Column - Services */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-6 bg-purple-500 rounded-full mr-3"></div>
              Request Help
            </h2>
            <ServiceRequestForm />
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-1 h-6 bg-orange-500 rounded-full mr-3"></div>
              Service Requests
            </h2>
            <ServiceRequestList requests={serviceRequests} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard