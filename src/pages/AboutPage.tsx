import { Link } from "react-router-dom";
import { 
  Shield, Users, Award, Heart, 
  Clock, CheckCircle, Stethoscope, BookOpen 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Medically Reviewed",
      description: "All content is reviewed by certified medical professionals and healthcare experts"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trusted Community",
      description: "Serving over 10 million users worldwide with reliable health information"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Updated Daily",
      description: "Our database is continuously updated with the latest medical research and guidelines"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award-Winning",
      description: "Recognized by medical associations for excellence in health education"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      specialization: "Internal Medicine & Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. Michael Chen",
      role: "Lead Medical Reviewer",
      specialization: "Family Medicine & Preventive Care",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Senior Medical Editor",
      specialization: "Public Health & Epidemiology",
      image: "https://images.unsplash.com/photo-1594824717240-a0d25c8f4b5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const stats = [
    { number: "10M+", label: "Monthly Users" },
    { number: "50K+", label: "Medical Articles" },
    { number: "1K+", label: "Health Topics" },
    { number: "24/7", label: "Content Updates" }
  ];

  const certifications = [
    "HONcode Certified",
    "URAC Accredited",
    "HIPAA Compliant",
    "FDA Guidelines"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-600 to-health-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About Health Information Hub</h1>
              <p className="text-xl opacity-90 mb-8">
                Empowering people with trusted, medically-reviewed health information 
                to make informed decisions about their well-being
              </p>
              <div className="flex justify-center items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-lg">Trusted by healthcare professionals worldwide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We believe everyone deserves access to accurate, up-to-date health information. 
                Our platform bridges the gap between complex medical knowledge and everyday health decisions, 
                making healthcare more accessible and understandable for everyone.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-health-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Trust Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to accuracy, transparency, and user safety sets us apart 
                in the digital health information landscape
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="bg-health-50 text-health-600 p-4 rounded-lg inline-block mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Medical Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our content is overseen by board-certified physicians and healthcare professionals 
                with decades of clinical experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-health-600 font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Certifications & Standards</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We adhere to the highest standards in health information quality and user privacy protection
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="font-medium text-gray-900">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Editorial Process</h2>
                <p className="text-xl text-gray-600">
                  Every piece of content goes through rigorous review to ensure accuracy and reliability
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-health-50 text-health-600 p-4 rounded-full inline-block mb-4">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Research</h3>
                  <p className="text-gray-600">
                    Content writers research topics using peer-reviewed medical journals and authoritative sources
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-health-50 text-health-600 p-4 rounded-full inline-block mb-4">
                    <Stethoscope className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Medical Review</h3>
                  <p className="text-gray-600">
                    Board-certified physicians review all content for medical accuracy and clinical relevance
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-health-50 text-health-600 p-4 rounded-full inline-block mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Final Approval</h3>
                  <p className="text-gray-600">
                    Content undergoes final editorial review before publication and regular updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-health-600 to-health-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get access to expert health insights, tools, and personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-health-700 hover:bg-gray-100">
                <Link to="/tools">Explore Health Tools</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-health-700">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;