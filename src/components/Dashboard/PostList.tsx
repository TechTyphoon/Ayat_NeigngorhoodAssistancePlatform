import React from 'react'
import { Heart, MessageCircle } from 'lucide-react'

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
        return 'bg-blue-100 text-blue-800'
      case 'offer':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No posts yet. Be the first to share something!
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">{post.author}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(post.type)}`}>
                {post.type}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(post.timestamp).toLocaleDateString()}
            </span>
          </div>
          
          <p className="text-gray-700 mb-3">{post.content}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <button className="flex items-center space-x-1 hover:text-red-500">
              <Heart className="h-4 w-4" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500">
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