import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    // Redirect to the Titan email login
    window.open('https://app.titan.email/login/', '_blank');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-gray-900">Admin Login</CardTitle>
          <CardDescription className="text-gray-600">
            Access your administrative dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Click the button below to access the admin login portal through Titan Email.
            </p>
            <Button
              onClick={handleLoginRedirect}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              size="lg">

              <ExternalLink className="mr-2 h-5 w-5" />
              Login to Admin Portal
            </Button>
          </div>
          
          <div className="border-t pt-6">
            <Button
              onClick={handleBackToHome}
              variant="outline"
              className="w-full">

              <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              For technical support, contact IT administration
            </p>
          </div>
        </CardContent>
      </Card>
    </div>);

};

export default AdminLogin;