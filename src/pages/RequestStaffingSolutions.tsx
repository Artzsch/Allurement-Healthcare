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

    try {
      // Prepare data for database
      const requestData = {
        facility_name: formData.facilityName,
        contact_name: formData.contactName,
        contact_title: formData.contactTitle,
        email: formData.email,
        phone: formData.phone,
        facility_type: formData.facilityType,
        address: formData.address,
        city: formData.city,
        province: formData.province,
        postal_code: formData.postalCode,
        urgency: formData.urgency,
        staffing_needs: JSON.stringify(formData.staffingNeeds),
        shift_preferences: JSON.stringify(formData.shiftPreferences),
        duration: formData.duration,
        start_date: formData.startDate,
        special_requirements: formData.specialRequirements,
        additional_info: formData.additionalInfo,
        status: 'pending',
        created_at: new Date().toISOString()
      };

      // Save to database
      const { error } = await window.ezsite.apis.tableCreate(30197, requestData);

      if (error) throw error;

      // Send notification email
      try {
        await window.ezsite.apis.sendEmail({
          from: 'Allurement Healthcare Staffing <noreply@allurementhealthcares.com>',
          to: ['enquire@allurementhealthcares.com'],
          subject: `New Staffing Request from ${formData.facilityName}`,
          html: `
            <h2>New Staffing Request Received</h2>
            <h3>Facility Information</h3>
            <p><strong>Facility Name:</strong> ${formData.facilityName}</p>
            <p><strong>Facility Type:</strong> ${formData.facilityType}</p>
            <p><strong>Address:</strong> ${formData.address}, ${formData.city}, ${formData.province} ${formData.postalCode}</p>
            
            <h3>Contact Information</h3>
            <p><strong>Contact Name:</strong> ${formData.contactName}</p>
            <p><strong>Title:</strong> ${formData.contactTitle}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            
            <h3>Staffing Requirements</h3>
            <p><strong>Urgency:</strong> ${formData.urgency}</p>
            <p><strong>Duration:</strong> ${formData.duration}</p>
            <p><strong>Start Date:</strong> ${formData.startDate}</p>
            <p><strong>Staffing Needs:</strong> ${formData.staffingNeeds.join(', ')}</p>
            <p><strong>Shift Preferences:</strong> ${formData.shiftPreferences.join(', ')}</p>
            
            <h3>Additional Details</h3>
            <p><strong>Special Requirements:</strong> ${formData.specialRequirements}</p>
            <p><strong>Additional Information:</strong> ${formData.additionalInfo}</p>
          `
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Don't fail the entire submission if email fails
      }

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

    } catch (error) {
      console.error('Error submitting request:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/20 to-gray-100/50 dark:from-gray-900 dark:via-orange-950/10 dark:to-gray-800/30">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="https://cdn.ezsite.ai/AutoDev/22124/01158ef8-d8f5-4400-b0ae-045101e8a83d.png"
                alt="Allurement Healthcare Staffing Logo"
                className="h-8 w-8 object-contain mr-2" />

              <span className="text-xl font-bold text-foreground">Allurement Healthcare Staffing</span>
            </div>
            <Link to="/" className="flex items-center text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request Staffing Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                <Phone className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-3" />
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-sm text-muted-foreground">(437) 220-2025</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-3" />
                <div>
                  <p className="font-semibold text-foreground">Email Us</p>
                  <p className="text-sm text-muted-foreground">enquire@allurementhealthcares.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-3" />
                <div>
                  <p className="font-semibold text-foreground">Visit Us</p>
                  <p className="text-sm text-muted-foreground">2 County Ln, Barrie, ON</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default RequestStaffingSolutions;