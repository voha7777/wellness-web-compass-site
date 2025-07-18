import { useState } from "react";
import { Search, Heart, Utensils, TrendingUp, Calculator, Apple, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NutritionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const nutritionTopics = [
    {
      title: "Heart-Healthy Diet",
      description: "Foods and eating patterns that support cardiovascular health",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-red-50 text-red-700",
      articles: 45,
      slug: "heart-healthy-diet"
    },
    {
      title: "Weight Management",
      description: "Sustainable approaches to healthy weight loss and maintenance",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-blue-50 text-blue-700",
      articles: 67,
      slug: "weight-management"
    },
    {
      title: "Diabetes Nutrition",
      description: "Dietary strategies for managing blood sugar levels",
      icon: <Apple className="h-8 w-8" />,
      color: "bg-green-50 text-green-700",
      articles: 38,
      slug: "diabetes-nutrition"
    },
    {
      title: "Sports Nutrition",
      description: "Fueling your body for optimal athletic performance",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-orange-50 text-orange-700",
      articles: 29,
      slug: "sports-nutrition"
    },
    {
      title: "Hydration",
      description: "The importance of proper hydration for health",
      icon: <Droplets className="h-8 w-8" />,
      color: "bg-cyan-50 text-cyan-700",
      articles: 22,
      slug: "hydration"
    },
    {
      title: "Child Nutrition",
      description: "Healthy eating habits for growing children",
      icon: <Apple className="h-8 w-8" />,
      color: "bg-purple-50 text-purple-700",
      articles: 34,
      slug: "child-nutrition"
    }
  ];

  const featuredArticles = [
    {
      title: "The Mediterranean Diet: A Complete Guide",
      excerpt: "Discover the science-backed benefits of Mediterranean eating patterns for heart health, brain function, and longevity.",
      author: "Dr. Maria Gonzalez, Nutritionist",
      date: "2024-01-16",
      readTime: "10 min read",
      category: "Heart Health",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
      slug: "mediterranean-diet-guide"
    },
    {
      title: "Intermittent Fasting: Benefits and Best Practices",
      excerpt: "Evidence-based look at different fasting protocols and their effects on metabolism, weight loss, and cellular health.",
      author: "Dr. James Wilson, Endocrinologist",
      date: "2024-01-14",
      readTime: "12 min read",
      category: "Weight Management",
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=600&h=400&fit=crop",
      slug: "intermittent-fasting-guide"
    },
    {
      title: "Plant-Based Proteins: Complete Nutrition Guide",
      excerpt: "How to get all essential amino acids from plant sources and build a balanced vegetarian or vegan diet.",
      author: "Dr. Sarah Chen, Clinical Nutritionist",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "Plant-Based",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
      slug: "plant-based-proteins"
    }
  ];

  const nutritionTools = [
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index and get personalized recommendations",
      icon: <Calculator className="h-6 w-6" />,
      link: "/tools/bmi-calculator"
    },
    {
      title: "Calorie Calculator",
      description: "Determine your daily caloric needs based on activity level",
      icon: <Calculator className="h-6 w-6" />,
      link: "/tools/calorie-calculator"
    },
    {
      title: "Meal Planner",
      description: "Plan balanced meals for the week with nutritional information",
      icon: <Utensils className="h-6 w-6" />,
      link: "/tools/meal-planner"
    },
    {
      title: "Water Tracker",
      description: "Track your daily water intake and stay hydrated",
      icon: <Droplets className="h-6 w-6" />,
      link: "/tools/water-tracker"
    }
  ];

  const quickTips = [
    {
      tip: "Eat a rainbow of fruits and vegetables",
      description: "Different colored foods provide different nutrients and antioxidants"
    },
    {
      tip: "Practice portion control",
      description: "Use your hand as a guide: palm for proteins, fist for vegetables"
    },
    {
      tip: "Stay hydrated",
      description: "Aim for 8 glasses of water daily, more if you're active"
    },
    {
      tip: "Read nutrition labels",
      description: "Focus on fiber, protein, and limit added sugars and sodium"
    },
    {
      tip: "Plan your meals",
      description: "Meal planning helps ensure balanced nutrition and saves time"
    },
    {
      tip: "Don't skip breakfast",
      description: "A healthy breakfast kickstarts your metabolism for the day"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-600 to-health-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Nutrition & Healthy Eating</h1>
              <p className="text-xl mb-8 opacity-90">
                Evidence-based nutrition information to help you make informed food choices
              </p>
              
              {/* Search */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search nutrition topics, foods, or recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 text-gray-900 bg-white border-0 focus-visible:ring-2 focus-visible:ring-white"
                  />
                  <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-health-600 hover:bg-health-700">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="py-8 bg-health-50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 text-center">Daily Nutrition Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickTips.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-health-700 mb-2">{item.tip}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition Topics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Nutrition Topics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nutritionTopics.map((topic, index) => (
                <Link key={index} to={`/nutrition/${topic.slug}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className={`${topic.color} p-4 rounded-lg inline-block mx-auto mb-4`}>
                        {topic.icon}
                      </div>
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {topic.articles} articles
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Nutrition Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <Link key={index} to={`/articles/nutrition/${article.slug}`}>
                  <Card className="hover:shadow-md transition-shadow h-full overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {article.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-3 text-health-700 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {article.date}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Calculators */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Nutrition Tools & Calculators</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nutritionTools.map((tool, index) => (
                <Link key={index} to={tool.link}>
                  <Card className="hover:shadow-md transition-shadow text-center p-6">
                    <div className="bg-health-50 text-health-600 p-3 rounded-lg inline-block mb-4">
                      {tool.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{tool.title}</h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition by Condition */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Nutrition for Health Conditions</h2>
            
            <Tabs defaultValue="diabetes" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="diabetes">Diabetes</TabsTrigger>
                <TabsTrigger value="heart">Heart Disease</TabsTrigger>
                <TabsTrigger value="kidney">Kidney Disease</TabsTrigger>
                <TabsTrigger value="digestive">Digestive Issues</TabsTrigger>
              </TabsList>
              
              <TabsContent value="diabetes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Diabetes Nutrition Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Principles:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Monitor carbohydrate intake and timing</li>
                          <li>• Choose complex carbohydrates over simple sugars</li>
                          <li>• Include lean proteins with each meal</li>
                          <li>• Eat regular, consistent meals</li>
                          <li>• Focus on high-fiber foods</li>
                        </ul>
                      </div>
                      <Button asChild>
                        <Link to="/nutrition/diabetes-nutrition">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="heart" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Heart-Healthy Nutrition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Principles:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Limit saturated and trans fats</li>
                          <li>• Increase omega-3 fatty acids</li>
                          <li>• Reduce sodium intake</li>
                          <li>• Eat plenty of fruits and vegetables</li>
                          <li>• Choose whole grains over refined</li>
                        </ul>
                      </div>
                      <Button asChild>
                        <Link to="/nutrition/heart-healthy-diet">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="kidney" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Kidney-Friendly Nutrition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Principles:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Control protein intake</li>
                          <li>• Limit phosphorus and potassium</li>
                          <li>• Monitor fluid intake</li>
                          <li>• Reduce sodium consumption</li>
                          <li>• Work with a renal dietitian</li>
                        </ul>
                      </div>
                      <Button asChild>
                        <Link to="/nutrition/kidney-diet">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="digestive" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Digestive Health Nutrition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Key Principles:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Increase fiber gradually</li>
                          <li>• Stay hydrated</li>
                          <li>• Include probiotic foods</li>
                          <li>• Identify trigger foods</li>
                          <li>• Eat smaller, frequent meals</li>
                        </ul>
                      </div>
                      <Button asChild>
                        <Link to="/nutrition/digestive-health">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NutritionPage;