import React from 'react'
import { Shield, Eye, Lock, Users, AlertTriangle, CheckCircle } from 'lucide-react'

const SafetyTips: React.FC = () => {
  const safetyTips = [
    {
      icon: <Eye className="h-6 w-6 text-blue-500" />,
      title: "Meet in Public Places",
      description: "When meeting neighbors for the first time, choose public locations like parks, cafes, or community centers."
    },
    {
      icon: <Lock className="h-6 w-6 text-green-500" />,
      title: "Protect Personal Information",
      description: "Never share your full address, phone number, or financial information in public posts."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Trust Your Instincts",
      description: "If something feels off about a request or interaction, trust your gut and decline politely."
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: "Verify Identity",
      description: "For larger favors or services, consider asking for references or meeting in person first."
    }
  ]

  const onlineSafety = [
    "Use the platform's messaging system instead of sharing personal contact details",
    "Be cautious about sharing photos that might reveal your exact location",
    "Report any suspicious or inappropriate behavior immediately",
    "Don't feel obligated to help if you're uncomfortable with a request",
    "Keep records of your interactions for important services or exchanges"
  ]

  const redFlags = [
    "Requests for money, loans, or financial assistance",
    "Pressure to meet immediately or in private locations",
    "Vague or suspicious service requests",
    "Requests to move conversations off the platform quickly",
    "Offers that seem too good to be true"
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Safety Tips</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your safety is our top priority. Follow these guidelines to ensure positive and secure interactions with your neighbors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {safetyTips.map((tip, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                {tip.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Online Safety Best Practices</h2>
        <div className="space-y-4">
          {onlineSafety.map((practice, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{practice}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-start space-x-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
          <h2 className="text-xl font-bold text-red-800">Red Flags to Watch For</h2>
        </div>
        <div className="space-y-3">
          {redFlags.map((flag, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-red-700">{flag}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Emergency Contact</h3>
        <p className="text-blue-700 mb-3">
          If you feel unsafe or encounter any threatening behavior, contact local authorities immediately.
        </p>
        <p className="text-blue-700">
          For platform-related safety concerns, email us at{' '}
          <a href="mailto:mr.mahendrareddy21@gmail.com" className="underline hover:text-blue-900">
            mr.mahendrareddy21@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default SafetyTips