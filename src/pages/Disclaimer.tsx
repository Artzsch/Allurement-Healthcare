import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Disclaimer = () => {
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
            className="flex items-center gap-2">

            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
              <CardTitle className="text-3xl font-bold text-gray-900">
                Website Disclaimer
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
                  General Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The information provided on this website is for general informational purposes only. 
                  While we strive to provide accurate and up-to-date information, we make no representations 
                  or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                  suitability, or availability of the information, products, services, or related graphics 
                  contained on this website.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Healthcare Services Disclaimer
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our healthcare staffing services are provided by qualified healthcare professionals. 
                  However, the information provided on this website should not be considered as medical 
                  advice or replace professional medical consultation. Always consult with qualified 
                  healthcare providers for medical decisions and treatment options.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  No Warranty
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Any reliance you place on the information provided on this website is strictly at your 
                  own risk. We disclaim all liability and responsibility arising from any reliance placed 
                  on such materials by you or any other visitor to the website, or by anyone who may be 
                  informed of any of its contents.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  External Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This website may contain links to other websites that are not under our control. 
                  We have no control over the nature, content, and availability of those sites. 
                  The inclusion of any links does not necessarily imply a recommendation or endorse 
                  the views expressed within them.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Professional Licensing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All healthcare professionals provided through our staffing services maintain 
                  appropriate licenses and certifications as required by applicable laws and 
                  regulations. We verify credentials and ensure compliance with professional 
                  standards, but clients should also verify qualifications independently.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Availability of Services
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We make every effort to keep the website up and running smoothly. However, 
                  we take no responsibility for, and will not be liable for, the website being 
                  temporarily unavailable due to technical issues beyond our control.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this disclaimer, please contact us through 
                  the contact information provided on our website. We are committed to addressing 
                  any concerns you may have about our services or this disclaimer.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default Disclaimer;