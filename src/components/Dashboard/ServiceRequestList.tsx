import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext'
import { Clock, CheckCircle, User } from 'lucide-react'

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
        return 'bg-yellow-100 text-yellow-800'
      case 'accepted':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
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

  if (requests.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No service requests yet.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div key={request.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">{request.title}</h3>
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
              {getStatusIcon(request.status)}
              <span>{request.status}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
            <span>By: {request.author}</span>
            <span>Category: {request.category}</span>
            <span>{new Date(request.timestamp).toLocaleDateString()}</span>
          </div>
          
          <p className="text-gray-700 mb-3">{request.description}</p>
          
          {request.acceptedBy && (
            <p className="text-sm text-blue-600 mb-2">
              Accepted by: {request.acceptedBy}
            </p>
          )}
          
          <div className="flex space-x-2">
            {request.status === 'open' && user?.username !== request.author && (
              <button
                onClick={() => handleAccept(request.id)}
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
              >
                Accept
              </button>
            )}
            
            {request.status === 'accepted' && 
             (user?.username === request.author || user?.username === request.acceptedBy) && (
              <button
                onClick={() => handleComplete(request.id)}
                className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
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