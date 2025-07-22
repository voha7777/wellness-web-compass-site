import { Link } from "react-router-dom";
import { ArrowLeft, Heart, ChevronRight, AlertTriangle, Clock, Users, TrendingUp, Shield, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const CardiovascularDiseasesPage = () => {
  const conditions = [
    {
      name: "Hypertension",
      description: "High blood pressure that strains the cardiovascular system",
      prevalence: "47% of adults",
      riskLevel: "High",
      slug: "hypertension"
    },
    {
      name: "Coronary Artery Disease",
      description: "Narrowing of coronary arteries due to plaque buildup",
      prevalence: "6.7% of adults",
      riskLevel: "High",
      slug: "coronary-artery-disease"
    },
    {
      name: "Heart Failure",
      description: "Heart cannot pump blood effectively to meet body's needs",
      prevalence: "2.2% of adults",
      riskLevel: "High",
      slug: "heart-failure"
    },
    {
      name: "Atrial Fibrillation",
      description: "Irregular and often rapid heart rhythm disorder",
      prevalence: "2.7-6.1 million",
      riskLevel: "Moderate",
      slug: "atrial-fibrillation"
    },
    {
      name: "Stroke",
      description: "Blood flow to part of the brain is blocked or reduced",
      prevalence: "795,000 annually",
      riskLevel: "High",
      slug: "stroke"
    },
    {
      name: "Peripheral Artery Disease",
      description: "Narrowed arteries reduce blood flow to limbs",
      prevalence: "6.5 million adults",
      riskLevel: "Moderate",
      slug: "peripheral-artery-disease"
    }
  ];

  const riskFactors = [
    "High blood pressure",
    "High cholesterol",
    "Smoking",
    "Diabetes",
    "Obesity",
    "Physical inactivity",
    "Poor diet",
    "Excessive alcohol",
    "Stress",
    "Family history"
  ];

  const preventionTips = [
    "Maintain healthy blood pressure (below 120/80)",
    "Keep cholesterol levels in check",
    "Exercise regularly (150 minutes/week)",
    "Eat a heart-healthy diet",
    "Maintain healthy weight",
    "Don't smoke or quit smoking",
    "Limit alcohol consumption",
    "Manage stress effectively",
    "Get adequate sleep (7-9 hours)",
    "Regular health screenings"
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
              <span className="text-gray-700">Cardiovascular Diseases</span>
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
        <section className="bg-gradient-to-r from-red-50 to-red-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 text-red-700 p-4 rounded-lg">
                  <Heart className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Cardiovascular Diseases</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="secondary">156 Conditions</Badge>
                    <Badge variant="outline" className="text-red-600 border-red-200">Leading Cause of Death</Badge>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Cardiovascular diseases affect the heart and blood vessels, representing the leading cause of death globally. 
                Early detection, proper management, and lifestyle modifications can significantly reduce risks and improve outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">655,000</div>
                <div className="text-sm text-gray-600">Deaths annually in US</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1 in 4</div>
                <div className="text-sm text-gray-600">Deaths from heart disease</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">80%</div>
                <div className="text-sm text-gray-600">Preventable cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$207B</div>
                <div className="text-sm text-gray-600">Annual healthcare costs</div>
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
                  <Heart className="h-6 w-6 text-red-600" />
                  Common Cardiovascular Conditions
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
                      Understanding and managing risk factors is crucial for preventing cardiovascular disease:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {riskFactors.map((factor, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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
                  Prevention Strategies
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Most cardiovascular diseases can be prevented through lifestyle modifications:
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
                  <div className="font-medium text-red-800 mb-2">Call 911 immediately if you experience:</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Chest pain or pressure</li>
                    <li>• Shortness of breath</li>
                    <li>• Sudden severe headache</li>
                    <li>• Sudden weakness or numbness</li>
                    <li>• Loss of consciousness</li>
                  </ul>
                </AlertDescription>
              </Alert>

              {/* Useful Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Useful Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/tools/heart-health-assessment" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Heart Health Assessment</div>
                    <div className="text-sm text-gray-600">Evaluate your cardiovascular risk</div>
                  </Link>
                  <Link to="/tools/heart-rate-calculator" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Heart Rate Calculator</div>
                    <div className="text-sm text-gray-600">Calculate target heart rate zones</div>
                  </Link>
                  <Link to="/tools/bmi-calculator" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">BMI Calculator</div>
                    <div className="text-sm text-gray-600">Assess weight-related risk factors</div>
                  </Link>
                </CardContent>
              </Card>

              {/* Screening Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Screening Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Blood Pressure</div>
                    <div className="text-sm text-gray-600">Every 2 years (normal), annually (elevated)</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Cholesterol</div>
                    <div className="text-sm text-gray-600">Every 5 years starting at age 20</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">EKG</div>
                    <div className="text-sm text-gray-600">Baseline at age 40, then as recommended</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Stress Test</div>
                    <div className="text-sm text-gray-600">As recommended by physician</div>
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
                  <p>Heart disease is the leading cause of death for both men and women globally.</p>
                  <p>Someone in the US has a heart attack every 40 seconds.</p>
                  <p>Regular exercise can reduce heart disease risk by up to 35%.</p>
                  <p>The Mediterranean diet has been shown to reduce cardiovascular events by 30%.</p>
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

export default CardiovascularDiseasesPage;