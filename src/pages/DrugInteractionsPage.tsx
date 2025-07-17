
import { useState } from "react";
import { Search, ArrowLeft, AlertTriangle, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const DrugInteractionsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedications, setSelectedMedications] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const commonMedications = [
    "Aspirin", "Ibuprofen", "Acetaminophen", "Lisinopril", "Metformin", 
    "Atorvastatin", "Omeprazole", "Warfarin", "Levothyroxine", "Metoprolol",
    "Losartan", "Amlodipine", "Furosemide", "Hydrochlorothiazide", "Simvastatin"
  ];

  const interactions = [
    {
      medications: ["Warfarin", "Aspirin"],
      severity: "Major",
      description: "Increased risk of bleeding when taken together",
      recommendation: "Avoid combination unless specifically directed by doctor"
    },
    {
      medications: ["Lisinopril", "Ibuprofen"],
      severity: "Moderate",
      description: "NSAIDs may reduce effectiveness of ACE inhibitors",
      recommendation: "Monitor blood pressure closely"
    },
    {
      medications: ["Metformin", "Alcohol"],
      severity: "Moderate",
      description: "Increased risk of lactic acidosis",
      recommendation: "Limit alcohol consumption"
    }
  ];

  const filteredMedications = commonMedications.filter(med =>
    med.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedMedications.includes(med)
  );

  const addMedication = (medication: string) => {
    if (!selectedMedications.includes(medication)) {
      setSelectedMedications([...selectedMedications, medication]);
      setSearchTerm("");
    }
  };

  const removeMedication = (medication: string) => {
    setSelectedMedications(selectedMedications.filter(med => med !== medication));
  };

  const checkInteractions = () => {
    setShowResults(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Major": return "bg-red-100 text-red-800 border-red-200";
      case "Moderate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Minor": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
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
              <span className="text-gray-600">Drug Interactions</span>
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
              <div className="bg-red-50 text-red-700 p-3 rounded-lg">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Drug Interaction Checker</h1>
                <p className="text-gray-600">Check for interactions between medications</p>
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
                <strong>Important:</strong> This tool is for educational purposes only. Always consult with your healthcare provider 
                or pharmacist before making changes to your medications.
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Medication Selection */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Add Medications</CardTitle>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search for medications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Search Results */}
                    {searchTerm && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Search Results:</h4>
                        <div className="space-y-2">
                          {filteredMedications.slice(0, 5).map((medication) => (
                            <div key={medication} className="flex items-center justify-between p-2 border rounded-lg">
                              <span>{medication}</span>
                              <Button 
                                size="sm"
                                onClick={() => addMedication(medication)}
                              >
                                <Plus className="h-4 w-4 mr-1" />
                                Add
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Selected Medications */}
                    <div>
                      <h4 className="font-semibold mb-3">Selected Medications:</h4>
                      {selectedMedications.length === 0 ? (
                        <p className="text-gray-500">No medications selected</p>
                      ) : (
                        <div className="space-y-2">
                          {selectedMedications.map((medication) => (
                            <div key={medication} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium">{medication}</span>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => removeMedication(medication)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {selectedMedications.length > 1 && (
                      <div className="mt-6">
                        <Button 
                          onClick={checkInteractions}
                          className="w-full"
                        >
                          Check Interactions
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Results */}
                {showResults && selectedMedications.length > 1 && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Interaction Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {interactions.length === 0 ? (
                        <div className="text-center py-8">
                          <div className="text-green-600 mb-2">
                            <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-green-800">No Major Interactions Found</h3>
                          <p className="text-green-600">The selected medications appear to be safe to take together.</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {interactions.map((interaction, index) => (
                            <div key={index} className={`p-4 rounded-lg border ${getSeverityColor(interaction.severity)}`}>
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">
                                  {interaction.medications.join(" + ")}
                                </h4>
                                <Badge className={getSeverityColor(interaction.severity)}>
                                  {interaction.severity}
                                </Badge>
                              </div>
                              <p className="text-sm mb-2">{interaction.description}</p>
                              <p className="text-sm font-medium">
                                <strong>Recommendation:</strong> {interaction.recommendation}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Common Medications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {commonMedications.slice(0, 8).map((medication) => (
                        <Button
                          key={medication}
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => addMedication(medication)}
                          disabled={selectedMedications.includes(medication)}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          {medication}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Interaction Severity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-red-100 text-red-800">Major</Badge>
                        <span className="text-sm">Avoid combination</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-yellow-100 text-yellow-800">Moderate</Badge>
                        <span className="text-sm">Monitor closely</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-green-100 text-green-800">Minor</Badge>
                        <span className="text-sm">Usually safe</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-health-600 rounded-full mt-1.5"></div>
                        <span>Always inform your doctor about all medications you're taking</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-health-600 rounded-full mt-1.5"></div>
                        <span>Include over-the-counter drugs and supplements</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-health-600 rounded-full mt-1.5"></div>
                        <span>Keep an updated medication list</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-health-600 rounded-full mt-1.5"></div>
                        <span>Ask your pharmacist about interactions</span>
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

export default DrugInteractionsPage;
