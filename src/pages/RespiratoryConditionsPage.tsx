import { Link } from "react-router-dom";
import { ArrowLeft, Activity, ChevronRight, AlertTriangle, Clock, Users, TrendingUp, Shield, Calendar, Wind } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const RespiratoryConditionsPage = () => {
  const conditions = [
    {
      name: "Asthma",
      description: "Chronic condition causing airways to narrow, swell, and produce extra mucus",
      prevalence: "25 million Americans",
      riskLevel: "Moderate",
      slug: "asthma"
    },
    {
      name: "COPD",
      description: "Chronic obstructive pulmonary disease causing airflow blockage",
      prevalence: "16 million Americans",
      riskLevel: "High",
      slug: "copd"
    },
    {
      name: "Pneumonia",
      description: "Infection that inflames air sacs in one or both lungs",
      prevalence: "1 million hospitalizations/year",
      riskLevel: "Moderate",
      slug: "pneumonia"
    },
    {
      name: "Sleep Apnea",
      description: "Breathing repeatedly stops and starts during sleep",
      prevalence: "22 million Americans",
      riskLevel: "Moderate",
      slug: "sleep-apnea"
    },
    {
      name: "Lung Cancer",
      description: "Cancer that begins in the lungs and may spread to other parts",
      prevalence: "228,000 new cases/year",
      riskLevel: "High",
      slug: "lung-cancer"
    },
    {
      name: "Bronchitis",
      description: "Inflammation of the lining of bronchial tubes carrying air to lungs",
      prevalence: "9 million adults",
      riskLevel: "Low",
      slug: "bronchitis"
    }
  ];

  const riskFactors = [
    "Smoking or secondhand smoke exposure",
    "Air pollution and environmental toxins",
    "Occupational exposures (asbestos, chemicals)",
    "Family history of respiratory disease",
    "Frequent respiratory infections",
    "Allergies and asthma",
    "Age (risk increases with age)",
    "Weakened immune system",
    "Gastroesophageal reflux disease (GERD)",
    "Obesity"
  ];

  const preventionTips = [
    "Don't smoke and avoid secondhand smoke",
    "Get vaccinated (flu, pneumonia, COVID-19)",
    "Wash hands frequently to prevent infections",
    "Exercise regularly to strengthen lungs",
    "Maintain good indoor air quality",
    "Use protective equipment at work",
    "Manage allergies and asthma properly",
    "Practice good posture for better breathing",
    "Stay hydrated to keep airways moist",
    "Get regular health screenings"
  ];

  const emergencySignsAsthma = [
    "Severe difficulty breathing or wheezing",
    "Inability to speak in full sentences",
    "Blue lips or face (cyanosis)",
    "Chest retractions when breathing",
    "Peak flow meter reading in red zone"
  ];

  const emergencySignsCOPD = [
    "Severe shortness of breath",
    "Bluish fingernails or lips",
    "Mental confusion or drowsiness",
    "Rapid, shallow breathing",
    "Fever with worsening symptoms"
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
              <span className="text-gray-700">Respiratory Conditions</span>
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
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-lg">
                  <Activity className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Respiratory Conditions</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="secondary">78 Conditions</Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">Breathing & Lung Health</Badge>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Respiratory conditions affect the lungs and breathing system. Understanding these conditions, their symptoms, 
                and proper management is crucial for maintaining optimal lung health and quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">37M+</div>
                <div className="text-sm text-gray-600">Americans with lung disease</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3rd</div>
                <div className="text-sm text-gray-600">Leading cause of death</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">90%</div>
                <div className="text-sm text-gray-600">Of COPD cases from smoking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">20,000</div>
                <div className="text-sm text-gray-600">Breaths per day (average)</div>
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
                  <Activity className="h-6 w-6 text-blue-600" />
                  Common Respiratory Conditions
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
                      Understanding and avoiding risk factors is key to preventing respiratory diseases:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {riskFactors.map((factor, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
                  Lung Health & Prevention
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Protect your lungs and maintain respiratory health with these strategies:
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
              {/* Emergency Warning - Asthma */}
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  <div className="font-medium text-red-800 mb-2">ASTHMA EMERGENCY - Call 911 for:</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    {emergencySignsAsthma.map((sign, index) => (
                      <li key={index}>• {sign}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>

              {/* Emergency Warning - COPD */}
              <Alert className="border-orange-200 bg-orange-50">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertDescription>
                  <div className="font-medium text-orange-800 mb-2">COPD EXACERBATION - Seek immediate care for:</div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    {emergencySignsCOPD.map((sign, index) => (
                      <li key={index}>• {sign}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>

              {/* Useful Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Respiratory Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/tools/symptom-checker" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Symptom Checker</div>
                    <div className="text-sm text-gray-600">Evaluate breathing symptoms</div>
                  </Link>
                  <Link to="/tools/first-aid" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Asthma Action Plan</div>
                    <div className="text-sm text-gray-600">Emergency response guide</div>
                  </Link>
                  <Link to="/medications" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Inhaler Guide</div>
                    <div className="text-sm text-gray-600">Proper inhaler techniques</div>
                  </Link>
                </CardContent>
              </Card>

              {/* Breathing Exercises */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wind className="h-5 w-5" />
                    Breathing Exercises
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Diaphragmatic Breathing</div>
                    <div className="text-sm text-gray-600">Deep breathing using the diaphragm</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Pursed Lip Breathing</div>
                    <div className="text-sm text-gray-600">Helps with shortness of breath</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Box Breathing</div>
                    <div className="text-sm text-gray-600">4-4-4-4 breathing pattern</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Coordinated Breathing</div>
                    <div className="text-sm text-gray-600">Breathing with physical activity</div>
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
                  <p>Your lungs contain about 300-500 million air sacs called alveoli.</p>
                  <p>The total surface area of your lungs is roughly the size of a tennis court.</p>
                  <p>You breathe about 20,000 times per day without thinking about it.</p>
                  <p>Regular exercise can increase lung capacity by up to 15%.</p>
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

export default RespiratoryConditionsPage;