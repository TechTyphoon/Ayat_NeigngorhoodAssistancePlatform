import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext'
import { Send } from 'lucide-react'

const PostForm: React.FC = () => {
  const { user } = useAuth()
  const { addPost } = useData()
  const [content, setContent] = useState('')
  const [type, setType] = useState<'announcement' | 'offer' | 'general'>('general')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim() || !user) return

    addPost({
      author: user.username,
      content: content.trim(),
      type,
      neighborhood: user.neighborhood
    })

    setContent('')
  }

  const getTypeStyles = (postType: string) => {
    switch (postType) {
      case 'announcement':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      case 'offer':
        return 'bg-green-50 border-green-200 text-green-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Post Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'announcement' | 'offer' | 'general')}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${getTypeStyles(type)}`}
        >
          <option value="general">General Post</option>
          <option value="announcement">Announcement</option>
          <option value="offer">Offer</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What's happening in the neighborhood?
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts, announcements, or offers with your neighbors..."
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
      >
        <Send className="h-5 w-5" />
        <span>Share Post</span>
      </button>
    </form>
  )
}

export default PostForm