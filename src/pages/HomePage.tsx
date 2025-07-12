import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';
import {
  Heart,
  Users,
  Clock,
  Shield,
  Phone,
  Mail,
  MapPin,
  ChefHat,
  Stethoscope,
  Home,
  Building2,
  CheckCircle,
  Star,
  Award,
  Globe,
  ArrowRight } from
"lucide-react";

const HomePage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
  {
    icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
    title: "Nursing Staff Solutions",
    description: "RNs, RPNs, and specialized nursing professionals",
    features: ["Critical Care", "Medical-Surgical", "Gerontology", "Pediatrics", "Mental Health"]
  },
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Personal Support Workers",
    description: "Compassionate PSWs for all care settings",
    features: ["Long-Term Care", "Home Care", "Dementia Care", "Palliative Care", "Language-Specific"]
  },
  {
    icon: <Home className="h-8 w-8 text-green-600" />,
    title: "Home Care Support",
    description: "Comprehensive in-home healthcare services",
    features: ["Companion Care", "Meal Preparation", "Medication Reminders", "Chronic Condition Support"]
  },
  {
    icon: <ChefHat className="h-8 w-8 text-orange-600" />,
    title: "Personal Chef Services",
    description: "Culinary professionals for healthcare settings",
    features: ["Therapeutic Nutrition", "Cultural Meals", "Texture-Modified Diets", "Private Clients"]
  }];


  const staffingModels = [
  { name: "Direct Hire", description: "Permanent staffing with 90-day guarantee", best: "Long-term positions" },
  { name: "Temp-to-Perm", description: "Trial periods before hiring", best: "Evaluation periods" },
  { name: "Contract Staffing", description: "Flexible 1-12+ month terms", best: "Project-based needs" },
  { name: "Rapid Response", description: "24-48 hour placements", best: "Emergency shortages" },
  { name: "Specialized Teams", description: "Pre-trained unit-ready staff", best: "Outbreak support" }];


  const industries = [
  "Hospitals & Health Networks",
  "Long-Term Care & Retirement Homes",
  "Home Care Agencies",
  "Private Residences (Concierge Care)",
  "Government Health Programs",
  "Rehabilitation Centers"];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/3010a2b2-03ad-48b6-ab6d-1b16477f66e1.png" 
                  alt="Allurement Healthcare Staffing Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-gray-900">
                  Allurement Healthcare Staffing
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600">
                Services
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600">
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
              <Heart className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">"Your Workforce, Our Commitment"</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Flexible, Reliable
              <br />
              Healthcare Staffing
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
              Providing high-quality staffing services tailored to diverse healthcare environments across Ontario
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
              <Heart className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Comprehensive Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Staffing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, customized recruitment solutions designed to address staffing gaps and improve patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) =>
            <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) =>
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                  )}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Nursing Staff Solutions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Stethoscope className="h-6 w-6 text-blue-600" />
              </div>
              Nursing Staff Solutions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Registered Nurses (RNs) & Registered Practical Nurses (RPNs)</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Specialty Placements:</h4>
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {["Critical Care (ICU, CCU, ER)", "Medical-Surgical", "Gerontology & Long-Term Care", "Pediatrics & Neonatal", "Mental Health & Addictions", "Perioperative (OR, PACU)", "Community & Public Health"].map((specialty, idx) =>
                    <Badge key={idx} variant="outline" className="justify-start border-blue-200 text-blue-700">
                        {specialty}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nurse Leadership Recruitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Nurse Managers</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Clinical Educators</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <span>Director of Care positions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* PSW Solutions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              Personal Support Worker (PSW) Solutions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Facility-Based Placements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Long-Term Care Homes", "Retirement Residences", "Hospitals (elderly care, rehab units)", "Respite Care Facilities"].map((facility, idx) =>
                    <li key={idx} className="flex items-center">
                        <Building2 className="h-4 w-4 text-red-500 mr-3" />
                        <span className="text-sm">{facility}</span>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Home & Community Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Dementia & Alzheimer's Care", "Palliative & End-of-Life Support", "Post-Surgical/Injury Recovery", "Developmental Disability Support"].map((care, idx) =>
                    <li key={idx} className="flex items-center">
                        <Home className="h-4 w-4 text-green-600 mr-3" />
                        <span className="text-sm">{care}</span>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Specialty PSW Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                    { icon: Clock, text: "Overnight & Live-In Care" },
                    { icon: Users, text: "Language-Specific PSWs" },
                    { icon: Shield, text: "Behavioral Support PSWs" }].
                    map((item, idx) =>
                    <li key={idx} className="flex items-center">
                        <item.icon className="h-4 w-4 text-orange-600 mr-3" />
                        <span className="text-sm">{item.text}</span>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Personal Chef Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <ChefHat className="h-6 w-6 text-orange-600" />
              </div>
              Personal Chef Staffing
            </h3>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  Unique to Allurement, we place culinary professionals for specialized dietary needs:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {["Healthcare Facilities", "Private Clients", "Therapeutic Nutrition", "Cultural Meal Specialists"].map((service, idx) =>
                  <div key={idx} className="flex items-center">
                      <ChefHat className="h-5 w-5 text-orange-600 mr-2" />
                      <span>{service}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staffing Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-full px-6 py-2 mb-6">
              <Star className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Flexible Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Staffing Models
            </h2>
            <p className="text-xl text-gray-600">
              Multiple engagement options to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffingModels.map((model, index) =>
            <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Star className="h-4 w-4 text-purple-600" />
                    </div>
                    {model.name}
                  </CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span>Best for: {model.best}</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) =>
            <div key={index} className="flex items-center p-6 bg-white border rounded-lg hover:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4" />
                <span className="text-gray-700 font-medium">{industry}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Allurement Healthcare Staffing
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                  For Healthcare Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                  { icon: Award, title: "Reduced Vacancy Rates", desc: "Deep candidate pool means faster hires" },
                  { icon: Heart, title: "Higher Quality Care", desc: "Stringent vetting improves patient outcomes" },
                  { icon: Clock, title: "Cost Efficiency", desc: "Flexible models control labor costs" },
                  { icon: Shield, title: "Risk Mitigation", desc: "Comprehensive compliance screening" }].
                  map((benefit, idx) =>
                  <li key={idx} className="flex items-start">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mr-4 mt-1">
                        <benefit.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Users className="h-8 w-8 text-purple-600 mr-3" />
                  For Healthcare Professionals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                  { icon: Users, title: "Career-Matching", desc: "Aligns skills and passion with ideal workplaces" },
                  { icon: Star, title: "Ongoing Support", desc: "Access to free continuing education opportunities" },
                  { icon: Award, title: "Advocacy", desc: "Clinical background ensures fair working conditions" },
                  { icon: Heart, title: "Growth Opportunities", desc: "Access to diverse healthcare environments" }].
                  map((benefit, idx) =>
                  <li key={idx} className="flex items-start">
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mr-4 mt-1">
                        <benefit.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Professional Care Image */}
          <div className="mt-16 text-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg max-w-2xl mx-auto">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/beba4a93-a580-40b7-af4e-12cbaf367a59.png"
                alt="Healthcare professional providing compassionate care"
                className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Compassionate Care</h4>
                  <p className="text-sm opacity-90">Our professionals deliver exceptional care with empathy and expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600">
              Ready to solve your staffing challenges or advance your healthcare career?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                  For Healthcare Facilities
                </CardTitle>
                <CardDescription>
                  Let us help you find the right staff for your facility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-4 bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/request-staffing">
                    Request Staffing Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  24-72 hour emergency placements available
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-purple-600 mr-2" />
                  For Healthcare Professionals
                </CardTitle>
                <CardDescription>
                  Join our network of skilled healthcare professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full mb-4" asChild>
                  <Link to="/apply-now">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Flexible schedules and competitive compensation
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Service Hours and Contact Info */}
          <Card className="mt-16">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  Service Hours
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Monday-Friday:</strong> 8:00 AM – 6:00 PM</p>
                  <p className="text-gray-700"><strong>Weekends:</strong> Emergency staffing only</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <a
                  href="https://maps.google.com/?q=2+County+Ln,+Barrie,+ON+L4N+0E6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">2 County Ln, Barrie, ON L4N 0E6</p>
                  </div>
                </a>
                <a
                  href="tel:+14372202025"
                  className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-green-50 group-hover:bg-green-100 transition-colors">
                    <Phone className="h-6 w-6 text-green-600 mb-2" />
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">(437) 220-2025</p>
                  </div>
                </a>
                <a
                  href="https://app.titan.email/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors">
                    <Mail className="h-6 w-6 text-purple-600 mb-2" />
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">enquire@allurementhealthcares.com</p>
                  </div>
                </a>
                <div className="flex flex-col items-center p-4 rounded-xl bg-orange-50">
                  <Globe className="h-6 w-6 text-orange-600 mb-2" />
                  <p className="font-semibold text-gray-900">Website</p>
                  <p className="text-sm text-gray-600">www.allurementhealthcares.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <img 
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/3010a2b2-03ad-48b6-ab6d-1b16477f66e1.png" 
                alt="Allurement Healthcare Staffing Logo" 
                className="w-12 h-12 object-contain mr-3"
              />
              <span className="text-3xl font-bold">Allurement Healthcare Staffing</span>
            </div>
            <p className="text-lg text-blue-300 font-medium mb-2">
              "Your Workforce, Our Commitment"
            </p>
            <p className="text-gray-300 mb-4">
              Providing flexible, reliable, and high-quality staffing services across Ontario
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 Allurement Healthcare Staffing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>);

};

export default HomePage;