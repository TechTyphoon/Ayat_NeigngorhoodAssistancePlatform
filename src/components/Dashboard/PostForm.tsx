import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext'

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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'announcement' | 'offer' | 'general')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="general">General Post</option>
          <option value="announcement">Announcement</option>
          <option value="offer">Offer</option>
        </select>
      </div>
      
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening in the neighborhood?"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Share Post
      </button>
    </form>
  )
}

export default PostForm