import { useState } from "react";
import { 
  Heart, Phone, AlertTriangle, Clock, 
  Search, ChevronRight, Eye, Thermometer 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FirstAidPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const emergencyNumbers = [
    { service: "Emergency Services", number: "911", description: "Police, Fire, Medical" },
    { service: "Poison Control", number: "1-800-222-1222", description: "24/7 poisoning help" },
    { service: "Mental Health Crisis", number: "988", description: "Suicide & Crisis Lifeline" },
    { service: "Non-Emergency Medical", number: "311", description: "Health information" }
  ];

  const firstAidTopics = [
    {
      id: "cpr",
      title: "CPR (Cardiopulmonary Resuscitation)",
      icon: <Heart className="h-5 w-5" />,
      severity: "critical",
      category: "Life-Threatening",
      steps: [
        "Check responsiveness - tap shoulders and shout 'Are you okay?'",
        "Call 911 immediately or have someone else call",
        "Place person on firm, flat surface",
        "Tilt head back, lift chin to open airway",
        "Place heel of one hand on center of chest, between nipples",
        "Place other hand on top, interlacing fingers",
        "Push hard and fast at least 2 inches deep",
        "Allow complete chest recoil between compressions",
        "Compress at rate of 100-120 per minute",
        "Continue until emergency services arrive"
      ],
      warnings: [
        "Only perform if person is unresponsive and not breathing normally",
        "Do not stop unless person starts breathing or help arrives"
      ]
    },
    {
      id: "choking",
      title: "Choking",
      icon: <AlertTriangle className="h-5 w-5" />,
      severity: "critical",
      category: "Life-Threatening",
      steps: [
        "Ask 'Are you choking?' If they can speak, encourage coughing",
        "If unable to speak or cough, stand behind them",
        "Place arms around waist, just above hip bones",
        "Make a fist with one hand, place thumb side against stomach",
        "Grasp fist with other hand",
        "Push hard upward and inward",
        "Repeat until object is expelled or person becomes unconscious",
        "If unconscious, begin CPR and call 911"
      ],
      warnings: [
        "Do not perform on conscious person who can cough or speak",
        "Be careful with pregnant women and small children"
      ]
    },
    {
      id: "bleeding",
      title: "Severe Bleeding",
      icon: <AlertTriangle className="h-5 w-5" />,
      severity: "high",
      category: "Trauma",
      steps: [
        "Call 911 for severe bleeding",
        "Put on gloves if available",
        "Apply direct pressure to wound with clean cloth",
        "Do not remove embedded objects",
        "If blood soaks through, add more layers (don't remove first layer)",
        "Elevate injured area above heart if possible",
        "Apply pressure to pressure points if bleeding continues",
        "Monitor for signs of shock",
        "Keep person warm and calm"
      ],
      warnings: [
        "Do not use tourniquets unless trained",
        "Watch for signs of shock"
      ]
    },
    {
      id: "burns",
      title: "Burns",
      icon: <Thermometer className="h-5 w-5" />,
      severity: "moderate",
      category: "Injury",
      steps: [
        "Remove person from heat source",
        "Cool burn with cool (not ice cold) water for 10-20 minutes",
        "Remove jewelry/clothing before swelling occurs",
        "Cover with sterile, non-stick bandage",
        "Take over-the-counter pain relievers if needed",
        "Seek medical attention for severe burns"
      ],
      warnings: [
        "Do not use ice, butter, or oils",
        "Do not break blisters",
        "Seek immediate care for large or deep burns"
      ]
    },
    {
      id: "fractures",
      title: "Fractures and Sprains",
      icon: <AlertTriangle className="h-5 w-5" />,
      severity: "moderate",
      category: "Injury",
      steps: [
        "Do not move the person unless in immediate danger",
        "Call 911 for suspected spine, head, hip, or thigh injuries",
        "Control any bleeding with direct pressure",
        "Immobilize the injured area",
        "Apply ice wrapped in cloth to reduce swelling",
        "Treat for shock if necessary",
        "Get medical attention"
      ],
      warnings: [
        "Do not try to realign the bone",
        "Do not test if a bone is broken by moving it"
      ]
    },
    {
      id: "stroke",
      title: "Stroke Recognition",
      icon: <Eye className="h-5 w-5" />,
      severity: "critical",
      category: "Medical Emergency",
      steps: [
        "Use FAST test:",
        "F - Face: Ask person to smile. Does face droop?",
        "A - Arms: Ask person to raise both arms. Does one drift down?",
        "S - Speech: Ask person to repeat a phrase. Is speech slurred?",
        "T - Time: If any signs present, call 911 immediately",
        "Note time symptoms started",
        "Keep person calm and comfortable",
        "Do not give anything to eat or drink"
      ],
      warnings: [
        "Time is critical - act fast",
        "Do not drive to hospital yourself"
      ]
    }
  ];

  const filteredTopics = firstAidTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-100 text-red-800 border-red-200";
      case "high": return "bg-orange-100 text-orange-800 border-orange-200";
      case "moderate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 p-4 rounded-full inline-block mb-6">
                <Heart className="h-12 w-12" />
              </div>
              <h1 className="text-4xl font-bold mb-6">First Aid Emergency Guide</h1>
              <p className="text-xl opacity-90 mb-8">
                Step-by-step instructions for common medical emergencies
              </p>
              <Alert className="bg-red-500/20 border-red-300 text-white max-w-2xl mx-auto">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>For life-threatening emergencies, call 911 immediately.</strong>
                  <br />This guide supplements but does not replace professional medical training.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Emergency Numbers */}
        <section className="py-8 bg-red-50 border-b border-red-200">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-red-800 mb-6 text-center">Emergency Contact Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {emergencyNumbers.map((contact, index) => (
                <Card key={index} className="border-red-200 bg-white">
                  <CardContent className="p-4 text-center">
                    <div className="text-red-600 font-bold text-xl mb-1">{contact.number}</div>
                    <div className="font-medium text-red-800">{contact.service}</div>
                    <div className="text-sm text-red-600">{contact.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search first aid topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-lg py-3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* First Aid Topics */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">First Aid Procedures</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {filteredTopics.map((topic) => (
                  <AccordionItem key={topic.id} value={topic.id}>
                    <Card>
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-lg ${getSeverityColor(topic.severity)}`}>
                              {topic.icon}
                            </div>
                            <div className="text-left">
                              <h3 className="text-lg font-semibold">{topic.title}</h3>
                              <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(topic.severity)}`}>
                                {topic.category}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 transition-transform" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardContent className="px-6 pb-6">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-lg mb-3">Step-by-Step Instructions:</h4>
                              <ol className="space-y-2">
                                {topic.steps.map((step, index) => (
                                  <li key={index} className="flex gap-3">
                                    <span className="bg-health-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                                      {index + 1}
                                    </span>
                                    <span className="text-gray-700">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>

                            {topic.warnings.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-lg mb-3 text-red-800">Important Warnings:</h4>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                  <ul className="space-y-2">
                                    {topic.warnings.map((warning, index) => (
                                      <li key={index} className="flex gap-2 text-red-700">
                                        <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{warning}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <div className="flex gap-3">
                                <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-blue-800">
                                  <strong>Remember:</strong> These instructions are for emergency situations. 
                                  Always seek professional medical help as soon as possible.
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredTopics.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No topics found matching your search.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchTerm("")}
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-yellow-50 border-t border-yellow-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Alert className="bg-yellow-100 border-yellow-300">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important Disclaimer:</strong>
                  <br />
                  This first aid guide provides general information and should not replace proper first aid training 
                  or professional medical advice. We strongly recommend taking a certified first aid course from 
                  organizations like the American Red Cross or American Heart Association. In any emergency, 
                  always call 911 or your local emergency services first.
                </AlertDescription>
              </Alert>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold mb-4">Get Certified in First Aid</h3>
                <p className="text-gray-600 mb-6">
                  Consider taking a hands-on first aid and CPR certification course near you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline">
                    <a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer">
                      American Red Cross
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://www.heart.org" target="_blank" rel="noopener noreferrer">
                      American Heart Association
                    </a>
                  </Button>
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

export default FirstAidPage;