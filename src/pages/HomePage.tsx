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
import AdminLoginButton from '@/components/AdminLoginButton';
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
                <motion.div
                  className="w-10 h-10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}>
                  <img
                    src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/23c5760d-6f79-43e0-9cee-ef76f128e5df.png"
                    alt="Allurement Healthcare Logo"
                    className="h-10 w-10 object-contain" />

                </motion.div>

                <span className="text-xl font-bold text-foreground">
                  Allurement Healthcare
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
              <AnimatedButton
                variant="ghost"
                asChild
                className="text-foreground hover:text-primary">
                <Link to="/faq">FAQ</Link>
              </AnimatedButton>
              <AdminLoginButton
                variant="ghost"
                className="text-foreground hover:text-primary" />

              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-orange-50/30 dark:via-orange-950/20 to-primary/5 relative overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5" />
        </ParallaxSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-300/50 dark:border-orange-700/50 rounded-full px-6 py-2 mb-6 backdrop-blur-sm shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}>

              <Heart className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">"Your Workforce, Our Commitment"</span>
              <Sparkles className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent leading-tight"
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
                variant="orange"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="shadow-lg orange-glow">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}>
                Get Started
              </AnimatedButton>
              <div className="text-center mt-4">
                <Button
                  variant="ghost"
                  asChild
                  className="text-primary hover:text-primary/80 text-sm">
                  <Link to="/faq">Have questions? Check our FAQ →</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section id="services" className="py-20 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-pink-50/50 dark:from-orange-950/20 dark:via-red-950/10 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-300/50 dark:border-orange-700/50 rounded-full px-6 py-2 mb-6 backdrop-blur-sm shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}>

                <Heart className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Comprehensive Solutions</span>
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

                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl flex items-center justify-center shadow-lg">
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
      <section className="py-20 bg-gradient-to-br from-white via-orange-50/20 to-red-50/30 dark:from-background dark:via-orange-950/10 dark:to-red-950/15">
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

      {/* Our Team Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-orange-50/30 to-red-50/20 dark:from-gray-900/50 dark:via-orange-950/20 dark:to-red-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-300/50 dark:border-orange-700/50 rounded-full px-6 py-2 mb-6 backdrop-blur-sm shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <Users className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Our Team</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/33c2e3cf-6171-4a54-925e-550719c3fb67.png"
                alt="Professional healthcare administrator"
                className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Leadership</h4>
                  <p className="text-sm opacity-90">Experienced healthcare management professionals</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/1e3be502-0178-46d0-8c2d-86188a261f34.png"
                alt="Skilled healthcare nurse"
                className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Nursing Excellence</h4>
                  <p className="text-sm opacity-90">Skilled RNs and RPNs across all specialties</p>
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/952d0a71-867d-4c54-8bf8-8a4512e77e76.png"
                alt="Compassionate patient care"
                className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Patient-Centered Care</h4>
                  <p className="text-sm opacity-90">Dedicated PSWs providing personalized support</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/63e02ff1-c447-4720-a22f-8edda13c34e4.png"
                alt="Diverse healthcare team of professionals"
                className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Diverse Expertise</h4>
                  <p className="text-sm opacity-90">Our team represents various healthcare specialties</p>
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
                src="https://images.unsplash.com/photo-1659353888818-0e41520d086a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZ3Jvd3RoJTIwc3VjY2VzcyUyMG1lZGljYWwlMjBjYXJlZXJ8ZW58MHx8fHwxNzUyODAzMjMzfDA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Growth and investment in healthcare careers"
                className="w-full h-80 object-cover" />
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
                src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwzfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZ3Jvd3RoJTIwc3VjY2VzcyUyMG1lZGljYWwlMjBjYXJlZXJ8ZW58MHx8fHwxNzUyODAzMjMzfDA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Sustainable growth and success in healthcare"
                className="w-full h-80 object-cover" />
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
      <section id="contact" className="py-20 bg-gradient-to-br from-background via-orange-50/20 dark:via-orange-950/10 to-red-50/30 dark:to-red-950/20">
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
            <GlassCard variant="warm">
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Building2 className="h-6 w-6 text-orange-600 dark:text-orange-400 mr-2" />
                    For Healthcare Facilities
                  </CardTitle>
                  <CardDescription>
                    Let us help you find the right staff for your facility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatedButton variant="warm" className="w-full mb-4" asChild>
                    <Link to="/request-staffing-solutions">
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
            <GlassCard variant="orange">
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Users className="h-6 w-6 text-orange-600 dark:text-orange-400 mr-2" />
                    For Healthcare Professionals
                  </CardTitle>
                  <CardDescription>
                    Join our network of skilled healthcare professionals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AnimatedButton variant="orange" className="w-full mb-4" asChild>
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
          <GlassCard variant="orange" className="mt-16">
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

                    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 group-hover:from-orange-200 group-hover:to-red-200 dark:group-hover:from-orange-800/40 dark:group-hover:to-red-800/40 transition-all duration-300 shadow-lg">
                      <MapPin className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">2 County Ln, Barrie, ON L4N 0E6</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="tel:+14372202025"
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>

                    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 group-hover:from-green-200 group-hover:to-emerald-200 dark:group-hover:from-green-800/40 dark:group-hover:to-emerald-800/40 transition-all duration-300 shadow-lg">
                      <Phone className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">(437) 220-2025</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>

                    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 group-hover:from-purple-200 group-hover:to-indigo-200 dark:group-hover:from-purple-800/40 dark:group-hover:to-indigo-800/40 transition-all duration-300 shadow-lg">
                      <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">enquire@allurementhealthcares.com</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://www.allurementhealthcares.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>

                    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-800/40 dark:to-red-800/40 group-hover:from-orange-300 group-hover:to-red-300 dark:group-hover:from-orange-700/50 dark:group-hover:to-red-700/50 transition-all duration-300 shadow-lg animate-warm-gradient">
                      <Globe className="h-6 w-6 text-white dark:text-orange-200 mb-2" />
                      <p className="font-semibold text-white dark:text-orange-100">Website</p>
                      <p className="text-sm text-white/90 dark:text-orange-200/90">www.allurementhealthcares.com</p>
                    </div>
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/20 text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <div className="text-center">
              <motion.div
                className="flex justify-center items-center mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>

                <motion.div
                  className="w-12 h-12 flex items-center justify-center mr-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  <img
                    src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/22124/23c5760d-6f79-43e0-9cee-ef76f128e5df.png"
                    alt="Allurement Healthcare Logo"
                    className="h-12 w-12 object-contain" />

                </motion.div>

                <span className="text-3xl font-bold">Allurement Healthcare</span>
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
              <motion.div
                className="flex justify-center gap-6 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}>
                <Link
                  to="/disclaimer"
                  className="text-background/80 hover:text-background text-sm transition-colors">

                  Disclaimer
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-background/80 hover:text-background text-sm transition-colors">

                  Privacy Policy
                </Link>
                <Link
                  to="/admin"
                  className="text-background/80 hover:text-background text-sm transition-colors">

                  Admin Login
                </Link>
              </motion.div>
              <motion.p
                className="text-background/60 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}>
                © 2025 Allurement Healthcare. All rights reserved.
              </motion.p>
            </div>
          </ScrollAnimatedSection>
        </div>
      </footer>
    </div>);

};

export default HomePage;