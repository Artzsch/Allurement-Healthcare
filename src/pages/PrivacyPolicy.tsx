import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Shield, Eye, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <Button
            onClick={handleBackToHome}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-3xl font-bold text-gray-900">
                Privacy Policy
              </CardTitle>
            </div>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website or use our healthcare staffing services.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may collect personal information such as your name, email address, phone number, 
                      professional credentials, work history, and other information you provide when using 
                      our services or contacting us.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Usage Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We automatically collect information about your interaction with our website, 
                      including IP address, browser type, pages visited, and access times.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Healthcare Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      For healthcare professionals, we may collect licensing information, certifications, 
                      specializations, and professional references as part of our staffing services.
                    </p>
                  </div>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>To provide and maintain our healthcare staffing services</li>
                  <li>To process your applications and match you with suitable opportunities</li>
                  <li>To communicate with you about our services and updates</li>
                  <li>To verify professional credentials and conduct background checks</li>
                  <li>To comply with legal and regulatory requirements</li>
                  <li>To improve our website and services</li>
                  <li>To send you relevant information about healthcare opportunities</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>With healthcare facilities and employers for staffing placements</li>
                  <li>With third-party service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>With your explicit consent</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  HIPAA Compliance
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  As a healthcare staffing company, we are committed to compliance with HIPAA 
                  (Health Insurance Portability and Accountability Act) regulations. We maintain 
                  appropriate safeguards to protect health information and ensure our staff and 
                  contractors are properly trained on privacy requirements.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your personal information</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Cookies and Tracking
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience 
                  on our website. You can control cookie preferences through your browser settings. 
                  Some features of our website may not function properly if cookies are disabled.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our 
                  services and comply with legal obligations. Healthcare professional information 
                  may be retained longer to maintain employment records and references.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last 
                  updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us through the contact information provided on our website. 
                  We are committed to addressing any privacy concerns you may have.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;