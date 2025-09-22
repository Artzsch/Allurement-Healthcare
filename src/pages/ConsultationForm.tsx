
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, Hospital, Phone, Mail, MapPin } from 'lucide-react';

const ConsultationForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    facilityType: '',
    staffingType: '',
    urgency: '',
    positions: [],
    numberOfStaff: '',
    duration: '',
    startDate: '',
    budget: '',
    message: '',
    contactMethod: '',
    agreesToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePositionChange = (position: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      positions: checked ?
      [...prev.positions, position] :
      prev.positions.filter((p) => p !== position)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.company) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreesToTerms) {
      toast({
        title: "Terms Agreement Required",
        description: "Please agree to the terms and conditions to proceed",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send notification email to enquire@allurementhealthcares.com
      const { error: emailError } = await window.ezsite.apis.sendEmail({
        from: 'Allurement Healthcare Staffing <noreply@allurementhealthcares.com>',
        to: ['enquire@allurementhealthcares.com'],
        subject: `New Consultation Request from ${formData.company}`,
        html: `
          <h2>New Healthcare Facility Consultation Request</h2>
          
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Company/Facility:</strong> ${formData.company}</p>
          <p><strong>Position:</strong> ${formData.position}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Preferred Contact Method:</strong> ${formData.contactMethod}</p>
          
          <h3>Facility Information</h3>
          <p><strong>Facility Type:</strong> ${formData.facilityType}</p>
          
          <h3>Staffing Requirements</h3>
          <p><strong>Staffing Type:</strong> ${formData.staffingType}</p>
          <p><strong>Urgency:</strong> ${formData.urgency}</p>
          <p><strong>Positions Needed:</strong> ${formData.positions.join(', ')}</p>
          <p><strong>Number of Staff:</strong> ${formData.numberOfStaff}</p>
          <p><strong>Duration:</strong> ${formData.duration}</p>
          <p><strong>Start Date:</strong> ${formData.startDate}</p>
          <p><strong>Budget Range:</strong> ${formData.budget}</p>
          
          <h3>Additional Information</h3>
          <p><strong>Message:</strong> ${formData.message}</p>
          
          <hr>
          <p><em>This consultation request was submitted through the Allurement Healthcare website.</em></p>
        `
      });

      if (emailError) {
        console.error('Email notification failed:', emailError);
        // Don't fail the entire submission if email fails
      }

      toast({
        title: "Consultation Request Submitted!",
        description: "Thank you for your request. Our team will contact you within 24 hours."
      });

      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        facilityType: '',
        staffingType: '',
        urgency: '',
        positions: [],
        numberOfStaff: '',
        duration: '',
        startDate: '',
        budget: '',
        message: '',
        contactMethod: '',
        agreesToTerms: false
      });

    } catch (error) {
      console.error('Error submitting consultation request:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const positions = [
  'Registered Nurse (RN)',
  'Licensed Practical Nurse (LPN)',
  'Certified Nursing Assistant (CNA)',
  'Medical Assistant',
  'Physical Therapist',
  'Occupational Therapist',
  'Respiratory Therapist',
  'Pharmacist',
  'Physician',
  'Nurse Practitioner',
  'Medical Technologist',
  'Radiologic Technologist',
  'Administrative Staff',
  'Other'];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2">

                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <img
                src="https://images.unsplash.com/photo-1674450371215-550d33a2d81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwaGVhbHRoY2FyZSUyMHN0YWZmaW5nJTIwbG9nbyUyMGZvciUyMEFsbHVyZW1lbnQlMjBIZWFsdGhjYXJlLnxlbnwwfHx8fDE3NTg1NDcwNjF8MA&ixlib=rb-4.1.0&q=80&w=200$w=512"
                alt="Allurement Healthcare - Professional Healthcare Staffing Logo"
                className="h-12 w-12 object-contain rounded-lg shadow-sm" />

              <h1 className="text-xl font-bold text-gray-900">Allurement Healthcare</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-600">(437) 220-2025</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/95 to-green-50/95"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1702073882246-7a5444c3bebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2VyZW5lJTIwaGVhbHRoY2FyZSUyMGZhY2lsaXR5JTIwd2l0aCUyMGElMjBtb2Rlcm4lMjBkZXNpZ24lMkMlMjBzdXJyb3VuZGVkJTIwYnklMjBncmVlbmVyeSUyMGFuZCUyMGElMjBjbGVhciUyMGJsdWUlMjBza3kufGVufDB8fHx8MTc1ODU0NzA1NHww&ixlib=rb-4.1.0&q=80&w=200$w=1920')`
          }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Free Healthcare Staffing Consultation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get personalized staffing solutions tailored to your healthcare facility's needs. 
              Our experts will help you find the right personnel quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">24-hour response time</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">No obligation</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Customized solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tell Us About Your Staffing Needs</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible so we can prepare the best recommendations for your facility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-600" />
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="John"
                          required />

                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Smith"
                          required />

                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john.smith@hospital.com"
                          required />

                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                          required />

                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company/Facility Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="General Hospital"
                          required />

                      </div>
                      <div>
                        <Label htmlFor="position">Your Position</Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleInputChange('position', e.target.value)}
                          placeholder="HR Manager, Director of Nursing, etc." />

                      </div>
                    </div>
                  </div>

                  {/* Facility Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Hospital className="h-5 w-5 mr-2 text-green-600" />
                      Facility Information
                    </h3>
                    <div>
                      <Label htmlFor="facilityType">Type of Facility</Label>
                      <Select value={formData.facilityType} onValueChange={(value) => handleInputChange('facilityType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select facility type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hospital">Hospital</SelectItem>
                          <SelectItem value="medical-center">Medical Center</SelectItem>
                          <SelectItem value="clinic">Clinic</SelectItem>
                          <SelectItem value="nursing-home">Nursing Home</SelectItem>
                          <SelectItem value="assisted-living">Assisted Living</SelectItem>
                          <SelectItem value="home-health">Home Health Agency</SelectItem>
                          <SelectItem value="rehabilitation">Rehabilitation Center</SelectItem>
                          <SelectItem value="skilled-nursing">Skilled Nursing Facility</SelectItem>
                          <SelectItem value="dialysis">Dialysis Center</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Staffing Requirements */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-purple-600" />
                      Staffing Requirements
                    </h3>
                    
                    <div>
                      <Label htmlFor="staffingType">Type of Staffing Needed</Label>
                      <Select value={formData.staffingType} onValueChange={(value) => handleInputChange('staffingType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select staffing type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="temporary">Temporary</SelectItem>
                          <SelectItem value="temp-to-hire">Temp-to-Hire</SelectItem>
                          <SelectItem value="permanent">Permanent</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="per-diem">Per Diem</SelectItem>
                          <SelectItem value="travel">Travel Assignments</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Positions Needed (Select all that apply)</Label>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                        {positions.map((position) =>
                        <div key={position} className="flex items-center space-x-2">
                            <Checkbox
                            id={position}
                            checked={formData.positions.includes(position)}
                            onCheckedChange={(checked) => handlePositionChange(position, checked as boolean)} />

                            <Label htmlFor={position} className="text-sm font-normal">
                              {position}
                            </Label>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="numberOfStaff">Number of Staff Needed</Label>
                        <Input
                          id="numberOfStaff"
                          value={formData.numberOfStaff}
                          onChange={(e) => handleInputChange('numberOfStaff', e.target.value)}
                          placeholder="e.g., 5-10" />

                      </div>
                      <div>
                        <Label htmlFor="duration">Expected Duration</Label>
                        <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                            <SelectItem value="1-month">1 month</SelectItem>
                            <SelectItem value="2-3-months">2-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-12-months">6-12 months</SelectItem>
                            <SelectItem value="permanent">Permanent</SelectItem>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="startDate">Preferred Start Date</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => handleInputChange('startDate', e.target.value)} />

                      </div>
                    </div>

                    <div>
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <RadioGroup
                        value={formData.urgency}
                        onValueChange={(value) => handleInputChange('urgency', value)}
                        className="flex flex-col space-y-2 mt-2">

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="immediate" id="immediate" />
                          <Label htmlFor="immediate">Immediate (within 24-48 hours)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent">Urgent (within 1 week)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="normal" id="normal" />
                          <Label htmlFor="normal">Normal (within 2-4 weeks)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="flexible" id="flexible" />
                          <Label htmlFor="flexible">Flexible timeline</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                          <SelectItem value="over-500k">Over $500,000</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                    <div>
                      <Label htmlFor="message">Additional Details or Special Requirements</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please provide any additional information about your staffing needs, specific requirements, certifications needed, shift preferences, etc."
                        rows={4} />

                    </div>

                    <div>
                      <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                      <RadioGroup
                        value={formData.contactMethod}
                        onValueChange={(value) => handleInputChange('contactMethod', value)}
                        className="flex flex-row space-x-6 mt-2">

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-contact" />
                          <Label htmlFor="phone-contact">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-contact" />
                          <Label htmlFor="email-contact">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="either" id="either-contact" />
                          <Label htmlFor="either-contact">Either</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreesToTerms}
                        onCheckedChange={(checked) => handleInputChange('agreesToTerms', checked as boolean)} />

                      <Label htmlFor="terms" className="text-sm font-normal">
                        I agree to be contacted by Allurement Healthcare regarding my staffing needs. 
                        I understand that this consultation is free and there is no obligation to proceed with services.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 px-8"
                      disabled={isSubmitting}>

                      {isSubmitting ?
                      <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </> :

                      'Submit Consultation Request'
                      }
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need Immediate Assistance?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">(437) 220-2025</p>
                <p className="text-sm text-gray-400 mt-2">Available 24/7 for emergencies</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">enquire@allurementhealthcares.com</p>
                <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">2 County Ln, Barrie, ON L4N 0E6</p>
                <p className="text-sm text-gray-400 mt-2">Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default ConsultationForm;