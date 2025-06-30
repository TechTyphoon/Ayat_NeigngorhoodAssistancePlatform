import React from 'react'
import { Users, MessageSquare, HandHeart, Star } from 'lucide-react'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Join Your Neighborhood",
      description: "Sign up and connect with neighbors in your area. Build your profile and share your skills."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Share & Connect",
      description: "Post announcements, share offers, and engage with your community through comments and likes."
    },
    {
      icon: <HandHeart className="h-8 w-8 text-purple-600" />,
      title: "Help Each Other",
      description: "Request help when you need it, or volunteer to assist neighbors with their service requests."
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      title: "Build Reputation",
      description: "Complete services and receive reviews to build trust and reputation within your community."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How Ayat Works</h1>
        <p className="text-xl text-gray-600">
          Building stronger neighborhoods through mutual aid and community connection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gray-100 rounded-lg mr-4">
                {step.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{step.title}</h2>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Ayat?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Safe & Secure</h3>
            <p className="text-blue-700 text-sm">
              Neighborhood-based verification and reputation system ensure safe interactions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Local Focus</h3>
            <p className="text-blue-700 text-sm">
              Connect only with neighbors in your area for relevant, local community building.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Mutual Aid</h3>
            <p className="text-blue-700 text-sm">
              Foster a culture of helping each other and building stronger community bonds.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Join your neighborhood community today and start building meaningful connections.
        </p>
        <a
          href="/login"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
        >
          Join Your Community
        </a>
      </div>
    </div>
  )
}

export default HowItWorks