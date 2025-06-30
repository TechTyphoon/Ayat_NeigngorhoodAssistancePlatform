import React from 'react'
import { Heart, MessageCircle, Clock } from 'lucide-react'

interface Post {
  id: string
  author: string
  content: string
  type: 'announcement' | 'offer' | 'general'
  timestamp: string
  likes: number
  comments: any[]
  neighborhood: string
}

interface PostListProps {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'announcement':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'offer':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
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

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
        <p className="text-gray-500">Be the first to share something with your neighbors!</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 bg-white">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {post.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{post.author}</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{formatDate(post.timestamp)}</span>
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(post.type)}`}>
              {post.type}
            </span>
          </div>
          
          <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500 pt-4 border-t border-gray-100">
            <button className="flex items-center space-x-2 hover:text-red-500 transition-colors duration-200">
              <Heart className="h-4 w-4" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments.length}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList