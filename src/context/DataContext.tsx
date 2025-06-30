import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Post {
  id: string
  author: string
  content: string
  type: 'announcement' | 'offer' | 'general'
  timestamp: string
  likes: number
  comments: Comment[]
  neighborhood: string
}

interface Comment {
  id: string
  author: string
  content: string
  timestamp: string
}

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

interface DataContextType {
  posts: Post[]
  serviceRequests: ServiceRequest[]
  addPost: (post: Omit<Post, 'id' | 'timestamp' | 'likes' | 'comments'>) => void
  addServiceRequest: (request: Omit<ServiceRequest, 'id' | 'timestamp' | 'status'>) => void
  updateServiceRequest: (id: string, updates: Partial<ServiceRequest>) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const useData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

interface DataProviderProps {
  children: ReactNode
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'John Doe',
      content: 'Welcome to our neighborhood community! Looking forward to connecting with everyone.',
      type: 'announcement',
      timestamp: new Date().toISOString(),
      likes: 5,
      comments: [],
      neighborhood: 'Koramangala'
    }
  ])

  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([
    {
      id: '1',
      title: 'Need help with grocery shopping',
      description: 'Looking for someone to help with weekly grocery shopping',
      category: 'Household',
      author: 'Jane Smith',
      status: 'open',
      neighborhood: 'Koramangala',
      timestamp: new Date().toISOString()
    }
  ])

  const addPost = (post: Omit<Post, 'id' | 'timestamp' | 'likes' | 'comments'>) => {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: []
    }
    setPosts(prev => [newPost, ...prev])
  }

  const addServiceRequest = (request: Omit<ServiceRequest, 'id' | 'timestamp' | 'status'>) => {
    const newRequest: ServiceRequest = {
      ...request,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      status: 'open'
    }
    setServiceRequests(prev => [newRequest, ...prev])
  }

  const updateServiceRequest = (id: string, updates: Partial<ServiceRequest>) => {
    setServiceRequests(prev =>
      prev.map(request =>
        request.id === id ? { ...request, ...updates } : request
      )
    )
  }

  const value = {
    posts,
    serviceRequests,
    addPost,
    addServiceRequest,
    updateServiceRequest
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}