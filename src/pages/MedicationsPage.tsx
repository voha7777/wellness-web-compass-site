
import { Link } from "react-router-dom";
import { Search, Filter, Pill, AlertTriangle, Info, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MedicationsPage = () => {
  const categories = [
    {
      name: "Pain Relief",
      count: 45,
      description: "Medications for pain management",
      color: "bg-blue-50 text-blue-700"
    },
    {
      name: "Antibiotics",
      count: 67,
      description: "Anti-bacterial medications",
      color: "bg-green-50 text-green-700"
    },
    {
      name: "Vitamins & Supplements",
      count: 123,
      description: "Nutritional supplements",
      color: "bg-yellow-50 text-yellow-700"
    },
    {
      name: "Cardiovascular",
      count: 89,
      description: "Heart and blood vessel medications",
      color: "bg-red-50 text-red-700"
    }
  ];

  const popularMedications = [
    {
      name: "Lisinopril",
      genericName: "Lisinopril",
      category: "ACE Inhibitors",
      indication: "High Blood Pressure",
      prescriptionRequired: true,
      slug: "lisinopril"
    },
    {
      name: "Atorvastatin",
      genericName: "Atorvastatin",
      category: "Statins",
      indication: "High Cholesterol",
      prescriptionRequired: true,
      slug: "atorvastatin"
    },
    {
      name: "Metformin",
      genericName: "Metformin",
      category: "Antidiabetic",
      indication: "Type 2 Diabetes",
      prescriptionRequired: true,
      slug: "metformin"
    },
    {
      name: "Ibuprofen",
      genericName: "Ibuprofen",
      category: "NSAIDs",
      indication: "Pain and Inflammation",
      prescriptionRequired: false,
      slug: "ibuprofen"
    },
    {
      name: "Omeprazole",
      genericName: "Omeprazole",
      category: "Proton Pump Inhibitors",
      indication: "Heartburn, Ulcers",
      prescriptionRequired: false,
      slug: "omeprazole"
    },
    {
      name: "Salbutamol",
      genericName: "Salbutamol",
      category: "Bronchodilators",
      indication: "Asthma, COPD",
      prescriptionRequired: true,
      slug: "salbutamol"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-600 to-health-700 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Medications & Drugs</h1>
              <p className="text-xl mb-8 opacity-90">
                Complete database of medications with descriptions, dosages, and interactions
              </p>
              
              {/* Search */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Pill className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search medications by name or active ingredient..."
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

        {/* Important Notice */}
        <section className="bg-yellow-50 border-b border-yellow-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <strong>Important:</strong> This information is for educational purposes only. 
                Always consult with a healthcare professional before taking any medication.
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Drug Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className={`${category.color} px-3 py-1 rounded-full text-sm font-medium w-fit`}>
                      {category.count} medications
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Medications */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Popular Medications</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Link to="/medications/index">
                  <Button variant="outline" size="sm">
                    A-Z Index
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularMedications.map((medication, index) => (
                <Link key={index} to={`/medications/${medication.slug}`}>
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-health-700">{medication.name}</CardTitle>
                          <p className="text-sm text-gray-500 italic">{medication.genericName}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {medication.prescriptionRequired ? (
                            <Badge variant="destructive" className="text-xs">Prescription</Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">Over-the-counter</Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Category: </span>
                          <span className="text-sm text-gray-600">{medication.category}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Used for: </span>
                          <span className="text-sm text-gray-600">{medication.indication}</span>
                        </div>
                        <div className="mt-4 flex items-center text-health-600 text-sm font-medium">
                          View details
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold mb-6 text-center">Useful Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/tools/drug-interactions" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <AlertTriangle className="h-8 w-8 text-health-600 mx-auto mb-3" />
                <div className="font-medium text-gray-900 mb-2">Drug Interactions</div>
                <div className="text-sm text-gray-600">Check drug compatibility</div>
              </Link>
              <Link to="/medications/dosage-calculator" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <Info className="h-8 w-8 text-health-600 mx-auto mb-3" />
                <div className="font-medium text-gray-900 mb-2">Dosage Calculator</div>
                <div className="text-sm text-gray-600">Calculate proper dosage</div>
              </Link>
              <Link to="/medications/side-effects" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <AlertTriangle className="h-8 w-8 text-health-600 mx-auto mb-3" />
                <div className="font-medium text-gray-900 mb-2">Side Effects</div>
                <div className="text-sm text-gray-600">Learn about possible reactions</div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MedicationsPage;
