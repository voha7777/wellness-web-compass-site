
import { useState } from "react";
import { Search, ArrowLeft, Stethoscope, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const SymptomCheckerPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const commonSymptoms = [
    { name: "Headache", category: "Neurological", severity: "mild" },
    { name: "Fever", category: "General", severity: "moderate" },
    { name: "Cough", category: "Respiratory", severity: "mild" },
    { name: "Sore throat", category: "Respiratory", severity: "mild" },
    { name: "Fatigue", category: "General", severity: "mild" },
    { name: "Chest pain", category: "Cardiovascular", severity: "severe" },
    { name: "Shortness of breath", category: "Respiratory", severity: "severe" },
    { name: "Nausea", category: "Gastrointestinal", severity: "mild" },
    { name: "Dizziness", category: "Neurological", severity: "moderate" },
    { name: "Muscle aches", category: "Musculoskeletal", severity: "mild" },
    { name: "Stomach pain", category: "Gastrointestinal", severity: "moderate" },
    { name: "Runny nose", category: "Respiratory", severity: "mild" }
  ];

  const possibleConditions = [
    {
      name: "Common Cold",
      probability: 85,
      description: "Viral infection affecting upper respiratory tract",
      symptoms: ["Runny nose", "Cough", "Sore throat", "Fatigue"],
      urgency: "low"
    },
    {
      name: "Influenza",
      probability: 70,
      description: "Viral infection causing respiratory and systemic symptoms",
      symptoms: ["Fever", "Muscle aches", "Fatigue", "Headache"],
      urgency: "moderate"
    },
    {
      name: "Tension Headache",
      probability: 65,
      description: "Most common type of headache",
      symptoms: ["Headache", "Fatigue", "Muscle aches"],
      urgency: "low"
    }
  ];

  const filteredSymptoms = commonSymptoms.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSymptomToggle = (symptomName: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomName)
        ? prev.filter(s => s !== symptomName)
        : [...prev, symptomName]
    );
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild": return "bg-green-100 text-green-800";
      case "moderate": return "bg-yellow-100 text-yellow-800";
      case "severe": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "low": return "border-green-200 bg-green-50";
      case "moderate": return "border-yellow-200 bg-yellow-50";
      case "high": return "border-red-200 bg-red-50";
      default: return "border-gray-200 bg-gray-50";
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
              <Link to="/" className="text-health-600 hover:text-health-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/tools" className="text-health-600 hover:text-health-700">Tools</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Symptom Checker</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-4 mb-6">
              <Link to="/tools" className="mt-1">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Tools
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-50 text-orange-700 p-3 rounded-lg">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Symptom Checker</h1>
                <p className="text-gray-600">Check your symptoms and get health information</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-4 bg-yellow-50 border-b border-yellow-200">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <strong>Medical Disclaimer:</strong> This tool is for informational purposes only and should not replace professional medical advice. 
                Always consult with a healthcare provider for accurate diagnosis and treatment.
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Symptom Selection */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Your Symptoms</CardTitle>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search symptoms..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {filteredSymptoms.map((symptom) => (
                        <div key={symptom.name} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                          <Checkbox
                            id={symptom.name}
                            checked={selectedSymptoms.includes(symptom.name)}
                            onCheckedChange={() => handleSymptomToggle(symptom.name)}
                          />
                          <label htmlFor={symptom.name} className="flex-1 cursor-pointer">
                            <div className="font-medium">{symptom.name}</div>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">{symptom.category}</Badge>
                              <Badge className={`text-xs ${getSeverityColor(symptom.severity)}`}>
                                {symptom.severity}
                              </Badge>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    {selectedSymptoms.length > 0 && (
                      <div className="mt-6">
                        <Button 
                          onClick={() => setShowResults(true)}
                          className="w-full"
                        >
                          Check Symptoms ({selectedSymptoms.length})
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Results */}
                {showResults && selectedSymptoms.length > 0 && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Possible Conditions</CardTitle>
                      <p className="text-sm text-gray-600">
                        Based on your selected symptoms, here are some possible conditions:
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {possibleConditions.map((condition, index) => (
                          <div key={index} className={`p-4 rounded-lg border ${getUrgencyColor(condition.urgency)}`}>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{condition.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {condition.probability}% match
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{condition.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {condition.symptoms.map((symptom, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant={selectedSymptoms.includes(symptom) ? "default" : "outline"}
                                  className="text-xs"
                                >
                                  {selectedSymptoms.includes(symptom) && <CheckCircle className="h-3 w-3 mr-1" />}
                                  {symptom}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Selected Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedSymptoms.length === 0 ? (
                      <p className="text-sm text-gray-500">No symptoms selected</p>
                    ) : (
                      <div className="space-y-2">
                        {selectedSymptoms.map((symptom) => (
                          <div key={symptom} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span className="text-sm">{symptom}</span>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleSymptomToggle(symptom)}
                            >
                              ×
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">When to Seek Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Emergency (Call 911)</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Severe chest pain</li>
                          <li>• Difficulty breathing</li>
                          <li>• Severe allergic reaction</li>
                          <li>• Signs of stroke</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">Urgent Care</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• High fever ({'>'}101°F)</li>
                          <li>• Persistent vomiting</li>
                          <li>• Severe pain</li>
                          <li>• Dehydration</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Schedule Appointment</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Mild symptoms</li>
                          <li>• Routine check-up</li>
                          <li>• Preventive care</li>
                          <li>• Follow-up care</li>
                        </ul>
                      </div>
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

export default SymptomCheckerPage;
