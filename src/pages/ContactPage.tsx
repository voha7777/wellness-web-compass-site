import { useState } from "react";
import { 
  Mail, Phone, MapPin, Clock, 
  Send, MessageCircle, AlertCircle, CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@healthhub.com",
      response: "24-48 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "1-800-HEALTH",
      response: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Real-time assistance",
      contact: "Available on website",
      response: "Mon-Fri 9AM-9PM EST"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Health Avenue, NY 10001",
      phone: "+1 (212) 555-0123"
    },
    {
      city: "Los Angeles",
      address: "456 Wellness Blvd, CA 90210",
      phone: "+1 (310) 555-0456"
    },
    {
      city: "Chicago",
      address: "789 Medical Center Dr, IL 60601",
      phone: "+1 (312) 555-0789"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-600 to-health-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl opacity-90">
                Have questions? We're here to help. Reach out to our team for support, 
                feedback, or medical content inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the best way to reach us. Our support team is ready to assist you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-health-50 text-health-600 p-4 rounded-lg inline-block mx-auto mb-4">
                      {method.icon}
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <p className="text-gray-600">{method.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="font-medium text-health-700">{method.contact}</div>
                      <div className="text-sm text-gray-500">Response time: {method.response}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="medical">Medical Content Question</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <strong>Important:</strong> This form is for general inquiries only. 
                        For medical emergencies, please call 911 or contact your healthcare provider immediately.
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Office Locations & Hours */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Office Locations</h3>
                  <div className="space-y-6">
                    {officeLocations.map((office, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="bg-health-50 text-health-600 p-2 rounded-lg">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">{office.city}</h4>
                              <p className="text-gray-600 mb-2">{office.address}</p>
                              <p className="text-health-600 font-medium">{office.phone}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-health-50 text-health-600 p-2 rounded-lg">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-3">Support Hours</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Monday - Friday:</span>
                              <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Saturday:</span>
                              <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Sunday:</span>
                              <span className="font-medium">Closed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-800">
                            Emergency health information is available 24/7 on our website
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">How quickly will I receive a response?</h5>
                          <p className="text-sm text-gray-600">
                            We aim to respond to all inquiries within 24-48 hours during business days.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Can you provide medical advice?</h5>
                          <p className="text-sm text-gray-600">
                            We provide general health information but cannot give personal medical advice. 
                            Please consult your healthcare provider for medical concerns.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">How can I report incorrect information?</h5>
                          <p className="text-sm text-gray-600">
                            Please use the contact form above with "Medical Content Question" category 
                            to report any concerns about our content accuracy.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;