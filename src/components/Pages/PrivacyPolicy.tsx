import React from 'react'
import { Shield, Eye, Lock, Database, Mail } from 'lucide-react'

const PrivacyPolicy: React.FC = () => {
  const dataTypes = [
    {
      icon: <Eye className="h-5 w-5 text-blue-500" />,
      title: "Profile Information",
      description: "Username, email, neighborhood, bio, and skills you choose to share"
    },
    {
      icon: <Database className="h-5 w-5 text-green-500" />,
      title: "Platform Activity",
      description: "Posts, service requests, comments, and interactions within the platform"
    },
    {
      icon: <Lock className="h-5 w-5 text-purple-500" />,
      title: "Technical Data",
      description: "IP address, browser type, and usage analytics to improve our service"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="h-8 w-8 text-green-600" />
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dataTypes.map((type, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  {type.icon}
                  <h3 className="font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>To provide and improve our community platform services</li>
            <li>To connect you with neighbors in your local area</li>
            <li>To facilitate service requests and community interactions</li>
            <li>To send important updates about the platform</li>
            <li>To ensure platform safety and prevent abuse</li>
            <li>To analyze usage patterns and improve user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-green-800 font-semibold">We never sell your personal data to third parties.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Your information is shared only in these limited circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>With other community members as part of normal platform functionality (posts, service requests)</li>
            <li>When required by law or to protect safety</li>
            <li>With your explicit consent for specific purposes</li>
            <li>In anonymized, aggregated form for research and platform improvement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We implement appropriate security measures to protect your information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Secure data transmission using encryption</li>
            <li>Regular security audits and updates</li>
            <li>Limited access to personal data by authorized personnel only</li>
            <li>Secure data storage with backup and recovery systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Access and review your personal information</li>
            <li>Update or correct your profile information</li>
            <li>Delete your account and associated data</li>
            <li>Opt out of non-essential communications</li>
            <li>Request a copy of your data</li>
            <li>Report privacy concerns or violations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your information only as long as necessary to provide our services and comply with legal obligations. 
            When you delete your account, we remove your personal information within 30 days, though some anonymized 
            data may be retained for platform improvement purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
          <p className="text-gray-700 leading-relaxed">
            We use minimal cookies and tracking technologies to maintain your login session and improve platform performance. 
            We do not use third-party advertising cookies or tracking for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you have questions about this privacy policy or your data, please contact us:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-600" />
              <a href="mailto:mr.mahendrareddy21@gmail.com" className="text-blue-600 hover:text-blue-800">
                mr.mahendrareddy21@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <p className="text-blue-800 text-center">
          This privacy policy was last updated in December 2024. We will notify users of any significant changes.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy