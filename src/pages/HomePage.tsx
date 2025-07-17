import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/AnimatedButton';
import { AnimatedCard } from '@/components/AnimatedCard';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import GlassCard from '@/components/GlassCard';
import ParallaxSection from '@/components/ParallaxSection';
import { ThemeToggle } from '@/components/ThemeToggle';
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
  ArrowRight,
  Sparkles } from
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
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <motion.nav
        className="bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}>

              <div className="flex items-center space-x-3">
                <motion.img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/3010a2b2-03ad-48b6-ab6d-1b16477f66e1.png"
                  alt="Allurement Healthcare Staffing Logo"
                  className="w-10 h-10 object-contain"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }} />

                <span className="text-xl font-bold text-foreground">
                  Allurement Healthcare Staffing
                </span>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:flex space-x-4 items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}>

              <AnimatedButton
                variant="ghost"
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary">
                Services
              </AnimatedButton>
              <AnimatedButton
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary">
                About
              </AnimatedButton>
              <AnimatedButton
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary">
                Contact
              </AnimatedButton>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        </ParallaxSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}>

              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">"Your Workforce, Our Commitment"</span>
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}>

              <span className="block">Flexible, Reliable</span>
              <span className="block">Healthcare Staffing</span>
            </motion.h1>
            <motion.p
              className="text-xl mb-8 max-w-3xl mx-auto text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}>

              Providing high-quality staffing services tailored to diverse healthcare environments across Ontario
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}>

              <AnimatedButton
                size="lg"
                onClick={() => scrollToSection('services')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}>
                Get Started
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}>

                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Comprehensive Solutions</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Healthcare Staffing Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive, customized recruitment solutions designed to address staffing gaps and improve patient care
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) =>
            <AnimatedCard key={index} delay={index * 0.1}>
                <CardHeader className="text-center">
                  <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}>

                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </motion.div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) =>
                  <motion.li
                    key={idx}
                    className="flex items-center text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}>

                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                  )}
                  </ul>
                </CardContent>
              </AnimatedCard>
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-2 bg-secondary/20 border border-secondary/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}>

                <Star className="h-4 w-4 text-secondary-foreground" />
                <span className="text-sm font-medium text-secondary-foreground">Flexible Solutions</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Flexible Staffing Models
              </h2>
              <p className="text-xl text-muted-foreground">
                Multiple engagement options to meet your specific needs
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffingModels.map((model, index) =>
            <AnimatedCard key={index} delay={index * 0.1}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <motion.div
                    className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-3"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}>

                      <Star className="h-4 w-4 text-secondary-foreground" />
                    </motion.div>
                    {model.name}
                  </CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span>Best for: {model.best}</span>
                  </div>
                </CardContent>
              </AnimatedCard>
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

      {/* Our Team Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Team</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Healthcare Professionals
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of healthcare professionals brings together expertise, 
                compassion, and dedication to deliver exceptional care across all settings.
              </p>
            </div>
          </ScrollAnimatedSection>

          {/* Team Images */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/8598faa0-1627-49c8-ad7f-25717719b903.png"
                alt="Diverse healthcare team of professionals"
                className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Diverse Expertise</h4>
                  <p className="text-sm opacity-90">Our team represents various healthcare specialties and backgrounds</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/0d04404b-16ad-400a-9880-dfa1220f3f1d.png"
                alt="Professional healthcare team collaboration"
                className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Professional Excellence</h4>
                  <p className="text-sm opacity-90">Committed to maintaining the highest standards of professional care</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Growth and Success Section */}
          <ScrollAnimatedSection>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Growing Together, Succeeding Together
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our success is built on the foundation of investing in our healthcare professionals 
                and fostering environments where both careers and patient care flourish.
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/d7f72189-3603-4fae-a84e-0800fe2aeb57.png"
                alt="Growth and investment in healthcare careers"
                className="w-full h-80 object-cover bg-white" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Investment in Growth</h4>
                  <p className="text-sm opacity-90">We invest in our professionals' development and career advancement</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/6ff3a9d9-1f24-433a-8600-2bdeecd0feab.png"
                alt="Sustainable growth and success in healthcare"
                className="w-full h-80 object-cover bg-white" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Sustainable Success</h4>
                  <p className="text-sm opacity-90">Building lasting partnerships that benefit everyone involved</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedCard delay={0.1}>
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
                  <motion.li 
                    key={idx} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}>
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mr-4 mt-1">
                        <benefit.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </motion.li>
                  )}
                </ul>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
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
                  <motion.li 
                    key={idx} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}>
                      <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mr-4 mt-1">
                        <benefit.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </motion.li>
                  )}
                </ul>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get Started Today
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to solve your staffing challenges or advance your healthcare career?
              </p>
            </div>
          </ScrollAnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Building2 className="h-6 w-6 text-primary mr-2" />
                    For Healthcare Facilities
                  </CardTitle>
                  <CardDescription>
                    Let us help you find the right staff for your facility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatedButton className="w-full mb-4 bg-primary hover:bg-primary/90" asChild>
                    <Link to="/request-staffing">
                      Request Staffing Solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                  <p className="text-sm text-muted-foreground text-center">
                    24-72 hour emergency placements available
                  </p>
                </CardContent>
              </Card>
            </GlassCard>
            <GlassCard>
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Users className="h-6 w-6 text-primary mr-2" />
                    For Healthcare Professionals
                  </CardTitle>
                  <CardDescription>
                    Join our network of skilled healthcare professionals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatedButton variant="outline" className="w-full mb-4" asChild>
                    <Link to="/apply-now">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </AnimatedButton>
                  <p className="text-sm text-muted-foreground text-center">
                    Flexible schedules and competitive compensation
                  </p>
                </CardContent>
              </Card>
            </GlassCard>
          </div>
          
          {/* Service Hours and Contact Info */}
          <GlassCard className="mt-16">
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-8">
                <ScrollAnimatedSection>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      Service Hours
                    </h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground"><strong>Monday-Friday:</strong> 8:00 AM – 6:00 PM</p>
                      <p className="text-muted-foreground"><strong>Weekends:</strong> Emergency staffing only</p>
                    </div>
                  </div>
                </ScrollAnimatedSection>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <motion.a
                    href="https://maps.google.com/?q=2+County+Ln,+Barrie,+ON+L4N+0E6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>

                    <div className="flex flex-col items-center p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary mb-2" />
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">2 County Ln, Barrie, ON L4N 0E6</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="tel:+14372202025"
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>

                    <div className="flex flex-col items-center p-4 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                      <Phone className="h-6 w-6 text-green-600 mb-2" />
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">(437) 220-2025</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://app.titan.email/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>

                    <div className="flex flex-col items-center p-4 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      <Mail className="h-6 w-6 text-purple-600 mb-2" />
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">enquire@allurementhealthcares.com</p>
                    </div>
                  </motion.a>
                  <motion.div
                    className="flex flex-col items-center p-4 rounded-xl bg-orange-500/10"
                    whileHover={{ scale: 1.05 }}>

                    <Globe className="h-6 w-6 text-orange-600 mb-2" />
                    <p className="font-semibold text-foreground">Website</p>
                    <p className="text-sm text-muted-foreground">www.allurementhealthcares.com</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center">
              <motion.div
                className="flex justify-center items-center mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>

                <motion.img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/3010a2b2-03ad-48b6-ab6d-1b16477f66e1.png"
                  alt="Allurement Healthcare Staffing Logo"
                  className="w-12 h-12 object-contain mr-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }} />

                <span className="text-3xl font-bold">Allurement Healthcare Staffing</span>
              </motion.div>
              <motion.p
                className="text-lg text-primary font-medium mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}>

                "Your Workforce, Our Commitment"
              </motion.p>
              <motion.p
                className="text-background/80 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}>

                Providing flexible, reliable, and high-quality staffing services across Ontario
              </motion.p>
              <motion.p
                className="text-background/60 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}>

                © 2024 Allurement Healthcare Staffing. All rights reserved.
              </motion.p>
            </div>
          </ScrollAnimatedSection>
        </div>
      </footer>
    </div>);

};

export default HomePage;