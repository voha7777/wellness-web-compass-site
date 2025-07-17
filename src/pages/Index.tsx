
import { Activity, Brain, HeartPulse, Utensils, Zap, BedDouble } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SurveyCard from "@/components/SurveyCard";
import HealthTopicCard from "@/components/HealthTopicCard";
import SurveyQuestion from "@/components/SurveyQuestion";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Sample survey question data
  const sampleQuestion = {
    id: "q1",
    questionNumber: 1,
    totalQuestions: 5,
    questionText: "How would you rate your overall health?",
    options: [
      { id: "opt1", text: "Excellent" },
      { id: "opt2", text: "Very Good" },
      { id: "opt3", text: "Good" },
      { id: "opt4", text: "Fair" },
      { id: "opt5", text: "Poor" },
    ],
    onAnswer: (questionId: string, answerId: string) => {
      console.log(`Question ${questionId}, answered with ${answerId}`);
    },
    onNext: () => {
      console.log("Next question");
    },
    isFirstQuestion: true,
  };

  // Featured surveys data
  const featuredSurveys = [
    {
      title: "Mental Health Assessment",
      description: "Evaluate your mental wellbeing with our comprehensive assessment",
      category: "Mental Health",
      timeToComplete: "5 min",
      participants: 125000,
      slug: "mental-health-assessment",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Sleep Quality Check",
      description: "Analyze your sleep patterns and get personalized recommendations",
      category: "Sleep",
      timeToComplete: "3 min",
      participants: 89000,
      slug: "sleep-quality-check",
      imageSrc: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Nutrition Habits",
      description: "Discover how your eating habits impact your overall health",
      category: "Nutrition",
      timeToComplete: "7 min",
      participants: 103000,
      slug: "nutrition-habits",
      imageSrc: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Health topics data
  const healthTopics = [
    {
      title: "Physical Activity",
      description: "Discover the right exercise regimen for your body type and goals",
      icon: <Activity className="h-6 w-6" />,
      slug: "physical-activity",
      color: "bg-health-50 text-health-700",
    },
    {
      title: "Mental Wellness",
      description: "Tools and resources to maintain and improve your mental health",
      icon: <Brain className="h-6 w-6" />,
      slug: "mental-wellness",
      color: "bg-medGreen-50 text-medGreen-700",
    },
    {
      title: "Heart Health",
      description: "Understanding cardiovascular health and prevention strategies",
      icon: <HeartPulse className="h-6 w-6" />,
      slug: "heart-health",
      color: "bg-red-50 text-red-700",
    },
    {
      title: "Nutrition",
      description: "Learn about balanced diets and proper nutritional habits",
      icon: <Utensils className="h-6 w-6" />,
      slug: "nutrition",
      color: "bg-amber-50 text-amber-700",
    },
    {
      title: "Energy & Vitality",
      description: "Boost your energy levels and overall vitality naturally",
      icon: <Zap className="h-6 w-6" />,
      slug: "energy-vitality",
      color: "bg-yellow-50 text-yellow-700",
    },
    {
      title: "Sleep Science",
      description: "The importance of sleep and how to improve sleep quality",
      icon: <BedDouble className="h-6 w-6" />,
      slug: "sleep-science",
      color: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Surveys Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Featured Health Surveys</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our expertly designed health assessments provide personalized insights to help you understand and improve your well-being.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredSurveys.map((survey, index) => (
                <SurveyCard key={index} {...survey} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="bg-health-600 hover:bg-health-700">
                <Link to="/surveys">View All Surveys</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Try a Sample Question Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Try a Sample Question</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our surveys are designed to be intuitive and easy to complete. Here's an example of what you can expect.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <SurveyQuestion {...sampleQuestion} />
            </div>
          </div>
        </section>
        
        {/* Health Topics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Explore Health Topics</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our comprehensive library of health topics curated by medical experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthTopics.map((topic, index) => (
                <HealthTopicCard key={index} {...topic} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-health-200 text-health-700 hover:bg-health-50">
                <Link to="/topics">Browse All Topics</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-health-600 to-medGreen-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Start with a personalized health assessment today and receive expert recommendations tailored to your needs.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-health-700 hover:bg-gray-100"
              asChild
            >
              <Link to="/surveys">Take Your First Survey</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
