import { Link } from "react-router-dom";
import { ArrowLeft, Zap, ChevronRight, AlertTriangle, Clock, Users, TrendingUp, Shield, Calendar, Apple } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const DigestiveDisordersPage = () => {
  const conditions = [
    {
      name: "GERD (Acid Reflux)",
      description: "Chronic condition where stomach acid flows back into the esophagus",
      prevalence: "20% of US adults",
      riskLevel: "Moderate",
      slug: "gerd"
    },
    {
      name: "Irritable Bowel Syndrome",
      description: "Functional disorder affecting the large intestine",
      prevalence: "10-15% globally",
      riskLevel: "Low",
      slug: "irritable-bowel-syndrome"
    },
    {
      name: "Crohn's Disease",
      description: "Chronic inflammatory disease affecting the digestive tract",
      prevalence: "780,000 Americans",
      riskLevel: "Moderate",
      slug: "crohns-disease"
    },
    {
      name: "Ulcerative Colitis",
      description: "Chronic inflammatory condition affecting the colon and rectum",
      prevalence: "907,000 Americans",
      riskLevel: "Moderate",
      slug: "ulcerative-colitis"
    },
    {
      name: "Peptic Ulcer Disease",
      description: "Open sores that develop on the stomach lining or small intestine",
      prevalence: "4 million Americans",
      riskLevel: "Moderate",
      slug: "peptic-ulcer-disease"
    },
    {
      name: "Gallstones",
      description: "Hardened deposits of digestive fluid in the gallbladder",
      prevalence: "10-15% of US adults",
      riskLevel: "Low",
      slug: "gallstones"
    }
  ];

  const riskFactors = [
    "Poor diet high in processed foods",
    "Obesity or being overweight",
    "Smoking and excessive alcohol use",
    "Chronic stress and anxiety",
    "Sedentary lifestyle",
    "Family history of digestive disorders",
    "Certain medications (NSAIDs, antibiotics)",
    "H. pylori bacterial infection",
    "Age (risk increases with age)",
    "Food allergies and intolerances"
  ];

  const preventionTips = [
    "Eat a high-fiber, balanced diet",
    "Stay hydrated (8-10 glasses water daily)",
    "Exercise regularly to promote digestion",
    "Manage stress through relaxation techniques",
    "Avoid trigger foods (spicy, fatty, acidic)",
    "Eat smaller, more frequent meals",
    "Chew food thoroughly and eat slowly",
    "Limit alcohol and avoid smoking",
    "Maintain a healthy weight",
    "Practice good food safety and hygiene"
  ];

  const emergencySymptoms = [
    "Severe abdominal pain",
    "Persistent vomiting or inability to keep fluids down",
    "Blood in vomit or stool",
    "Signs of severe dehydration",
    "High fever with abdominal pain",
    "Sudden, severe change in bowel habits"
  ];

  const dietaryTips = [
    {
      condition: "GERD",
      foods: {
        avoid: ["Citrus fruits", "Tomatoes", "Spicy foods", "Chocolate", "Caffeine"],
        include: ["Oatmeal", "Bananas", "Lean proteins", "Vegetables", "Non-citrus fruits"]
      }
    },
    {
      condition: "IBS",
      foods: {
        avoid: ["High-FODMAP foods", "Artificial sweeteners", "Fatty foods", "Caffeine", "Alcohol"],
        include: ["Low-FODMAP foods", "Soluble fiber", "Probiotics", "Lean proteins", "Rice"]
      }
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "text-red-600 border-red-200";
      case "Moderate": return "text-orange-600 border-orange-200";
      case "Low": return "text-green-600 border-green-200";
      default: return "text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/diseases" className="text-health-600 hover:underline">Diseases</Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-700">Digestive Disorders</span>
            </div>
            <Button variant="ghost" asChild className="mt-2 p-0 h-auto text-health-600">
              <Link to="/diseases" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Diseases
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 text-yellow-700 p-4 rounded-lg">
                  <Zap className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Digestive Disorders</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="secondary">92 Conditions</Badge>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-200">Gut Health & Digestion</Badge>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Digestive disorders affect the gastrointestinal tract from mouth to anus. Understanding these conditions 
                and maintaining good digestive health is essential for overall wellness and quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">70M</div>
                <div className="text-sm text-gray-600">Americans with digestive diseases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">236K</div>
                <div className="text-sm text-gray-600">Deaths annually from digestive diseases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">$142B</div>
                <div className="text-sm text-gray-600">Annual healthcare costs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">30 ft</div>
                <div className="text-sm text-gray-600">Length of digestive tract</div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Common Conditions */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-yellow-600" />
                  Common Digestive Conditions
                </h2>
                <div className="grid gap-4">
                  {conditions.map((condition, index) => (
                    <Link key={index} to={`/diseases/${condition.slug}`}>
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold text-health-700">{condition.name}</h3>
                            <Badge variant="outline" className={getRiskColor(condition.riskLevel)}>
                              {condition.riskLevel} Risk
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{condition.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Users className="h-4 w-4" />
                              {condition.prevalence}
                            </div>
                            <div className="flex items-center text-health-600 text-sm font-medium">
                              Learn more
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Dietary Guidelines */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Apple className="h-6 w-6 text-yellow-600" />
                  Condition-Specific Dietary Guidelines
                </h2>
                <div className="grid gap-6">
                  {dietaryTips.map((tip, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-health-700">{tip.condition}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-red-700 mb-3">Foods to Avoid</h4>
                            <ul className="space-y-2">
                              {tip.foods.avoid.map((food, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                  <span className="text-gray-700">{food}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-green-700 mb-3">Recommended Foods</h4>
                            <ul className="space-y-2">
                              {tip.foods.include.map((food, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-gray-700">{food}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Risk Factors */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  Risk Factors
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Understanding risk factors can help prevent digestive disorders:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {riskFactors.map((factor, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-700">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Prevention */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  Digestive Health Tips
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Maintain optimal digestive health with these evidence-based strategies:
                    </p>
                    <div className="space-y-3">
                      {preventionTips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Emergency Warning */}
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  <div className="font-medium text-red-800 mb-2">Seek immediate medical care for:</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    {emergencySymptoms.map((symptom, index) => (
                      <li key={index}>• {symptom}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>

              {/* Useful Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Digestive Health Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/tools/symptom-checker" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Symptom Checker</div>
                    <div className="text-sm text-gray-600">Evaluate digestive symptoms</div>
                  </Link>
                  <Link to="/nutrition" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Nutrition Guide</div>
                    <div className="text-sm text-gray-600">Digestive-friendly diet plans</div>
                  </Link>
                  <Link to="/tools/bmi-calculator" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">BMI Calculator</div>
                    <div className="text-sm text-gray-600">Weight management tool</div>
                  </Link>
                </CardContent>
              </Card>

              {/* Healthy Digestion Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Daily Digestive Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Morning</div>
                    <div className="text-sm text-gray-600">Start with warm water and probiotics</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Meals</div>
                    <div className="text-sm text-gray-600">Eat slowly, chew thoroughly</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Hydration</div>
                    <div className="text-sm text-gray-600">8-10 glasses of water daily</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Evening</div>
                    <div className="text-sm text-gray-600">Light dinner 3 hours before bed</div>
                  </div>
                </CardContent>
              </Card>

              {/* Fiber Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Apple className="h-5 w-5" />
                    Daily Fiber Needs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="border-l-4 border-green-200 pl-3">
                    <div className="font-medium text-gray-900">Women</div>
                    <div className="text-sm text-gray-600">25 grams per day</div>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-3">
                    <div className="font-medium text-gray-900">Men</div>
                    <div className="text-sm text-gray-600">38 grams per day</div>
                  </div>
                  <div className="border-l-4 border-purple-200 pl-3">
                    <div className="font-medium text-gray-900">Sources</div>
                    <div className="text-sm text-gray-600">Fruits, vegetables, whole grains, legumes</div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Did You Know?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>Your gut contains 70% of your immune system cells.</p>
                  <p>The gut microbiome contains trillions of beneficial bacteria.</p>
                  <p>Stress can significantly impact digestive health and function.</p>
                  <p>Regular exercise improves gut motility and reduces constipation.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DigestiveDisordersPage;