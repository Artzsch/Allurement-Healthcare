import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import {
  Heart,
  ArrowLeft,
  User,
  Briefcase,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  ChefHat,
  Home as HomeIcon,
  Upload,
  Calendar,
  Clock } from
'lucide-react';

const ApplyNow = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: 'Ontario',
    postalCode: '',

    // Professional Information
    profession: '',
    license: '',
    experience: '',
    specializations: [],
    availability: '',
    shiftPreferences: [],

    // Employment Preferences
    employmentType: '',
    minHourlyRate: '',
    preferredLocations: [],
    transportationReliable: '',

    // Qualifications
    education: '',
    certifications: [],
    languages: [],

    // Additional Information
    additionalSkills: '',
    whyJoin: '',

    // Legal
    eligibleToWork: '',
    backgroundCheck: '',
    references: ''
  });

  const professionOptions = [
  { value: 'rn', label: 'Registered Nurse (RN)', icon: <Stethoscope className="h-4 w-4" /> },
  { value: 'rpn', label: 'Registered Practical Nurse (RPN)', icon: <Stethoscope className="h-4 w-4" /> },
  { value: 'psw', label: 'Personal Support Worker (PSW)', icon: <Heart className="h-4 w-4" /> },
  { value: 'chef', label: 'Personal Chef', icon: <ChefHat className="h-4 w-4" /> },
  { value: 'homecare', label: 'Home Care Support', icon: <HomeIcon className="h-4 w-4" /> },
  { value: 'management', label: 'Nursing Management', icon: <User className="h-4 w-4" /> }];


  const specializationOptions = [
  'Critical Care (ICU, CCU, ER)',
  'Medical-Surgical',
  'Gerontology & Long-Term Care',
  'Pediatrics & Neonatal',
  'Mental Health & Addictions',
  'Perioperative (OR, PACU)',
  'Community & Public Health',
  'Dementia & Alzheimer Care',
  'Palliative Care',
  'Rehabilitation',
  'Wound Care',
  'Medication Management'];


  const shiftOptions = [
  'Day Shift (7AM-7PM)',
  'Night Shift (7PM-7AM)',
  'Split Shifts',
  'Flexible Hours',
  'Weekend Coverage',
  'On-call Availability'];


  const certificationOptions = [
  'CPR/BLS',
  'ACLS',
  'PALS',
  'TNCC',
  'CCRN',
  'CNA',
  'Wound Care Certification',
  'Medication Administration',
  'First Aid',
  'Food Safety',
  'WHMIS',
  'Other'];


  const languageOptions = [
  'English',
  'French',
  'Spanish',
  'Italian',
  'Portuguese',
  'Mandarin',
  'Cantonese',
  'Hindi',
  'Punjabi',
  'Arabic',
  'Other'];


  const locationOptions = [
  'Toronto',
  'Mississauga',
  'Brampton',
  'Hamilton',
  'Ottawa',
  'London',
  'Windsor',
  'Kitchener',
  'Barrie',
  'Oshawa',
  'Willing to travel anywhere in Ontario'];


  const handleArrayChange = (arrayName: string, value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: checked ?
      [...prev[arrayName], value] :
      prev[arrayName].filter((item) => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.profession) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your API
    console.log('Application submitted:', formData);

    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and contact you within 48 hours."
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      province: 'Ontario',
      postalCode: '',
      profession: '',
      license: '',
      experience: '',
      specializations: [],
      availability: '',
      shiftPreferences: [],
      employmentType: '',
      minHourlyRate: '',
      preferredLocations: [],
      transportationReliable: '',
      education: '',
      certifications: [],
      languages: [],
      additionalSkills: '',
      whyJoin: '',
      eligibleToWork: '',
      backgroundCheck: '',
      references: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Allurement Healthcare Staffing</span>
            </div>
            <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Healthcare Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey with Allurement Healthcare Staffing. We offer flexible schedules, competitive compensation, and career growth opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Basic personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    placeholder="Enter your first name"
                    required />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    placeholder="Enter your last name"
                    required />

                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    required />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="(xxx) xxx-xxxx"
                    required />

                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                  placeholder="Street address" />

              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                    placeholder="City" />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="province">Province</Label>
                  <Select
                    value={formData.province}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, province: value }))}>

                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ontario">Ontario</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => setFormData((prev) => ({ ...prev, postalCode: e.target.value }))}
                    placeholder="A1A 1A1" />

                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Professional Information
              </CardTitle>
              <CardDescription>
                Your healthcare profession and experience details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="profession">Profession *</Label>
                <Select
                  value={formData.profession}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, profession: value }))}>

                  <SelectTrigger>
                    <SelectValue placeholder="Select your profession" />
                  </SelectTrigger>
                  <SelectContent>
                    {professionOptions.map((option) =>
                    <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center">
                          {option.icon}
                          <span className="ml-2">{option.label}</span>
                        </div>
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="license">License/Registration Number</Label>
                  <Input
                    id="license"
                    value={formData.license}
                    onChange={(e) => setFormData((prev) => ({ ...prev, license: e.target.value }))}
                    placeholder="Enter your license number" />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}>

                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Specializations/Areas of Expertise</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {specializationOptions.map((spec) =>
                  <div key={spec} className="flex items-center space-x-2">
                      <Checkbox
                      id={spec}
                      checked={formData.specializations.includes(spec)}
                      onCheckedChange={(checked) => handleArrayChange('specializations', spec, checked as boolean)} />

                      <Label htmlFor={spec} className="cursor-pointer text-sm">
                        {spec}
                      </Label>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Availability</Label>
                <RadioGroup
                  value={formData.availability}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, availability: value }))}>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full-time" id="full-time" />
                    <Label htmlFor="full-time">Full-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="part-time" id="part-time" />
                    <Label htmlFor="part-time">Part-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="casual" id="casual" />
                    <Label htmlFor="casual">Casual/On-call</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible">Flexible</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Shift Preferences</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {shiftOptions.map((shift) =>
                  <div key={shift} className="flex items-center space-x-2">
                      <Checkbox
                      id={shift}
                      checked={formData.shiftPreferences.includes(shift)}
                      onCheckedChange={(checked) => handleArrayChange('shiftPreferences', shift, checked as boolean)} />

                      <Label htmlFor={shift} className="cursor-pointer text-sm">
                        {shift}
                      </Label>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Employment Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Employment Preferences
              </CardTitle>
              <CardDescription>
                Your preferred work arrangements and compensation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="employmentType">Employment Type</Label>
                  <Select
                    value={formData.employmentType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, employmentType: value }))}>

                    <SelectTrigger>
                      <SelectValue placeholder="Select employment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="permanent">Permanent Position</SelectItem>
                      <SelectItem value="contract">Contract Work</SelectItem>
                      <SelectItem value="temp-to-perm">Temp-to-Permanent</SelectItem>
                      <SelectItem value="casual">Casual/On-call</SelectItem>
                      <SelectItem value="any">Open to Any</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minHourlyRate">Minimum Hourly Rate (CAD)</Label>
                  <Input
                    id="minHourlyRate"
                    type="number"
                    value={formData.minHourlyRate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, minHourlyRate: e.target.value }))}
                    placeholder="e.g., 30" />

                </div>
              </div>

              <div className="space-y-4">
                <Label>Preferred Work Locations</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {locationOptions.map((location) =>
                  <div key={location} className="flex items-center space-x-2">
                      <Checkbox
                      id={location}
                      checked={formData.preferredLocations.includes(location)}
                      onCheckedChange={(checked) => handleArrayChange('preferredLocations', location, checked as boolean)} />

                      <Label htmlFor={location} className="cursor-pointer text-sm">
                        {location}
                      </Label>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Reliable Transportation</Label>
                <RadioGroup
                  value={formData.transportationReliable}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, transportationReliable: value }))}>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="transport-yes" />
                    <Label htmlFor="transport-yes">Yes, I have reliable transportation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="transport-no" />
                    <Label htmlFor="transport-no">No, I rely on public transportation</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Qualifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Qualifications & Skills
              </CardTitle>
              <CardDescription>
                Your education, certifications, and language skills
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="education">Highest Education Level</Label>
                <Select
                  value={formData.education}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, education: value }))}>

                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="college">College Diploma</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD/Doctorate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Certifications</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {certificationOptions.map((cert) =>
                  <div key={cert} className="flex items-center space-x-2">
                      <Checkbox
                      id={cert}
                      checked={formData.certifications.includes(cert)}
                      onCheckedChange={(checked) => handleArrayChange('certifications', cert, checked as boolean)} />

                      <Label htmlFor={cert} className="cursor-pointer text-sm">
                        {cert}
                      </Label>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Languages Spoken</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {languageOptions.map((lang) =>
                  <div key={lang} className="flex items-center space-x-2">
                      <Checkbox
                      id={lang}
                      checked={formData.languages.includes(lang)}
                      onCheckedChange={(checked) => handleArrayChange('languages', lang, checked as boolean)} />

                      <Label htmlFor={lang} className="cursor-pointer text-sm">
                        {lang}
                      </Label>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalSkills">Additional Skills or Qualifications</Label>
                <Textarea
                  id="additionalSkills"
                  value={formData.additionalSkills}
                  onChange={(e) => setFormData((prev) => ({ ...prev, additionalSkills: e.target.value }))}
                  placeholder="Describe any additional skills, technologies, or experiences relevant to healthcare"
                  rows={4} />

              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="whyJoin">Why do you want to join Allurement Healthcare Staffing?</Label>
                <Textarea
                  id="whyJoin"
                  value={formData.whyJoin}
                  onChange={(e) => setFormData((prev) => ({ ...prev, whyJoin: e.target.value }))}
                  placeholder="Tell us about your career goals and what attracts you to our organization"
                  rows={4} />

              </div>

              <div className="space-y-4">
                <Label>Legal Requirements</Label>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Are you legally eligible to work in Canada?</p>
                    <RadioGroup
                      value={formData.eligibleToWork}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, eligibleToWork: value }))}>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="eligible-yes" />
                        <Label htmlFor="eligible-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="eligible-no" />
                        <Label htmlFor="eligible-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Are you willing to undergo a background check?</p>
                    <RadioGroup
                      value={formData.backgroundCheck}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, backgroundCheck: value }))}>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="background-yes" />
                        <Label htmlFor="background-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="background-no" />
                        <Label htmlFor="background-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="references">References</Label>
                <Textarea
                  id="references"
                  value={formData.references}
                  onChange={(e) => setFormData((prev) => ({ ...prev, references: e.target.value }))}
                  placeholder="Please provide contact information for 2-3 professional references"
                  rows={4} />

              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Submit Application
            </Button>
            <Button type="button" variant="outline" asChild>
              <Link to="/">Cancel</Link>
            </Button>
          </div>
        </form>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Questions About Your Application?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm text-gray-600">(437) 220-2025</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm text-gray-600">enquire@allurementhealthcare.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-sm text-gray-600">2 County Ln, Barrie, ON</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default ApplyNow;