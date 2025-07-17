
import { Link } from "react-router-dom";
import { Search, Filter, ChevronRight, Heart, Brain, Thermometer, Stethoscope, Lungs, Stomach, Bone, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DiseaseCategory } from "@/components/DiseaseCategory";

const DiseasesPage = () => {
  const categories = [
    {
      name: "Cardiovascular Diseases",
      icon: <Heart className="h-6 w-6" />,
      count: 156,
      color: "bg-red-50 text-red-700",
      description: "Conditions affecting the heart and blood vessels",
      diseases: ["Hypertension", "Coronary Artery Disease", "Heart Attack", "Arrhythmia", "Heart Failure", "Stroke"],
      slug: "cardiovascular"
    },
    {
      name: "Neurological Disorders",
      icon: <Brain className="h-6 w-6" />,
      count: 89,
      color: "bg-purple-50 text-purple-700",
      description: "Conditions affecting the nervous system and brain",
      diseases: ["Migraine", "Epilepsy", "Alzheimer's Disease", "Parkinson's Disease", "Multiple Sclerosis", "Depression"],
      slug: "neurological"
    },
    {
      name: "Respiratory Conditions",
      icon: <Lungs className="h-6 w-6" />,
      count: 78,
      color: "bg-blue-50 text-blue-700",
      description: "Diseases affecting the lungs and breathing",
      diseases: ["Asthma", "COPD", "Pneumonia", "Bronchitis", "Sleep Apnea", "Lung Cancer"],
      slug: "respiratory"
    },
    {
      name: "Infectious Diseases",
      icon: <Thermometer className="h-6 w-6" />,
      count: 134,
      color: "bg-orange-50 text-orange-700",
      description: "Conditions caused by bacteria, viruses, or parasites",
      diseases: ["Common Cold", "Influenza", "COVID-19", "Pneumonia", "UTI", "Hepatitis"],
      slug: "infectious"
    },
    {
      name: "Endocrine Disorders",
      icon: <Stethoscope className="h-6 w-6" />,
      count: 67,
      color: "bg-green-50 text-green-700",
      description: "Hormonal and metabolic system disorders",
      diseases: ["Type 2 Diabetes", "Hypothyroidism", "Hyperthyroidism", "Obesity", "Osteoporosis", "PCOS"],
      slug: "endocrine"
    },
    {
      name: "Digestive Disorders",
      icon: <Stomach className="h-6 w-6" />,
      count: 92,
      color: "bg-yellow-50 text-yellow-700",
      description: "Conditions affecting the digestive system",
      diseases: ["GERD", "IBS", "Crohn's Disease", "Ulcerative Colitis", "Gastritis", "Peptic Ulcer"],
      slug: "digestive"
    },
    {
      name: "Musculoskeletal Conditions",
      icon: <Bone className="h-6 w-6" />,
      count: 101,
      color: "bg-indigo-50 text-indigo-700",
      description: "Disorders of bones, muscles, and joints",
      diseases: ["Osteoarthritis", "Rheumatoid Arthritis", "Osteoporosis", "Back Pain", "Fibromyalgia", "Gout"],
      slug: "musculoskeletal"
    },
    {
      name: "Eye & Vision Disorders",
      icon: <Eye className="h-6 w-6" />,
      count: 45,
      color: "bg-teal-50 text-teal-700",
      description: "Conditions affecting vision and eye health",
      diseases: ["Cataracts", "Glaucoma", "Macular Degeneration", "Diabetic Retinopathy", "Dry Eyes", "Myopia"],
      slug: "vision"
    }
  ];

  const commonDiseases = [
    {
      name: "Hypertension (High Blood Pressure)",
      description: "A condition where blood pressure consistently exceeds normal levels, often called the 'silent killer'",
      prevalence: "Affects 47% of adults in the US",
      riskLevel: "High",
      slug: "hypertension"
    },
    {
      name: "Type 2 Diabetes",
      description: "A metabolic disorder characterized by high blood sugar levels due to insulin resistance",
      prevalence: "Diagnosed in 11.3% of US adults",
      riskLevel: "High",
      slug: "diabetes-type-2"
    },
    {
      name: "Depression",
      description: "A serious mental health condition that affects mood, thoughts, and daily functioning",
      prevalence: "Affects 8.5% of adults annually",
      riskLevel: "Moderate",
      slug: "depression"
    },
    {
      name: "Osteoarthritis",
      description: "The most common form of arthritis, causing joint pain and stiffness",
      prevalence: "Affects 32.5 million US adults",
      riskLevel: "Moderate",
      slug: "osteoarthritis"
    },
    {
      name: "Asthma",
      description: "A respiratory condition causing airways to narrow, swell, and produce extra mucus",
      prevalence: "Affects 25 million Americans",
      riskLevel: "Moderate",
      slug: "asthma"
    },
    {
      name: "Coronary Artery Disease",
      description: "The most common type of heart disease, caused by plaque buildup in arteries",
      prevalence: "Leading cause of death in the US",
      riskLevel: "High",
      slug: "coronary-artery-disease"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "text-red-600";
      case "Moderate": return "text-orange-600";
      case "Low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-600 to-health-700 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Diseases & Medical Conditions</h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive, evidence-based information about diseases, symptoms, treatments, and prevention strategies
              </p>
              
              {/* Search */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search diseases by name, symptoms, or body system..."
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

        {/* Disease Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Browse by Medical Specialty</h2>
              <Button variant="outline" asChild>
                <Link to="/diseases/all">View All Conditions A-Z</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <DiseaseCategory key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Most Common Diseases */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Most Common Diseases</h2>
                <p className="text-gray-600 mt-2">Conditions that affect millions of people worldwide</p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter by Risk Level
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonDiseases.map((disease, index) => (
                <Link key={index} to={`/diseases/${disease.slug}`}>
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-health-700">{disease.name}</h3>
                        <span className={`text-sm font-medium ${getRiskColor(disease.riskLevel)}`}>
                          {disease.riskLevel} Risk
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{disease.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">{disease.prevalence}</p>
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
          </div>
        </section>

        {/* Quick Access Tools */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/tools/symptom-checker" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-health-50 text-health-600 p-3 rounded-lg inline-block mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <div className="text-health-600 font-medium">Symptom Checker</div>
                <div className="text-sm text-gray-500 mt-1">Find conditions by symptoms</div>
              </Link>
              <Link to="/diseases/chronic" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-health-50 text-health-600 p-3 rounded-lg inline-block mb-3">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div className="text-health-600 font-medium">Chronic Diseases</div>
                <div className="text-sm text-gray-500 mt-1">Long-term condition management</div>
              </Link>
              <Link to="/diseases/prevention" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-health-50 text-health-600 p-3 rounded-lg inline-block mb-3">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="text-health-600 font-medium">Prevention Guide</div>
                <div className="text-sm text-gray-500 mt-1">Disease prevention strategies</div>
              </Link>
              <Link to="/diseases/emergency" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-red-50 text-red-600 p-3 rounded-lg inline-block mb-3">
                  <Thermometer className="h-6 w-6" />
                </div>
                <div className="text-red-600 font-medium">Emergency Signs</div>
                <div className="text-sm text-gray-500 mt-1">When to seek immediate care</div>
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
