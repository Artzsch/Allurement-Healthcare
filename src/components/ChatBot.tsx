import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with information about Allurement Healthcare Staffing. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    'Tell me about your services',
    'How do I apply for a position?',
    'What are your contact details?',
    'Emergency staffing availability',
    'Speak with a human'
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return 'We provide comprehensive healthcare staffing solutions including Registered Nurses (RNs), Personal Support Workers (PSWs), and Personal Chef services. We serve hospitals, long-term care facilities, and home care agencies across Ontario.';
    } else if (lowerMessage.includes('apply') || lowerMessage.includes('job') || lowerMessage.includes('position')) {
      return 'Great! You can apply by clicking "Apply Now" on our website or visiting our application page. We\'re always looking for skilled healthcare professionals to join our team.';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return 'You can reach us at:\n📞 Phone: (437) 220-2025\n📧 Email: enquire@allurementhealthcares.com\n📍 Address: 2 County Ln, Barrie, ON L4N 0E6\n🕐 Hours: Monday-Friday, 8:00 AM – 6:00 PM';
    } else if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent')) {
      return 'We offer 24-72 hour emergency staffing placements! For urgent staffing needs, please call us directly at (437) 220-2025 or email enquire@allurementhealthcares.com.';
    } else if (lowerMessage.includes('human') || lowerMessage.includes('speak') || lowerMessage.includes('talk')) {
      return 'I\'d be happy to connect you with our team! Please send an email to enquire@allurementhealthcares.com or call (437) 220-2025 during business hours (Monday-Friday, 8:00 AM – 6:00 PM).';
    } else if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('rate')) {
      return 'Our rates are competitive and vary based on the specific role, experience level, and assignment duration. Please contact us at (437) 220-2025 for a personalized quote.';
    } else if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('area')) {
      return 'We serve healthcare facilities across Ontario, with our main office located in Barrie. We provide staffing solutions throughout the province.';
    } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re welcome! Is there anything else I can help you with today?';
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hello! Welcome to Allurement Healthcare Staffing. How can I help you today?';
    } else {
      return 'I\'m here to help with information about our healthcare staffing services. You can ask me about our services, how to apply, contact information, or emergency staffing. For specific questions, please contact our team at (437) 220-2025.';
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-20 right-6 w-80 md:w-96 h-96 z-50"
        >
          <Card className="h-full flex flex-col backdrop-blur-xl bg-background/95 border-border/50 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
              <CardTitle className="flex items-center text-sm font-medium">
                <Bot className="h-4 w-4 mr-2 text-primary" />
                Healthcare Staffing Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        )}
                        {message.sender === 'user' && (
                          <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="whitespace-pre-line">{message.text}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Replies */}
              <div className="p-4 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickReplies.map((reply) => (
                    <Button
                      key={reply}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 pt-0 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;