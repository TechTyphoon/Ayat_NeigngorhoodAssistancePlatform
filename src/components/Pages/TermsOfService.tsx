import React from 'react'
import { FileText, Calendar, Mail } from 'lucide-react'

const TermsOfService: React.FC = () => {
  const lastUpdated = "December 2024"

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center space-x-3 mb-4">
          <FileText className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
        </div>
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using the Ayat community platform, you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Ayat is a neighborhood community platform that enables residents to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Share announcements and community updates</li>
            <li>Request and offer help through service exchanges</li>
            <li>Connect with neighbors in their local area</li>
            <li>Build community relationships and mutual aid networks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            As a user of Ayat, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Provide accurate and truthful information</li>
            <li>Respect other community members and their privacy</li>
            <li>Follow all community guidelines and safety recommendations</li>
            <li>Not use the platform for illegal activities or spam</li>
            <li>Report inappropriate behavior or content</li>
            <li>Take responsibility for your own safety in all interactions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Data</h2>
          <p className="text-gray-700 leading-relaxed">
            We are committed to protecting your privacy. We collect only the information necessary to provide our services 
            and will never sell your personal data to third parties. All interactions and data are stored securely, 
            and you maintain control over your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content and Conduct</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Users are responsible for all content they post. Prohibited content includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Harassment, threats, or discriminatory language</li>
            <li>Spam, advertising, or commercial solicitation</li>
            <li>Illegal activities or requests for illegal services</li>
            <li>False or misleading information</li>
            <li>Content that violates others' privacy or rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Ayat facilitates connections between neighbors but is not responsible for the actions, services, or interactions 
            between users. Users engage with each other at their own risk and should exercise appropriate caution. 
            We recommend following all safety guidelines and meeting in public places when appropriate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
          <p className="text-gray-700 leading-relaxed">
            We strive to maintain service availability but cannot guarantee uninterrupted access. 
            We reserve the right to modify, suspend, or discontinue the service with reasonable notice to users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these terms from time to time. Users will be notified of significant changes, 
            and continued use of the platform constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions about these terms or the Ayat platform, please contact us at:
          </p>
          <div className="mt-3 p-4 bg-gray-50 rounded-lg">
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
          By using Ayat, you acknowledge that you have read, understood, and agree to these Terms of Service.
        </p>
      </div>
    </div>
  )
}

export default TermsOfService