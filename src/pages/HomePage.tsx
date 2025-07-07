import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Users,
  Clock,
  CheckCircle,
  Hospital,
  Home,
  Building2,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Shield } from
"lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/445d0d96-0d8f-4745-bb50-4fd60987d463.png"
                alt="Website Logo"
                className="h-8 w-8 object-contain" />


              <h1 className="text-2xl font-bold text-gray-900">Allurement Healthcare</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#industries" className="text-gray-700 hover:text-blue-600 transition-colors">Industries</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              <Button variant="outline" onClick={() => window.location.href = '/admin'}>Admin</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Full-Service Healthcare Staffing
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Healthcare Staffing Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Allurement Healthcare specializes in meeting the staffing needs of companies in the Healthcare industry. 
              We provide temporary, temp-to-hire, and permanent employees to ensure your facility operates at its best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = 'tel:(437)220-2025'}>
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '#contact'}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Staffing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive staffing solutions tailored to your healthcare facility's unique needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Temporary Staffing</CardTitle>
                <CardDescription>Short-term solutions for immediate needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Quick placement within 24-48 hours</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Cover for sick leave & vacations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>No long-term commitments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Temp-to-Hire</CardTitle>
                <CardDescription>Try before you commit</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Evaluate candidates before hiring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Reduced hiring risks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Seamless transition process</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Cost-effective solution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Permanent Placement</CardTitle>
                <CardDescription>Long-term talent acquisition</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Extensive candidate screening</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Industry expertise matching</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Competitive salary negotiations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Ongoing support & follow-up</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across various healthcare sectors, ensuring specialized staffing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Hospital className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Healthcare Facilities</h3>
                <p className="text-gray-600">Hospitals, medical centers, and specialized clinics</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Home className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Long-term Care</h3>
                <p className="text-gray-600">Nursing homes, assisted living, and rehabilitation centers</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Building2 className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Private Home Care</h3>
                <p className="text-gray-600">In-home healthcare services and private duty nursing</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <GraduationCap className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Educational Institutions</h3>
                <p className="text-gray-600">Schools, universities, and training facilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Allurement Healthcare?</h2>
              <p className="text-xl text-gray-600">
                We're committed to excellence in healthcare staffing with a proven track record of success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rigorous Screening</h3>
                <p className="text-gray-600">Comprehensive background checks, credential verification, and skills assessment</p>
              </div>
              
              <div className="text-center">
                <Star className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Ongoing performance monitoring and client satisfaction guarantee</p>
              </div>
              
              <div className="text-center">
                <Clock className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-600">24/7 support and rapid placement to meet urgent staffing needs</p>
              </div>
            </div>
            
            <Card className="bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                    <h4 className="font-semibold mb-2">Recruitment</h4>
                    <p className="text-sm text-gray-600">Sourcing qualified candidates</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                    <h4 className="font-semibold mb-2">Screening</h4>
                    <p className="text-sm text-gray-600">Comprehensive vetting process</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                    <h4 className="font-semibold mb-2">Processing</h4>
                    <p className="text-sm text-gray-600">Documentation and compliance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                    <h4 className="font-semibold mb-2">Placement</h4>
                    <p className="text-sm text-gray-600">Matching and deployment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600">
                Contact us today to discuss your healthcare staffing needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>We're here to help with your staffing needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">(437) 220-2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">enquire@allurementhealthcares.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">2 County Ln, Barrie, ON L4N 0E6</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Contact Information</h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p><strong>Phone:</strong> (437) 220-2025</p>
                      <p><strong>Email:</strong> enquire@allurementhealthcares.com</p>
                      <p><strong>Website:</strong> www.allurementhealthcares.com</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Business Hours</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency staffing only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Quote</CardTitle>
                  <CardDescription>Tell us about your staffing needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your healthcare facility" />

                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your@email.com" />

                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Staffing Type</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select staffing type</option>
                        <option>Temporary</option>
                        <option>Temp-to-Hire</option>
                        <option>Permanent</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your staffing requirements..." />

                    </div>
                    
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/445d0d96-0d8f-4745-bb50-4fd60987d463.png"
                  alt="Website Logo"
                  className="h-8 w-8 object-contain" />


                <h3 className="text-xl font-bold">Allurement Healthcare</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in healthcare staffing solutions, providing quality personnel for healthcare facilities nationwide.
              </p>
              <div className="text-sm text-gray-400 space-y-1">
                <p>📞 (437) 220-2025</p>
                <p>✉️ enquire@allurementhealthcares.com</p>
                <p>📍 2 County Ln, Barrie, ON L4N 0E6</p>
                <p>🌐 www.allurementhealthcares.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Temporary Staffing</li>
                <li>Temp-to-Hire</li>
                <li>Permanent Placement</li>
                <li>Emergency Staffing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Healthcare Facilities</li>
                <li>Long-term Care</li>
                <li>Private Home Care</li>
                <li>Educational Institutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>Request Quote</li>
                <li>Career Opportunities</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Allurement Healthcare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default HomePage;