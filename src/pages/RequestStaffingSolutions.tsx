import React, { useState, useEffect } from 'react';
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
  Building2,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  ChefHat,
  Home as HomeIcon } from
'lucide-react';

const RequestStaffingSolutions = () => {
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    facilityName: '',
    contactName: '',
    contactTitle: '',
    email: '',
    phone: '',
    facilityType: '',
    address: '',
    city: '',
    province: 'Ontario',
    postalCode: '',
    urgency: '',
    staffingNeeds: [],
    shiftPreferences: [],
    duration: '',
    startDate: '',
    specialRequirements: '',
    additionalInfo: ''
  });

  const facilityTypes = [
  'Hospital',
  'Long-Term Care Home',
  'Retirement Residence',
  'Home Care Agency',
  'Private Residence',
  'Rehabilitation Center',
  'Mental Health Facility',
  'Community Health Center',
  'Other'];


  const staffingOptions = [
  { id: 'rn', label: 'Registered Nurses (RN)', icon: <Stethoscope className="h-4 w-4" /> },
  { id: 'rpn', label: 'Registered Practical Nurses (RPN)', icon: <Stethoscope className="h-4 w-4" /> },
  { id: 'psw', label: 'Personal Support Workers (PSW)', icon: <Heart className="h-4 w-4" /> },
  { id: 'chef', label: 'Personal Chef Services', icon: <ChefHat className="h-4 w-4" /> },
  { id: 'homecare', label: 'Home Care Support', icon: <HomeIcon className="h-4 w-4" /> },
  { id: 'management', label: 'Nursing Management', icon: <Users className="h-4 w-4" /> }];


  const shiftOptions = [
  'Day Shift (7AM-7PM)',
  'Night Shift (7PM-7AM)',
  'Split Shifts',
  'Flexible Hours',
  'Weekend Coverage',
  'Overtime Coverage'];


  const handleStaffingNeedChange = (needId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      staffingNeeds: checked ?
      [...prev.staffingNeeds, needId] :
      prev.staffingNeeds.filter((id) => id !== needId)
    }));
  };

  const handleShiftPreferenceChange = (shift: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      shiftPreferences: checked ?
      [...prev.shiftPreferences, shift] :
      prev.shiftPreferences.filter((s) => s !== shift)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.facilityName || !formData.contactName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (formData.staffingNeeds.length === 0) {
      toast({
        title: "Staffing Needs Required",
        description: "Please select at least one staffing need.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your API
    console.log('Form submitted:', formData);

    toast({
      title: "Request Submitted Successfully!",
      description: "We'll contact you within 24 hours to discuss your staffing needs."
    });

    // Reset form
    setFormData({
      facilityName: '',
      contactName: '',
      contactTitle: '',
      email: '',
      phone: '',
      facilityType: '',
      address: '',
      city: '',
      province: 'Ontario',
      postalCode: '',
      urgency: '',
      staffingNeeds: [],
      shiftPreferences: [],
      duration: '',
      startDate: '',
      specialRequirements: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/3010a2b2-03ad-48b6-ab6d-1b16477f66e1.png"
                alt="Allurement Healthcare Staffing Logo"
                className="h-8 w-8 object-contain mr-2" />

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
            Request Staffing Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your facility's staffing needs and we'll provide customized solutions within 24 hours.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="h-5 w-5 mr-2" />
              Facility Information
            </CardTitle>
            <CardDescription>
              Basic information about your healthcare facility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="facilityName">Facility Name *</Label>
                  <Input
                    id="facilityName"
                    value={formData.facilityName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, facilityName: e.target.value }))}
                    placeholder="Enter facility name"
                    required />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="facilityType">Facility Type *</Label>
                  <Select
                    value={formData.facilityType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, facilityType: value }))}>

                    <SelectTrigger>
                      <SelectValue placeholder="Select facility type" />
                    </SelectTrigger>
                    <SelectContent>
                      {facilityTypes.map((type) =>
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, contactName: e.target.value }))}
                    placeholder="Your full name"
                    required />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactTitle">Title/Position</Label>
                  <Input
                    id="contactTitle"
                    value={formData.contactTitle}
                    onChange={(e) => setFormData((prev) => ({ ...prev, contactTitle: e.target.value }))}
                    placeholder="e.g., HR Manager, Director of Care" />

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
                    placeholder="contact@facility.com"
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

              <div className="space-y-4">
                <Label>Staffing Needs * (Select all that apply)</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {staffingOptions.map((option) =>
                  <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                      id={option.id}
                      checked={formData.staffingNeeds.includes(option.id)}
                      onCheckedChange={(checked) => handleStaffingNeedChange(option.id, checked as boolean)} />

                      <Label
                      htmlFor={option.id}
                      className="flex items-center cursor-pointer">

                        {option.icon}
                        <span className="ml-2">{option.label}</span>
                      </Label>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Shift Preferences (Select all that apply)</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {shiftOptions.map((shift) =>
                  <div key={shift} className="flex items-center space-x-2">
                      <Checkbox
                      id={shift}
                      checked={formData.shiftPreferences.includes(shift)}
                      onCheckedChange={(checked) => handleShiftPreferenceChange(shift, checked as boolean)} />

                      <Label htmlFor={shift} className="cursor-pointer">
                        {shift}
                      </Label>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Request Urgency</Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, urgency: value }))}>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="emergency" id="emergency" />
                    <Label htmlFor="emergency" className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-red-500" />
                      Emergency (24-48 hours)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="urgent" id="urgent" />
                    <Label htmlFor="urgent" className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-orange-500" />
                      Urgent (Within 1 week)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="planned" id="planned" />
                    <Label htmlFor="planned" className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-green-500" />
                      Planned (2+ weeks)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="duration">Expected Duration</Label>
                  <Select
                    value={formData.duration}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, duration: value }))}>

                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="temporary">Temporary (1-30 days)</SelectItem>
                      <SelectItem value="short-term">Short-term (1-6 months)</SelectItem>
                      <SelectItem value="long-term">Long-term (6+ months)</SelectItem>
                      <SelectItem value="permanent">Permanent hire</SelectItem>
                      <SelectItem value="temp-to-perm">Temp-to-permanent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Preferred Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))} />

                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequirements">Special Requirements or Certifications</Label>
                <Textarea
                  id="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData((prev) => ({ ...prev, specialRequirements: e.target.value }))}
                  placeholder="e.g., Language requirements, specific certifications, experience level"
                  rows={3} />

              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }))}
                  placeholder="Any additional details about your staffing needs"
                  rows={4} />

              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Submit Request
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link to="/">Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Immediate Assistance?</CardTitle>
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
                  <p className="text-sm text-gray-600">enquire@allurementhealthcares.com</p>
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

export default RequestStaffingSolutions;