import React from 'react'
import { Users, Heart, Shield, AlertTriangle, CheckCircle } from 'lucide-react'

const CommunityGuidelines: React.FC = () => {
  const guidelines = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Be Kind and Respectful",
      description: "Treat all community members with kindness, respect, and empathy. We're all neighbors here."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Keep It Safe",
      description: "Never share personal information like addresses, phone numbers, or financial details in public posts."
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "Help Each Other",
      description: "The spirit of Ayat is mutual aid. Offer help when you can and ask for help when you need it."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
      title: "Be Reliable",
      description: "If you commit to helping someone, follow through. Reliability builds trust in our community."
    }
  ]

  const rules = [
    "No spam, advertising, or self-promotion without community benefit",
    "No harassment, bullying, or discriminatory language",
    "No illegal activities or requests for illegal services",
    "Keep posts relevant to your neighborhood and community",
    "Use appropriate language - this is a family-friendly platform",
    "Respect privacy - don't share others' personal information",
    "Report inappropriate content to help keep our community safe"
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Guidelines</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our community guidelines help create a safe, welcoming, and supportive environment for all neighbors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidelines.map((guideline, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                {guideline.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{guideline.title}</h3>
                <p className="text-gray-600">{guideline.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Community Rules</h2>
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Reporting Issues</h3>
            <p className="text-yellow-700">
              If you encounter any behavior that violates these guidelines, please contact us immediately at{' '}
              <a href="mailto:mr.mahendrareddy21@gmail.com" className="underline hover:text-yellow-900">
                mr.mahendrareddy21@gmail.com
              </a>
              . We take all reports seriously and will investigate promptly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityGuidelines