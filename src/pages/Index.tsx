import { Link } from "react-router-dom";
import { 
  Activity, Brain, HeartPulse, Utensils, 
  PlusCircle, BookOpen, Pill, Thermometer, 
  BarChart3, Stethoscope, Microscope, Clipboard
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Index = () => {
  // Featured articles data
  const featuredArticles = [
    {
      title: "10 Ways to Improve Your Heart Health",
      category: "Heart Health",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/articles/heart-health/improve-heart-health",
    },
    {
      title: "Understanding Diabetes: Symptoms and Treatment",
      category: "Chronic Conditions",
      imageSrc: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/articles/chronic-conditions/understanding-diabetes",
    },
    {
      title: "The Link Between Diet and Mental Health",
      category: "Mental Health",
      imageSrc: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/articles/mental-health/diet-mental-health",
    },
    {
      title: "Common Cold vs. Flu: How to Tell the Difference",
      category: "Cold & Flu",
      imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/articles/cold-flu/cold-vs-flu",
    },
  ];

  // Top medications data
  const topMedications = [
    { name: "Lisinopril", condition: "High Blood Pressure", slug: "/medications/lisinopril" },
    { name: "Atorvastatin", condition: "High Cholesterol", slug: "/medications/atorvastatin" },
    { name: "Metformin", condition: "Type 2 Diabetes", slug: "/medications/metformin" },
    { name: "Levothyroxine", condition: "Hypothyroidism", slug: "/medications/levothyroxine" },
    { name: "Albuterol", condition: "Asthma", slug: "/medications/albuterol" },
    { name: "Omeprazole", condition: "Heartburn", slug: "/medications/omeprazole" },
  ];

  // Common conditions data
  const commonConditions = [
    { name: "Hypertension", description: "High blood pressure", slug: "/diseases/hypertension" },
    { name: "Type 2 Diabetes", description: "Blood sugar disorder", slug: "/diseases/diabetes-type-2" },
    { name: "Depression", description: "Mood disorder", slug: "/diseases/depression" },
    { name: "Arthritis", description: "Joint inflammation", slug: "/diseases/arthritis" },
    { name: "Migraine", description: "Severe headache", slug: "/diseases/migraine" },
    { name: "Asthma", description: "Breathing condition", slug: "/diseases/asthma" },
  ];

  // Health tools data
  const healthTools = [
    { title: "BMI Calculator", icon: <BarChart3 className="h-6 w-6" />, slug: "/tools/bmi-calculator" },
    { title: "Symptom Checker", icon: <Stethoscope className="h-6 w-6" />, slug: "/tools/symptom-checker" },
    { title: "Drug Interaction Tool", icon: <Pill className="h-6 w-6" />, slug: "/tools/drug-interactions" },
    { title: "Health Assessment", icon: <Clipboard className="h-6 w-6" />, slug: "/surveys/health-assessment" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Articles Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Health Articles</h2>
              <Link to="/articles" className="text-health-600 hover:text-health-700 text-sm font-medium flex items-center">
                View All Articles
                <PlusCircle className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredArticles.map((article, index) => (
                <Link to={article.slug} key={index} className="group">
                  <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.imageSrc} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs font-medium text-health-600 mb-1">{article.category}</div>
                      <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-health-600 transition-colors">{article.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Health Tools Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Health Tools & Assessments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {healthTools.map((tool, index) => (
                <Link to={tool.slug} key={index}>
                  <Card className="h-full hover:shadow-md transition-shadow border-transparent hover:border-health-200">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                      <div className="h-12 w-12 rounded-full bg-health-50 flex items-center justify-center mb-4 text-health-600">
                        {tool.icon}
                      </div>
                      <h3 className="font-medium text-gray-900">{tool.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Conditions & Medications Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Common Conditions */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Common Health Conditions</h2>
                  <Link to="/diseases/all" className="text-health-600 hover:text-health-700 text-sm font-medium flex items-center">
                    View All
                    <PlusCircle className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  {commonConditions.map((condition, index) => (
                    <Link 
                      key={index}
                      to={condition.slug}
                      className={`flex items-center p-4 hover:bg-gray-50 transition-colors ${
                        index !== commonConditions.length - 1 ? 'border-b' : ''
                      }`}
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{condition.name}</h3>
                        <p className="text-sm text-gray-500">{condition.description}</p>
                      </div>
                      <div className="text-health-600">
                        <Microscope className="h-5 w-5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Top Medications */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Popular Medications</h2>
                  <Link to="/medications/index" className="text-health-600 hover:text-health-700 text-sm font-medium flex items-center">
                    Drug Index
                    <PlusCircle className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  {topMedications.map((medication, index) => (
                    <Link 
                      key={index}
                      to={medication.slug}
                      className={`flex items-center p-4 hover:bg-gray-50 transition-colors ${
                        index !== topMedications.length - 1 ? 'border-b' : ''
                      }`}
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{medication.name}</h3>
                        <p className="text-sm text-gray-500">For {medication.condition}</p>
                      </div>
                      <div className="text-health-600">
                        <Pill className="h-5 w-5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Health Topics Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-4">Explore Health Topics</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our comprehensive library of health topics curated by medical experts.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link to="/topics/fitness" className="group">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-health-50 flex items-center justify-center text-health-600 group-hover:bg-health-100 transition-colors">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900">Fitness</h3>
                </div>
              </Link>
              
              <Link to="/topics/nutrition" className="group">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-health-50 flex items-center justify-center text-health-600 group-hover:bg-health-100 transition-colors">
                    <Utensils className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900">Nutrition</h3>
                </div>
              </Link>
              
              <Link to="/topics/mental-health" className="group">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-health-50 flex items-center justify-center text-health-600 group-hover:bg-health-100 transition-colors">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900">Mental Health</h3>
                </div>
              </Link>
              
              <Link to="/topics/heart-health" className="group">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-health-50 flex items-center justify-center text-health-600 group-hover:bg-health-100 transition-colors">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900">Heart Health</h3>
                </div>
              </Link>
              
              <Link to="/topics/medications" className="group">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-health-50 flex items-center justify-center text-health-600 group-hover:bg-health-100 transition-colors">
                    <Pill className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900">Medications</h3>
                </div>
              </Link>
              
              <Link to="/topics/conditions" className="group">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-health-50 flex items-center justify-center text-health-600 group-hover:bg-health-100 transition-colors">
                    <Thermometer className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900">Conditions</h3>
                </div>
              </Link>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="border-health-200 text-health-700 hover:bg-health-50">
                <Link to="/topics">View All Health Topics</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-health-600 to-health-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Informed About Your Health</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter for the latest health news, articles, and expert advice.
            </p>
            <div className="max-w-md mx-auto flex">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/90 border-0 focus-visible:ring-2 focus-visible:ring-white"
              />
              <Button className="ml-2 bg-white text-health-700 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
