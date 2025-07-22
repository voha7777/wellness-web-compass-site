import { Link } from "react-router-dom";
import { ArrowLeft, Thermometer, ChevronRight, AlertTriangle, Clock, Users, TrendingUp, Shield, Calendar, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const InfectiousDiseasesPage = () => {
  const conditions = [
    {
      name: "COVID-19",
      description: "Respiratory illness caused by SARS-CoV-2 coronavirus",
      prevalence: "103M+ US cases",
      riskLevel: "Moderate",
      slug: "covid-19"
    },
    {
      name: "Influenza (Flu)",
      description: "Viral infection that attacks respiratory system",
      prevalence: "35M cases annually",
      riskLevel: "Moderate",
      slug: "influenza"
    },
    {
      name: "Common Cold",
      description: "Viral infection of upper respiratory tract",
      prevalence: "1B cases annually",
      riskLevel: "Low",
      slug: "common-cold"
    },
    {
      name: "Pneumonia",
      description: "Infection that inflames air sacs in lungs",
      prevalence: "1M hospitalizations/year",
      riskLevel: "High",
      slug: "pneumonia"
    },
    {
      name: "Urinary Tract Infection",
      description: "Bacterial infection in any part of urinary system",
      prevalence: "8M cases annually",
      riskLevel: "Low",
      slug: "urinary-tract-infection"
    },
    {
      name: "Hepatitis",
      description: "Inflammation of the liver, often caused by viruses",
      prevalence: "4.4M with chronic hepatitis",
      riskLevel: "Moderate",
      slug: "hepatitis"
    }
  ];

  const preventionTips = [
    "Wash hands frequently with soap and water",
    "Use alcohol-based hand sanitizer when soap unavailable",
    "Avoid touching face, eyes, nose, and mouth",
    "Cover cough and sneeze with elbow or tissue",
    "Stay home when sick to prevent spread",
    "Get recommended vaccinations",
    "Practice safe food handling and preparation",
    "Avoid close contact with sick individuals",
    "Clean and disinfect frequently touched surfaces",
    "Practice safe sexual behaviors"
  ];

  const vaccinationSchedule = [
    { vaccine: "COVID-19", schedule: "Annual booster recommended" },
    { vaccine: "Influenza", schedule: "Annual vaccination" },
    { vaccine: "Hepatitis A", schedule: "2 doses, 6 months apart" },
    { vaccine: "Hepatitis B", schedule: "3 doses over 6 months" },
    { vaccine: "HPV", schedule: "2-3 doses (ages 9-26)" },
    { vaccine: "Meningococcal", schedule: "1-2 doses (ages 16-23)" }
  ];

  const warningSignsInfection = [
    "High fever (over 103°F/39.4°C)",
    "Difficulty breathing or shortness of breath",
    "Persistent vomiting or severe dehydration",
    "Severe headache with stiff neck",
    "Confusion or altered mental state",
    "Severe abdominal pain",
    "Signs of sepsis (rapid heart rate, low blood pressure)"
  ];

  const commonTransmissionModes = [
    {
      mode: "Respiratory Droplets",
      description: "Coughing, sneezing, talking",
      diseases: ["COVID-19", "Flu", "Common Cold"]
    },
    {
      mode: "Direct Contact",
      description: "Touching infected surfaces or people",
      diseases: ["Skin infections", "Eye infections"]
    },
    {
      mode: "Foodborne",
      description: "Contaminated food or water",
      diseases: ["Food poisoning", "Hepatitis A"]
    },
    {
      mode: "Vector-borne",
      description: "Insect or animal bites",
      diseases: ["Lyme disease", "Malaria"]
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
              <span className="text-gray-700">Infectious Diseases</span>
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
        <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-100 text-orange-700 p-4 rounded-lg">
                  <Thermometer className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Infectious Diseases</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="secondary">134 Conditions</Badge>
                    <Badge variant="outline" className="text-orange-600 border-orange-200">Preventable Conditions</Badge>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Infectious diseases are caused by bacteria, viruses, fungi, or parasites. Understanding transmission, 
                prevention, and treatment is crucial for protecting yourself and your community.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15M+</div>
                <div className="text-sm text-gray-600">Global deaths annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">1.4M</div>
                <div className="text-sm text-gray-600">US healthcare-associated infections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50%+</div>
                <div className="text-sm text-gray-600">Preventable through vaccination</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">20 sec</div>
                <div className="text-sm text-gray-600">Hand washing time needed</div>
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
                  <Thermometer className="h-6 w-6 text-orange-600" />
                  Common Infectious Diseases
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

              {/* Transmission Modes */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-orange-600" />
                  How Infections Spread
                </h2>
                <div className="grid gap-4">
                  {commonTransmissionModes.map((mode, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-health-700 mb-2">{mode.mode}</h3>
                        <p className="text-gray-600 mb-3">{mode.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {mode.diseases.map((disease, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {disease}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                      Most infectious diseases can be prevented through simple hygiene practices and vaccinations:
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
                    {warningSignsInfection.map((sign, index) => (
                      <li key={index}>• {sign}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>

              {/* Vaccination Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Adult Vaccinations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {vaccinationSchedule.map((item, index) => (
                    <div key={index} className="border-l-4 border-green-200 pl-3">
                      <div className="font-medium text-gray-900">{item.vaccine}</div>
                      <div className="text-sm text-gray-600">{item.schedule}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Useful Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Useful Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/tools/symptom-checker" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Symptom Checker</div>
                    <div className="text-sm text-gray-600">Evaluate infection symptoms</div>
                  </Link>
                  <Link to="/tools/first-aid" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">First Aid Guide</div>
                    <div className="text-sm text-gray-600">Emergency care instructions</div>
                  </Link>
                  <Link to="/medications" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Antibiotic Guide</div>
                    <div className="text-sm text-gray-600">Proper antibiotic use</div>
                  </Link>
                </CardContent>
              </Card>

              {/* Hand Hygiene */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Proper Hand Washing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <div><strong>1.</strong> Wet hands with clean water</div>
                    <div><strong>2.</strong> Apply soap and lather well</div>
                    <div><strong>3.</strong> Scrub for at least 20 seconds</div>
                    <div><strong>4.</strong> Rinse thoroughly with clean water</div>
                    <div><strong>5.</strong> Dry with clean towel or air dry</div>
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
                  <p>Hand washing can reduce diarrheal disease by 31% and respiratory illness by 21%.</p>
                  <p>Vaccines prevent 2-3 million deaths annually worldwide.</p>
                  <p>Antibiotic resistance is one of the top 10 global public health threats.</p>
                  <p>Many infectious diseases can be eliminated through proper hygiene and vaccination.</p>
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

export default InfectiousDiseasesPage;