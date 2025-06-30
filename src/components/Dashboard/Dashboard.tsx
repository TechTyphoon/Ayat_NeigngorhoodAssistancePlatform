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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to {user.neighborhood}!
        </h1>
        <p className="text-gray-600">
          Connect with your neighbors, share announcements, and help each other out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Share with Community</h2>
            <PostForm />
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Community Feed</h2>
            <PostList posts={posts} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Request Help</h2>
            <ServiceRequestForm />
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Service Requests</h2>
            <ServiceRequestList requests={serviceRequests} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard