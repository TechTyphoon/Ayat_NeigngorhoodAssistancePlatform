import React from 'react'
import { useData } from '../../context/DataContext'
import { Download, FileText, BarChart3 } from 'lucide-react'

const Research: React.FC = () => {
  const { posts, serviceRequests } = useData()

  const exportData = (type: 'posts' | 'services' | 'all') => {
    let data: any[] = []
    let filename = ''

    switch (type) {
      case 'posts':
        data = posts
        filename = 'community-posts.json'
        break
      case 'services':
        data = serviceRequests
        filename = 'service-requests.json'
        break
      case 'all':
        data = [{ posts, serviceRequests }]
        filename = 'community-data.json'
        break
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const exportCSV = (type: 'posts' | 'services') => {
    let data: any[] = []
    let headers: string[] = []
    let filename = ''

    if (type === 'posts') {
      data = posts
      headers = ['ID', 'Author', 'Content', 'Type', 'Timestamp', 'Likes', 'Comments', 'Neighborhood']
      filename = 'community-posts.csv'
    } else {
      data = serviceRequests
      headers = ['ID', 'Title', 'Description', 'Category', 'Author', 'Status', 'Accepted By', 'Neighborhood', 'Timestamp']
      filename = 'service-requests.csv'
    }

    const csvContent = [
      headers.join(','),
      ...data.map(item => {
        if (type === 'posts') {
          return [
            item.id,
            `"${item.author}"`,
            `"${item.content.replace(/"/g, '""')}"`,
            item.type,
            item.timestamp,
            item.likes,
            item.comments.length,
            item.neighborhood
          ].join(',')
        } else {
          return [
            item.id,
            `"${item.title}"`,
            `"${item.description.replace(/"/g, '""')}"`,
            item.category,
            `"${item.author}"`,
            item.status,
            `"${item.acceptedBy || ''}"`,
            item.neighborhood,
            item.timestamp
          ].join(',')
        }
      })
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Research & Data Export</h1>
        <p className="text-gray-600">Export community data for research and analysis purposes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Community Posts</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Export all community posts including announcements, offers, and general posts.
          </p>
          <div className="space-y-2">
            <button
              onClick={() => exportData('posts')}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              <span>Export as JSON</span>
            </button>
            <button
              onClick={() => exportCSV('posts')}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <Download className="h-4 w-4" />
              <span>Export as CSV</span>
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Total posts: {posts.length}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">Service Requests</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Export all service requests including status, categories, and completion data.
          </p>
          <div className="space-y-2">
            <button
              onClick={() => exportData('services')}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              <span>Export as JSON</span>
            </button>
            <button
              onClick={() => exportCSV('services')}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <Download className="h-4 w-4" />
              <span>Export as CSV</span>
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Total requests: {serviceRequests.length}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-4">
          <Download className="h-6 w-6 text-purple-600 mr-2" />
          <h2 className="text-xl font-semibold">Complete Dataset</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Export all community data including posts, service requests, and metadata for comprehensive analysis.
        </p>
        <button
          onClick={() => exportData('all')}
          className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          <Download className="h-5 w-5" />
          <span>Export Complete Dataset (JSON)</span>
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Research Guidelines</h3>
        <ul className="text-blue-800 space-y-1 text-sm">
          <li>• All exported data is anonymized and contains no personal identifying information</li>
          <li>• Data should be used for community research and improvement purposes only</li>
          <li>• Please respect user privacy and community guidelines when analyzing data</li>
          <li>• Consider sharing insights back with the community to improve the platform</li>
        </ul>
      </div>
    </div>
  )
}

export default Research