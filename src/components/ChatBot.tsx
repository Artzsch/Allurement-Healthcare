import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, User, Bot, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  actions?: { label: string; action: string }[];
}

interface ChatBotProps {
  className?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailData, setEmailData] = useState({ name: '', email: '', message: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const botResponses = {
    greeting: {
      text: "Hello! I'm your Allurement Healthcare Staffing assistant. How can I help you today?",
      actions: [
        { label: "Our Services", action: "services" },
        { label: "Apply for a Job", action: "apply" },
        { label: "Request Staffing", action: "staffing" },
        { label: "Contact Info", action: "contact" }
      ]
    },
    services: {
      text: "We provide comprehensive healthcare staffing solutions including:\n\n• Nursing Staff (RNs, RPNs)\n• Personal Support Workers (PSWs)\n• Home Care Support\n• Personal Chef Services\n• Leadership Recruitment\n\nWould you like more details about any specific service?",
      actions: [
        { label: "Nursing Staff", action: "nursing" },
        { label: "PSW Services", action: "psw" },
        { label: "Contact Us", action: "email" }
      ]
    },
    nursing: {
      text: "Our nursing staff solutions include:\n\n• Critical Care (ICU, CCU, ER)\n• Medical-Surgical units\n• Gerontology & Long-Term Care\n• Pediatrics & Neonatal\n• Mental Health & Addictions\n• Perioperative (OR, PACU)\n\nWe offer flexible staffing models from direct hire to contract positions.",
      actions: [
        { label: "Apply Now", action: "apply" },
        { label: "Request Staffing", action: "staffing" },
        { label: "Email Us", action: "email" }
      ]
    },
    psw: {
      text: "Our PSW services cover:\n\n• Long-Term Care Homes\n• Retirement Residences\n• Home & Community Care\n• Dementia & Alzheimer's Care\n• Palliative & End-of-Life Support\n• Language-Specific PSWs\n\nAll our PSWs are thoroughly vetted and experienced.",
      actions: [
        { label: "Apply as PSW", action: "apply" },
        { label: "Request PSW Staff", action: "staffing" },
        { label: "Contact Us", action: "email" }
      ]
    },
    apply: {
      text: "Great! We're always looking for qualified healthcare professionals. You can apply through our online portal or contact us directly.\n\nOur application process includes:\n• Skills assessment\n• Reference checks\n• Compliance screening\n• Interview process",
      actions: [
        { label: "Apply Online", action: "apply_link" },
        { label: "Email Resume", action: "email" },
        { label: "Call Us", action: "contact" }
      ]
    },
    staffing: {
      text: "We offer flexible staffing solutions:\n\n• Direct Hire (permanent with 90-day guarantee)\n• Temp-to-Perm (trial periods)\n• Contract Staffing (1-12+ months)\n• Rapid Response (24-48 hour placements)\n• Specialized Teams\n\nLet us know your specific needs!",
      actions: [
        { label: "Request Quote", action: "email" },
        { label: "Emergency Staffing", action: "contact" },
        { label: "Learn More", action: "services" }
      ]
    },
    contact: {
      text: "Here's how to reach us:\n\n📍 Address: 2 County Ln, Barrie, ON L4N 0E6\n📞 Phone: (437) 220-2025\n📧 Email: enquire@allurementhealthcares.com\n🕒 Hours: Mon-Fri 8AM-6PM\n\nWe're here to help with all your healthcare staffing needs!",
      actions: [
        { label: "Send Email", action: "email" },
        { label: "Our Services", action: "services" },
        { label: "Apply Now", action: "apply" }
      ]
    },
    default: {
      text: "I'd be happy to help you with information about our healthcare staffing services. Here are some common topics:",
      actions: [
        { label: "Our Services", action: "services" },
        { label: "Apply for a Job", action: "apply" },
        { label: "Request Staffing", action: "staffing" },
        { label: "Contact Info", action: "contact" }
      ]
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(botResponses.greeting);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (response: { text: string; actions?: { label: string; action: string }[] }) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        actions: response.actions
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    addUserMessage(inputText);
    
    // Simple keyword matching for responses
    const input = inputText.toLowerCase();
    let response = botResponses.default;

    if (input.includes('service') || input.includes('what do you do')) {
      response = botResponses.services;
    } else if (input.includes('nurse') || input.includes('nursing') || input.includes('rn') || input.includes('rpn')) {
      response = botResponses.nursing;
    } else if (input.includes('psw') || input.includes('personal support')) {
      response = botResponses.psw;
    } else if (input.includes('apply') || input.includes('job') || input.includes('career')) {
      response = botResponses.apply;
    } else if (input.includes('staff') || input.includes('hire') || input.includes('recruit')) {
      response = botResponses.staffing;
    } else if (input.includes('contact') || input.includes('phone') || input.includes('address')) {
      response = botResponses.contact;
    }

    setInputText('');
    addBotMessage(response);
  };

  const handleAction = (action: string) => {
    if (action === 'email') {
      setShowEmailForm(true);
    } else if (action === 'apply_link') {
      window.open('/apply-now', '_blank');
    } else if (botResponses[action as keyof typeof botResponses]) {
      addBotMessage(botResponses[action as keyof typeof botResponses]);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailData.name || !emailData.email || !emailData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate email sending
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });

    setShowEmailForm(false);
    setEmailData({ name: '', email: '', message: '' });
    
    addBotMessage({
      text: "Thank you for your message! We've received your inquiry and will get back to you within 24 hours. Is there anything else I can help you with?",
      actions: [
        { label: "Our Services", action: "services" },
        { label: "Contact Info", action: "contact" }
      ]
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full gradient-button text-white shadow-lg hover:shadow-xl z-50 pulse-glow ${
          isOpen ? 'hidden' : 'block'
        } ${className}`}
      >
        <MessageCircle className="h-8 w-8" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 modern-card">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">Healthcare Assistant</CardTitle>
                  <p className="text-xs text-blue-100">Online • Ready to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 w-8 h-8 rounded-full p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.isBot 
                        ? 'bg-gray-100 text-gray-800' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">{formatTime(message.timestamp)}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Action Buttons */}
              {messages.length > 0 && messages[messages.length - 1].isBot && messages[messages.length - 1].actions && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {messages[messages.length - 1].actions!.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleAction(action.action)}
                      className="text-xs rounded-full border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Email Form */}
            {showEmailForm && (
              <div className="p-4 border-t bg-gray-50">
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <h4 className="font-semibold text-sm text-gray-800">Send us a message</h4>
                  <Input
                    placeholder="Your name"
                    value={emailData.name}
                    onChange={(e) => setEmailData(prev => ({ ...prev, name: e.target.value }))}
                    className="text-sm"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={emailData.email}
                    onChange={(e) => setEmailData(prev => ({ ...prev, email: e.target.value }))}
                    className="text-sm"
                  />
                  <Input
                    placeholder="Your message"
                    value={emailData.message}
                    onChange={(e) => setEmailData(prev => ({ ...prev, message: e.target.value }))}
                    className="text-sm"
                  />
                  <div className="flex space-x-2">
                    <Button type="submit" size="sm" className="flex-1 text-xs">
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setShowEmailForm(false)}
                      className="text-xs"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Input Area */}
            {!showEmailForm && (
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 text-sm rounded-full"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="rounded-full w-10 h-10 p-0 gradient-button"
                    disabled={!inputText.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;