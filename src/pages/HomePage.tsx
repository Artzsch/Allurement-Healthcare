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
        className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10 backdrop-blur-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}>

              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}>
                  <img
                    src="https://cdn.ezsite.ai/AutoDev/22124/01158ef8-d8f5-4400-b0ae-045101e8a83d.png"
                    alt="Allurement Healthcare Logo"
                    className="h-8 w-8 object-contain" />
                </motion.div>

                <div>
                  <span className="text-xl font-black text-slate-800 dark:text-white tracking-tight">
                    Allurement
                  </span>
                  <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 tracking-wider uppercase">
                    Healthcare
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hidden md:flex space-x-1 items-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}>

              {[
                { label: 'Services', action: () => scrollToSection('services') },
                { label: 'About', action: () => scrollToSection('about') },
                { label: 'Contact', action: () => scrollToSection('contact') }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <AnimatedButton
                    variant="ghost"
                    onClick={item.action}
                    className="text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-orange-900/20 px-6 py-3 rounded-2xl font-semibold transition-all duration-300">
                    {item.label}
                  </AnimatedButton>
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <AnimatedButton
                  variant="ghost"
                  asChild
                  className="text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-orange-900/20 px-6 py-3 rounded-2xl font-semibold transition-all duration-300">
                  <Link to="/faq">FAQ</Link>
                </AnimatedButton>
              </motion.div>

              <Separator orientation="vertical" className="h-8 bg-slate-300/50 dark:bg-slate-600/50" />

              <AdminLoginButton
                variant="ghost"
                className="text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 px-4 py-2 rounded-xl" />

              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image with Modern Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: 'url("https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/261ef118-1ff4-4589-958c-f9d8a3eccfff.png")'
          }} />

        {/* Modern Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-orange-900/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-amber-400/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}>

            {/* Modern Badge */}
            <motion.div
              className="inline-flex items-center space-x-3 glass-morphism px-8 py-4 mb-8 group cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}>

              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse" />
              <Heart className="h-5 w-5 text-orange-400 group-hover:text-pink-400 transition-colors duration-300" />
              <span className="text-white/90 font-medium tracking-wide">"Your Workforce, Our Commitment"</span>
              <Sparkles className="h-5 w-5 text-orange-400 group-hover:text-pink-400 transition-colors duration-300" />
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-pulse" />
            </motion.div>

            {/* Modern Typography */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}>
              <span className="block bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Healthcare Staffing
              </span>
              <span className="block bg-gradient-to-r from-orange-300 via-pink-300 to-orange-300 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
                Reimagined
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/80 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}>
              Experience next-generation healthcare staffing solutions with 
              <span className="font-semibold text-orange-300"> flexible placements</span>, 
              <span className="font-semibold text-pink-300"> reliable professionals</span>, and 
              <span className="font-semibold text-blue-300"> exceptional care standards</span> across Ontario.
            </motion.p>

            {/* Modern CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <AnimatedButton
                  variant="orange"
                  size="lg"
                  onClick={() => scrollToSection('services')}
                  className="text-lg px-8 py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-2xl shadow-orange-500/25 border-0 font-semibold tracking-wide">
                  Explore Services
                  <ArrowRight className="ml-3 h-5 w-5" />
                </AnimatedButton>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <AnimatedButton
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="text-lg px-8 py-6 rounded-2xl glass-morphism border-white/30 text-white hover:bg-white/10 font-semibold tracking-wide">
                  Get Started Today
                </AnimatedButton>
              </motion.div>
            </motion.div>

            {/* Modern Stats or Features */}
            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}>
              
              {[
                { icon: Users, label: "1000+", desc: "Healthcare Professionals" },
                { icon: Building2, label: "50+", desc: "Partner Facilities" },
                { icon: Clock, label: "24/7", desc: "Emergency Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism p-6 rounded-2xl group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}>
                  <stat.icon className="h-8 w-8 text-orange-400 mx-auto mb-3 group-hover:text-pink-400 transition-colors duration-300" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-white/70 text-sm">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section id="services" className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-orange-25 dark:from-slate-900 dark:via-slate-800 dark:to-orange-950/30">
        {/* Background Decorations */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimatedSection>
            <div className="text-center mb-20">
              {/* Modern Badge */}
              <motion.div
                className="inline-flex items-center space-x-3 glass-morphism px-8 py-4 mb-8 group cursor-pointer"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}>
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse" />
                <Heart className="h-5 w-5 text-orange-500 group-hover:text-pink-500 transition-colors duration-300" />
                <span className="font-semibold text-slate-700 dark:text-slate-300 tracking-wide">Comprehensive Solutions</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-800 via-orange-600 to-slate-800 dark:from-white dark:via-orange-400 dark:to-white bg-clip-text text-transparent">
                  Healthcare Staffing
                </span>
                <br />
                <span className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">
                  Services
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
                Comprehensive, customized recruitment solutions designed to 
                <span className="font-semibold text-orange-600"> address staffing gaps</span> and 
                <span className="font-semibold text-blue-600"> improve patient care</span>
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group">
                <Card className="h-full glass-morphism border-white/20 dark:border-white/10 hover:border-orange-200/50 dark:hover:border-orange-400/30 transition-all duration-500 overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-pink-50/30 dark:from-orange-950/20 dark:via-transparent dark:to-pink-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="text-center relative z-10 pb-4">
                    <motion.div
                      className="flex justify-center mb-6"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}>
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-100 via-orange-200 to-pink-200 dark:from-orange-900/40 dark:via-orange-800/40 dark:to-pink-900/40 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-orange-500/25 transition-all duration-500">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          viewport={{ once: true }}>
                          <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 via-orange-50/15 to-gray-100/30 dark:from-gray-900/30 dark:via-orange-950/10 dark:to-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Nursing Staff Solutions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mr-4">
                <Stethoscope className="h-6 w-6 text-orange-600 dark:text-orange-400" />
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
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800/50 rounded-xl flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-gray-600 dark:text-gray-400" />
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
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mr-4">
                <ChefHat className="h-6 w-6 text-orange-600 dark:text-orange-400" />
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
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50/80 via-orange-50/20 to-gray-100/50 dark:from-gray-900/40 dark:via-orange-950/15 dark:to-gray-800/30">
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
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
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Building2 className="h-8 w-8 text-orange-600 dark:text-orange-400 mr-3" />
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
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Users className="h-8 w-8 text-gray-600 dark:text-gray-400 mr-3" />
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
      <section id="contact" className="py-32 relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-slate-900 to-slate-900" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimatedSection>
            <div className="text-center mb-20">
              {/* Modern Badge */}
              <motion.div
                className="inline-flex items-center space-x-3 glass-morphism px-8 py-4 mb-8 group cursor-pointer"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}>
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse" />
                <span className="font-semibold text-white tracking-wide">Get Started</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="text-3xl md:text-4xl font-bold text-orange-400">
                  Your Healthcare Journey?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
                Join our network of healthcare professionals or find the perfect staffing solution for your facility
              </p>
            </div>
          </ScrollAnimatedSection>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group">
              <Card className="glass-morphism border-white/20 hover:border-orange-400/50 transition-all duration-500 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-3">
                    Healthcare Facilities
                  </CardTitle>
                  <CardDescription className="text-white/70 text-lg leading-relaxed">
                    Transform your staffing challenges into seamless solutions with our expert recruitment services
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 text-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <AnimatedButton 
                      variant="orange" 
                      size="lg"
                      className="w-full mb-6 text-lg py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-2xl shadow-orange-500/25 border-0 font-semibold"
                      asChild>
                      <Link to="/request-staffing-solutions">
                        Request Staffing Solutions
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </Link>
                    </AnimatedButton>
                  </motion.div>
                  
                  <div className="flex items-center justify-center space-x-2 text-orange-300">
                    <Clock className="h-4 w-4" />
                    <p className="text-sm font-medium">24-72 hour emergency placements</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group">
              <Card className="glass-morphism border-white/20 hover:border-blue-400/50 transition-all duration-500 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-3">
                    Healthcare Professionals
                  </CardTitle>
                  <CardDescription className="text-white/70 text-lg leading-relaxed">
                    Advance your career with flexible opportunities and competitive compensation in top healthcare facilities
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 text-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <AnimatedButton 
                      variant="outline" 
                      size="lg"
                      className="w-full mb-6 text-lg py-4 rounded-2xl glass-morphism border-white/30 text-white hover:bg-white/10 font-semibold"
                      asChild>
                      <Link to="/apply-now">
                        Join Our Network
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </Link>
                    </AnimatedButton>
                  </motion.div>
                  
                  <div className="flex items-center justify-center space-x-2 text-blue-300">
                    <Star className="h-4 w-4" />
                    <p className="text-sm font-medium">Flexible schedules & growth opportunities</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <Card className="glass-morphism border-white/20 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-orange-400 mr-3" />
                    Contact & Hours
                  </h3>
                  <div className="space-y-3">
                    <p className="text-white/80 text-lg"><strong className="text-orange-400">Monday-Friday:</strong> 8:00 AM – 6:00 PM</p>
                    <p className="text-white/80 text-lg"><strong className="text-orange-400">Weekends:</strong> Emergency staffing only</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {
                    [
                      {
                        icon: MapPin,
                        label: "Address",
                        value: "2 County Ln, Barrie, ON L4N 0E6",
                        href: "https://maps.google.com/?q=2+County+Ln,+Barrie,+ON+L4N+0E6",
                        colors: "from-orange-400 to-red-400"
                      },
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "+1 437 494 7278",
                        href: "tel:+14374947278",
                        colors: "from-green-400 to-emerald-400"
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        value: "enquire@allurementhealthcares.com",
                        href: "mailto:enquire@allurementhealthcares.com",
                        colors: "from-purple-400 to-indigo-400"
                      },
                      {
                        icon: Globe,
                        label: "Website",
                        value: "allurementhealthcares.com",
                        href: "https://www.allurementhealthcares.com/",
                        colors: "from-blue-400 to-cyan-400"
                      }
                    ].map((contact, index) => (
                      <motion.a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? "_blank" : undefined}
                        rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="group block"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}>
                        
                        <div className={`glass-morphism p-6 rounded-3xl text-center group-hover:border-white/40 transition-all duration-300`}>
                          <div className={`w-14 h-14 bg-gradient-to-r ${contact.colors} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                            <contact.icon className="h-7 w-7 text-white" />
                          </div>
                          <p className="font-bold text-white mb-2">{contact.label}</p>
                          <p className="text-white/70 text-sm leading-relaxed">{contact.value}</p>
                        </div>
                      </motion.a>
                    ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-orange-900/30 text-background py-12">
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