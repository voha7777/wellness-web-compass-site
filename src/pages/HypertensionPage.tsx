
import { ArrowLeft, Heart, AlertTriangle, Info, BookOpen, Pill } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HypertensionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-health-600 hover:text-health-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/diseases" className="text-health-600 hover:text-health-700">Diseases & Conditions</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Hypertension</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-4 mb-6">
              <Link to="/diseases" className="mt-1">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Diseases
                </Button>
              </Link>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-50 text-red-700 p-3 rounded-lg">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Hypertension</h1>
                    <p className="text-gray-600">High Blood Pressure</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <Badge variant="secondary">Cardiovascular Disease</Badge>
                  <span>Affects 30% of adults</span>
                  <span>ICD-10: I10-I15</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-6 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700">120/80</div>
                <div className="text-sm text-blue-600">Normal BP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">140/90</div>
                <div className="text-sm text-orange-600">Hypertension threshold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-700">30%</div>
                <div className="text-sm text-red-600">Adult prevalence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">90%</div>
                <div className="text-sm text-green-600">Controllable with treatment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-health-600" />
                      What is Hypertension?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>
                      Hypertension, or high blood pressure, is a condition where blood pressure 
                      consistently exceeds normal levels. It's one of the most common cardiovascular 
                      diseases worldwide and a major risk factor for heart disease and stroke.
                    </p>
                    <p>
                      Blood pressure is measured with two numbers: systolic (top number) and 
                      diastolic (bottom number). Normal blood pressure is below 120/80 mmHg.
                    </p>
                  </CardContent>
                </Card>

                {/* Symptoms */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      Symptoms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-700">Early symptoms:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Headaches</li>
                          <li>• Dizziness</li>
                          <li>• Ringing in ears</li>
                          <li>• Fatigue</li>
                          <li>• Sleep disturbances</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-red-700">Advanced symptoms:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Shortness of breath</li>
                          <li>• Chest pain</li>
                          <li>• Vision problems</li>
                          <li>• Swelling</li>
                          <li>• Nosebleeds</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Important:</strong> Hypertension often has no symptoms in early stages, 
                        making regular blood pressure monitoring essential.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Causes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Causes and Risk Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Non-modifiable factors:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Age (over 45 for men, 55 for women)
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Family history
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Gender (men at higher risk)
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Ethnicity
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Modifiable factors:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Excess weight
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Smoking
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            High sodium intake
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Lack of physical activity
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Stress
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Excessive alcohol consumption
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatment */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="h-5 w-5 text-health-600" />
                      Treatment Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Lifestyle modifications:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h5 className="font-medium text-green-800 mb-2">Lifestyle changes</h5>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• Weight reduction</li>
                              <li>• Regular exercise</li>
                              <li>• Limit salt to 5g/day</li>
                              <li>• Quit smoking</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h5 className="font-medium text-blue-800 mb-2">DASH Diet</h5>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• More fruits and vegetables</li>
                              <li>• Whole grains</li>
                              <li>• Low-fat dairy products</li>
                              <li>• Limit saturated fats</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Medications:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">First-line medications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• ACE inhibitors (lisinopril, enalapril)</li>
                              <li>• Angiotensin receptor blockers</li>
                              <li>• Diuretics (hydrochlorothiazide)</li>
                              <li>• Calcium channel blockers</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Additional medications:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Beta-blockers</li>
                              <li>• Alpha-blockers</li>
                              <li>• Combination drugs</li>
                              <li>• Central-acting agents</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Tools */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Useful Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/tools/blood-pressure-calculator">
                      <Button variant="outline" className="w-full justify-start">
                        <Heart className="h-4 w-4 mr-2" />
                        BP Calculator
                      </Button>
                    </Link>
                    <Link to="/tools/heart-risk-assessment">
                      <Button variant="outline" className="w-full justify-start">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Risk Assessment
                      </Button>
                    </Link>
                    <Link to="/medications/blood-pressure">
                      <Button variant="outline" className="w-full justify-start">
                        <Pill className="h-4 w-4 mr-2" />
                        Medications
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to="/articles/heart-health/diet-for-hypertension" className="block">
                      <div className="p-3 border rounded-lg hover:bg-gray-50">
                        <h4 className="font-medium text-sm mb-1">Diet for Hypertension</h4>
                        <p className="text-xs text-gray-600">Nutrition to lower blood pressure</p>
                      </div>
                    </Link>
                    <Link to="/articles/heart-health/exercise-hypertension" className="block">
                      <div className="p-3 border rounded-lg hover:bg-gray-50">
                        <h4 className="font-medium text-sm mb-1">Exercise Guidelines</h4>
                        <p className="text-xs text-gray-600">Safe exercise recommendations</p>
                      </div>
                    </Link>
                    <Link to="/articles/heart-health/monitoring-bp" className="block">
                      <div className="p-3 border rounded-lg hover:bg-gray-50">
                        <h4 className="font-medium text-sm mb-1">Blood Pressure Monitoring</h4>
                        <p className="text-xs text-gray-600">How to measure correctly</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                {/* Emergency Warning */}
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Emergency Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-red-700 mb-3">
                      Seek emergency care if you experience:
                    </p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Blood pressure over 180/120</li>
                      <li>• Severe headache</li>
                      <li>• Chest pain</li>
                      <li>• Difficulty breathing</li>
                      <li>• Vision changes</li>
                    </ul>
                    <div className="mt-3 text-center">
                      <div className="text-lg font-bold text-red-600">Call: 911</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HypertensionPage;
