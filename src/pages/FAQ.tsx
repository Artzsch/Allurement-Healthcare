
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, HelpCircle, Users, FileText, Clock, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      id: 'general',
      title: 'General Information',
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          question: 'What is Allurement Healthcare?',
          answer: 'Allurement Healthcare is a premier healthcare staffing and consulting company dedicated to connecting skilled healthcare professionals with top-tier medical facilities. We specialize in providing temporary, permanent, and contract staffing solutions across various healthcare specialties.'
        },
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive healthcare staffing services including: temporary staffing, permanent placements, travel nursing, locum tenens, allied health staffing, healthcare consulting, and workforce management solutions.'
        },
        {
          question: 'Which healthcare specialties do you cover?',
          answer: 'We cover a wide range of specialties including: Nursing (RN, LPN, CNA), Physicians, Nurse Practitioners, Physician Assistants, Allied Health professionals (Physical Therapists, Occupational Therapists, Respiratory Therapists), Healthcare Administration, and specialized roles in various medical fields.'
        },
        {
          question: 'What geographic areas do you serve?',
          answer: 'We provide staffing solutions nationwide, with a strong presence in major metropolitan areas. Our network spans across all 50 states, ensuring we can meet your staffing needs wherever you are located.'
        }
      ]
    },
    {
      id: 'professionals',
      title: 'For Healthcare Professionals',
      icon: <Users className="w-5 h-5" />,
      questions: [
        {
          question: 'How do I apply for positions?',
          answer: 'You can apply through our online application portal by clicking "Apply Now" on our website. The process includes submitting your resume, completing our application form, and participating in our credentialing process.'
        },
        {
          question: 'What are the requirements to work with Allurement Healthcare?',
          answer: 'Requirements vary by position but typically include: valid professional license, relevant education and certification, background check clearance, drug screening, and minimum experience requirements specific to the role.'
        },
        {
          question: 'Do you offer benefits to temporary staff?',
          answer: 'Yes, we offer comprehensive benefits packages including health insurance, dental and vision coverage, 401(k) plans, paid time off, continuing education support, and professional development opportunities.'
        },
        {
          question: 'How does the assignment process work?',
          answer: 'Once you complete our onboarding process, our recruitment team will match you with suitable positions based on your skills, preferences, and availability. We provide full support throughout the assignment including orientation, ongoing communication, and performance feedback.'
        },
        {
          question: 'Can I choose my assignments?',
          answer: 'Absolutely! We work closely with you to understand your preferences for location, shift schedules, facility types, and specialty areas. While we present opportunities that match your criteria, the final decision to accept assignments is always yours.'
        }
      ]
    },
    {
      id: 'facilities',
      title: 'For Healthcare Facilities',
      icon: <FileText className="w-5 h-5" />,
      questions: [
        {
          question: 'How quickly can you provide staffing solutions?',
          answer: 'Our response time depends on the specific requirements, but we typically can provide qualified candidates within 24-48 hours for urgent needs. For planned staffing, we recommend 1-2 weeks notice for optimal candidate selection.'
        },
        {
          question: 'What is your screening process?',
          answer: 'Our rigorous screening process includes: license verification, background checks, drug screening, reference checks, skills assessments, and interview evaluations. All candidates undergo our comprehensive credentialing process before placement.'
        },
        {
          question: 'Do you handle compliance and credentialing?',
          answer: 'Yes, we manage all aspects of compliance and credentialing including license verification, certification tracking, background checks, and ensuring all documentation meets facility and regulatory requirements.'
        },
        {
          question: 'What are your rates and fees?',
          answer: 'Our rates are competitive and vary based on specialty, location, shift requirements, and assignment duration. We provide transparent pricing with no hidden fees. Contact us for a customized quote based on your specific needs.'
        },
        {
          question: 'Do you provide 24/7 support?',
          answer: 'Yes, we offer round-the-clock support for both our healthcare professionals and facility partners. Our dedicated support team is available to address any concerns or emergencies that may arise.'
        }
      ]
    },
    {
      id: 'process',
      title: 'Application & Process',
      icon: <Clock className="w-5 h-5" />,
      questions: [
        {
          question: 'How long does the application process take?',
          answer: 'The initial application can be completed in 15-30 minutes. The full onboarding process, including credentialing and background checks, typically takes 3-5 business days, depending on the completeness of your documentation.'
        },
        {
          question: 'What documents do I need to provide?',
          answer: 'Required documents include: current resume, professional licenses and certifications, educational transcripts, references, identification documents, and any specialty-specific certifications relevant to your field.'
        },
        {
          question: 'How do I track my application status?',
          answer: 'Once you submit your application, you will receive a confirmation email with tracking information. You can also contact our recruitment team directly for updates on your application status.'
        },
        {
          question: 'What happens after I submit my application?',
          answer: 'After submission, our recruitment team will review your application, conduct initial screening, verify your credentials, and schedule an interview. Once approved, you will be added to our talent pool and notified of matching opportunities.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Allurement Healthcare's staffing solutions and services.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {filteredCategories.map((category) => (
            <Card key={category.id} className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {category.icon}
                  {category.title}
                  <Badge variant="secondary">{category.questions.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.id}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or browse all categories above.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <CardContent className="p-8 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6">
                Our team is here to help! Get in touch with us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  onClick={() => navigate('/consultation-form')}
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/request-staffing-solutions')}
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Request Staffing Solutions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
