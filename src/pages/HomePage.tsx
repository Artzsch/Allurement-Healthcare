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
  Globe } from
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
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/9feb6ea2-78af-4017-a792-94fb0d17ce4e.png" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-gray-900">Allurement Healthcare Staffing</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">

                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">

                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">

                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/c13e5b26-42fc-4d81-870a-a9000ec3af74.png')`
          }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Flexible, Reliable Healthcare Staffing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Providing high-quality staffing services tailored to diverse healthcare environments across Ontario
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => scrollToSection('services')}>

                Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => scrollToSection('contact')}>

                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Staffing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, customized recruitment solutions designed to address staffing gaps and improve patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) =>
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) =>
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600 mr-3" />
              Nursing Staff Solutions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Registered Nurses (RNs) & Registered Practical Nurses (RPNs)</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Specialty Placements:</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <Badge variant="outline">Critical Care (ICU, CCU, ER)</Badge>
                    <Badge variant="outline">Medical-Surgical</Badge>
                    <Badge variant="outline">Gerontology & Long-Term Care</Badge>
                    <Badge variant="outline">Pediatrics & Neonatal</Badge>
                    <Badge variant="outline">Mental Health & Addictions</Badge>
                    <Badge variant="outline">Perioperative (OR, PACU)</Badge>
                    <Badge variant="outline">Community & Public Health</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nurse Leadership Recruitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Users className="h-4 w-4 text-blue-600 mr-2" />
                      Nurse Managers
                    </li>
                    <li className="flex items-center">
                      <Users className="h-4 w-4 text-blue-600 mr-2" />
                      Clinical Educators
                    </li>
                    <li className="flex items-center">
                      <Users className="h-4 w-4 text-blue-600 mr-2" />
                      Director of Care positions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* PSW Solutions */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              Personal Support Worker (PSW) Solutions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Facility-Based Placements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Building2 className="h-4 w-4 text-red-500 mr-2" />
                      Long-Term Care Homes
                    </li>
                    <li className="flex items-center">
                      <Building2 className="h-4 w-4 text-red-500 mr-2" />
                      Retirement Residences
                    </li>
                    <li className="flex items-center">
                      <Building2 className="h-4 w-4 text-red-500 mr-2" />
                      Hospitals (elderly care, rehab units)
                    </li>
                    <li className="flex items-center">
                      <Building2 className="h-4 w-4 text-red-500 mr-2" />
                      Respite Care Facilities
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Home & Community Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Home className="h-4 w-4 text-green-600 mr-2" />
                      Dementia & Alzheimer's Care
                    </li>
                    <li className="flex items-center">
                      <Home className="h-4 w-4 text-green-600 mr-2" />
                      Palliative & End-of-Life Support
                    </li>
                    <li className="flex items-center">
                      <Home className="h-4 w-4 text-green-600 mr-2" />
                      Post-Surgical/Injury Recovery
                    </li>
                    <li className="flex items-center">
                      <Home className="h-4 w-4 text-green-600 mr-2" />
                      Developmental Disability Support
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Specialty PSW Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 text-orange-600 mr-2" />
                      Overnight & Live-In Care
                    </li>
                    <li className="flex items-center">
                      <Users className="h-4 w-4 text-orange-600 mr-2" />
                      Language-Specific PSWs
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-orange-600 mr-2" />
                      Behavioral Support PSWs
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Personal Chef Services */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <ChefHat className="h-8 w-8 text-orange-600 mr-3" />
              Personal Chef Staffing
            </h3>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  Unique to Allurement, we place culinary professionals for specialized dietary needs:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center">
                    <ChefHat className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Healthcare Facilities</span>
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Private Clients</span>
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Therapeutic Nutrition</span>
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Cultural Meal Specialists</span>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Staffing Models
            </h2>
            <p className="text-xl text-gray-600">
              Multiple engagement options to meet your specific needs
            </p>
          </div>
          


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffingModels.map((model, index) =>
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{model.name}</CardTitle>
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
            <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">{industry}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Allurement Healthcare Staffing
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Healthcare Facilities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Reduced Vacancy Rates</h4>
                    <p className="text-gray-600">Deep candidate pool means faster hires</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Higher Quality Care</h4>
                    <p className="text-gray-600">Stringent vetting improves patient outcomes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Cost Efficiency</h4>
                    <p className="text-gray-600">Flexible models control labor costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-orange-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Risk Mitigation</h4>
                    <p className="text-gray-600">Comprehensive compliance screening</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Healthcare Professionals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Career-Matching</h4>
                    <p className="text-gray-600">Aligns skills and passion with ideal workplaces</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Ongoing Support</h4>
                    <p className="text-gray-600">Access to free continuing education opportunities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Advocacy</h4>
                    <p className="text-gray-600">Clinical background ensures fair working conditions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Professional Care Image */}
          <div className="mt-16 text-center">
            <div className="relative rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto">
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
            <Card>
              <CardHeader>
                <CardTitle>For Healthcare Facilities</CardTitle>
                <CardDescription>
                  Let us help you find the right staff for your facility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-4" asChild>
                  <Link to="/request-staffing">Request Staffing Solutions</Link>
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  24-72 hour emergency placements available
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>For Healthcare Professionals</CardTitle>
                <CardDescription>
                  Join our network of skilled healthcare professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-4" variant="outline" asChild>
                  <Link to="/apply-now">Apply Now</Link>
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Flexible schedules and competitive compensation
                </p>
              </CardContent>
            </Card>
          </div>
          {/* Service Hours and Contact Info */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📌 Service Hours</h3>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Monday-Friday:</strong> 8:00 AM – 6:00 PM</p>
                <p className="text-gray-700"><strong>Weekends:</strong> Emergency staffing only</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-sm text-gray-600">2 County Ln, Barrie, ON L4N 0E6</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-6 w-6 text-blue-600 mb-2" />
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">(437) 220-2025</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-6 w-6 text-blue-600 mb-2" />
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">enquire@allurementhealthcares.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-6 w-6 text-blue-600 mb-2" />
                <p className="font-semibold text-gray-900">Website</p>
                <p className="text-sm text-gray-600">www.allurementhealthcares.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <img src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/9feb6ea2-78af-4017-a792-94fb0d17ce4e.png" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">Allurement Healthcare Staffing</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing flexible, reliable, and high-quality staffing services across Ontario
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Allurement Healthcare Staffing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>);

};

export default HomePage;