import { Link } from "react-router-dom";
import { ArrowLeft, Brain, ChevronRight, AlertTriangle, Clock, Users, TrendingUp, Shield, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const NeurologicalDisordersPage = () => {
  const conditions = [
    {
      name: "Migraine",
      description: "Severe headaches often accompanied by nausea and light sensitivity",
      prevalence: "39 million Americans",
      riskLevel: "Moderate",
      slug: "migraine"
    },
    {
      name: "Alzheimer's Disease",
      description: "Progressive brain disorder that destroys memory and cognitive function",
      prevalence: "6.5 million Americans",
      riskLevel: "High",
      slug: "alzheimers-disease"
    },
    {
      name: "Epilepsy",
      description: "Neurological disorder characterized by recurrent seizures",
      prevalence: "3.4 million Americans",
      riskLevel: "Moderate",
      slug: "epilepsy"
    },
    {
      name: "Parkinson's Disease",
      description: "Progressive disorder affecting movement, balance, and coordination",
      prevalence: "1 million Americans",
      riskLevel: "Moderate",
      slug: "parkinsons-disease"
    },
    {
      name: "Multiple Sclerosis",
      description: "Autoimmune disease affecting the central nervous system",
      prevalence: "1 million Americans",
      riskLevel: "Moderate",
      slug: "multiple-sclerosis"
    },
    {
      name: "Stroke",
      description: "Interruption of blood supply to part of the brain",
      prevalence: "795,000 annually",
      riskLevel: "High",
      slug: "stroke"
    }
  ];

  const riskFactors = [
    "Age (risk increases with age)",
    "Family history of neurological conditions",
    "Head injuries or trauma",
    "Infections affecting the brain",
    "Exposure to toxins or chemicals",
    "Chronic stress",
    "Poor sleep patterns",
    "Substance abuse",
    "Cardiovascular disease",
    "Autoimmune disorders"
  ];

  const preventionTips = [
    "Protect your head from injuries (wear helmets)",
    "Maintain cardiovascular health",
    "Get adequate sleep (7-9 hours nightly)",
    "Engage in regular mental exercises",
    "Stay physically active",
    "Eat a brain-healthy diet rich in omega-3s",
    "Manage stress through relaxation techniques",
    "Limit alcohol consumption",
    "Don't smoke or quit smoking",
    "Stay socially active and engaged"
  ];

  const warningSignsStroke = [
    "Sudden numbness or weakness (face, arm, leg)",
    "Sudden confusion or trouble speaking",
    "Sudden trouble seeing",
    "Sudden severe headache",
    "Sudden trouble walking or loss of coordination"
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
              <span className="text-gray-700">Neurological Disorders</span>
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
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 text-purple-700 p-4 rounded-lg">
                  <Brain className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Neurological Disorders</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="secondary">89 Conditions</Badge>
                    <Badge variant="outline" className="text-purple-600 border-purple-200">Complex Conditions</Badge>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Neurological disorders affect the brain, spinal cord, and nervous system. Understanding symptoms, 
                risk factors, and treatment options is essential for managing these complex conditions effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50M+</div>
                <div className="text-sm text-gray-600">Americans affected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">600+</div>
                <div className="text-sm text-gray-600">Known neurological disorders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">6.2M</div>
                <div className="text-sm text-gray-600">Deaths annually worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$800B</div>
                <div className="text-sm text-gray-600">Annual global healthcare costs</div>
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
                  <Brain className="h-6 w-6 text-purple-600" />
                  Common Neurological Conditions
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

              {/* Risk Factors */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  Risk Factors
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      While some neurological disorders cannot be prevented, understanding risk factors can help with early detection:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {riskFactors.map((factor, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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
                  Brain Health & Prevention
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Maintaining brain health can reduce the risk of some neurological conditions:
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
              {/* Emergency Warning - Stroke */}
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  <div className="font-medium text-red-800 mb-2">STROKE - Call 911 immediately for:</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    {warningSignsStroke.map((sign, index) => (
                      <li key={index}>• {sign}</li>
                    ))}
                  </ul>
                  <div className="text-xs text-red-600 mt-2 font-medium">Remember: Time = Brain</div>
                </AlertDescription>
              </Alert>

              {/* Useful Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Assessment Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/tools/depression-test" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Depression Screening</div>
                    <div className="text-sm text-gray-600">Mental health assessment tool</div>
                  </Link>
                  <Link to="/tools/symptom-checker" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Symptom Checker</div>
                    <div className="text-sm text-gray-600">Evaluate neurological symptoms</div>
                  </Link>
                  <Link to="/tools/first-aid" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Seizure First Aid</div>
                    <div className="text-sm text-gray-600">Emergency response guide</div>
                  </Link>
                </CardContent>
              </Card>

              {/* Brain Health Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Daily Brain Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Mental Exercises</div>
                    <div className="text-sm text-gray-600">Puzzles, reading, learning new skills</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Physical Exercise</div>
                    <div className="text-sm text-gray-600">30 minutes daily improves brain function</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Social Interaction</div>
                    <div className="text-sm text-gray-600">Regular social activities protect cognitive health</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Quality Sleep</div>
                    <div className="text-sm text-gray-600">7-9 hours for optimal brain health</div>
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
                  <p>The brain uses about 20% of the body's total energy despite being only 2% of body weight.</p>
                  <p>Neuroplasticity allows the brain to reorganize and form new connections throughout life.</p>
                  <p>Early diagnosis can significantly improve outcomes for many neurological conditions.</p>
                  <p>Regular exercise increases brain-derived neurotrophic factor (BDNF), promoting brain health.</p>
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

export default NeurologicalDisordersPage;