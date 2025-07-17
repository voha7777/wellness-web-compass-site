
import { Link } from "react-router-dom";
import { Search, Filter, ChevronRight, Heart, Brain, Thermometer, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DiseasesPage = () => {
  const categories = [
    {
      name: "Cardiovascular Diseases",
      icon: <Heart className="h-6 w-6" />,
      count: 156,
      color: "bg-red-50 text-red-700",
      diseases: ["Hypertension", "Angina", "Heart Attack", "Arrhythmia"]
    },
    {
      name: "Neurological Disorders",
      icon: <Brain className="h-6 w-6" />,
      count: 89,
      color: "bg-purple-50 text-purple-700",
      diseases: ["Migraine", "Epilepsy", "Alzheimer's", "Depression"]
    },
    {
      name: "Infectious Diseases",
      icon: <Thermometer className="h-6 w-6" />,
      count: 134,
      color: "bg-orange-50 text-orange-700",
      diseases: ["Common Cold", "Flu", "Pneumonia", "UTI"]
    },
    {
      name: "Endocrine Disorders",
      icon: <Stethoscope className="h-6 w-6" />,
      count: 67,
      color: "bg-green-50 text-green-700",
      diseases: ["Type 2 Diabetes", "Hypothyroidism", "Obesity", "Osteoporosis"]
    }
  ];

  const commonDiseases = [
    {
      name: "Hypertension",
      description: "High blood pressure condition",
      prevalence: "Affects 30% of adults",
      slug: "hypertension"
    },
    {
      name: "Type 2 Diabetes",
      description: "Blood sugar metabolism disorder",
      prevalence: "Found in 8% of adults",
      slug: "diabetes-type-2"
    },
    {
      name: "Depression",
      description: "Mental health mood disorder",
      prevalence: "Diagnosed in 5% of population",
      slug: "depression"
    },
    {
      name: "Osteoarthritis",
      description: "Degenerative joint disease",
      prevalence: "Affects 15% of people over 60",
      slug: "osteoarthritis"
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
              <h1 className="text-4xl font-bold mb-6">Diseases & Conditions</h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive information about diseases, symptoms, and treatment options
              </p>
              
              {/* Search */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search diseases by name or symptoms..."
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

        {/* Categories Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Disease Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className={`${category.color} p-3 rounded-lg inline-block w-fit mb-3`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <p className="text-sm text-gray-500">{category.count} diseases</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {category.diseases.map((disease, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ChevronRight className="h-3 w-3 mr-1" />
                          {disease}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Diseases */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Most Common Diseases</h2>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonDiseases.map((disease, index) => (
                <Link key={index} to={`/diseases/${disease.slug}`}>
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-health-700">{disease.name}</h3>
                      <p className="text-gray-600 mb-3">{disease.description}</p>
                      <p className="text-sm text-gray-500">{disease.prevalence}</p>
                      <div className="mt-4 flex items-center text-health-600 text-sm font-medium">
                        Learn more
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/diseases/all">View All Diseases A-Z</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/diseases/symptoms" className="text-center p-4 hover:bg-white rounded-lg transition-colors">
                <div className="text-health-600 font-medium">Symptom Search</div>
                <div className="text-sm text-gray-500 mt-1">Find by symptoms</div>
              </Link>
              <Link to="/diseases/chronic" className="text-center p-4 hover:bg-white rounded-lg transition-colors">
                <div className="text-health-600 font-medium">Chronic Diseases</div>
                <div className="text-sm text-gray-500 mt-1">Long-term conditions</div>
              </Link>
              <Link to="/diseases/prevention" className="text-center p-4 hover:bg-white rounded-lg transition-colors">
                <div className="text-health-600 font-medium">Prevention</div>
                <div className="text-sm text-gray-500 mt-1">Prevention tips</div>
              </Link>
              <Link to="/tools/symptom-checker" className="text-center p-4 hover:bg-white rounded-lg transition-colors">
                <div className="text-health-600 font-medium">Symptom Checker</div>
                <div className="text-sm text-gray-500 mt-1">Online assessment</div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DiseasesPage;
