import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext'
import { Clock, CheckCircle, User, HandHeart } from 'lucide-react'

interface ServiceRequest {
  id: string
  title: string
  description: string
  category: string
  author: string
  status: 'open' | 'accepted' | 'completed'
  acceptedBy?: string
  neighborhood: string
  timestamp: string
}

interface ServiceRequestListProps {
  requests: ServiceRequest[]
}

const ServiceRequestList: React.FC<ServiceRequestListProps> = ({ requests }) => {
  const { user } = useAuth()
  const { updateServiceRequest } = useData()

  const handleAccept = (requestId: string) => {
    if (!user) return
    updateServiceRequest(requestId, {
      status: 'accepted',
      acceptedBy: user.username
    })
  }

  const handleComplete = (requestId: string) => {
    updateServiceRequest(requestId, {
      status: 'completed'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'accepted':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <Clock className="h-4 w-4" />
      case 'accepted':
        return <User className="h-4 w-4" />
      case 'completed':
        return <CheckCircle className="h-4 w-4" />
      default:
        return null
    }
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    return date.toLocaleDateString()
  }

  if (requests.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <HandHeart className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No service requests yet</h3>
        <p className="text-gray-500">When neighbors need help, their requests will appear here.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {requests.map((request) => (
        <div key={request.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 bg-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{request.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>By: <span className="font-medium">{request.author}</span></span>
                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{request.category}</span>
                <span>{formatDate(request.timestamp)}</span>
              </div>
            </div>
            <div className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium border ${getStatusColor(request.status)}`}>
              {getStatusIcon(request.status)}
              <span className="capitalize">{request.status}</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4 leading-relaxed">{request.description}</p>
          
          {request.acceptedBy && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Accepted by:</span> {request.acceptedBy}
              </p>
            </div>
          )}
          
          <div className="flex space-x-3 pt-4 border-t border-gray-100">
            {request.status === 'open' && user?.username !== request.author && (
              <button
                onClick={() => handleAccept(request.id)}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
              >
                Accept Request
              </button>
            )}
            
            {request.status === 'accepted' && 
             (user?.username === request.author || user?.username === request.acceptedBy) && (
              <button
                onClick={() => handleComplete(request.id)}
                className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 font-medium"
              >
                Mark Complete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServiceRequestList