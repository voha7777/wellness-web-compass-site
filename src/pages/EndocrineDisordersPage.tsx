import { Link } from "react-router-dom";
import { ArrowLeft, Stethoscope, ChevronRight, AlertTriangle, Clock, Users, TrendingUp, Shield, Calendar, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const EndocrineDisordersPage = () => {
  const conditions = [
    {
      name: "Type 2 Diabetes",
      description: "Chronic condition affecting how the body processes blood sugar",
      prevalence: "37.3 million Americans",
      riskLevel: "High",
      slug: "type-2-diabetes"
    },
    {
      name: "Hypothyroidism",
      description: "Underactive thyroid gland producing insufficient hormones",
      prevalence: "4.6% of US population",
      riskLevel: "Moderate",
      slug: "hypothyroidism"
    },
    {
      name: "Hyperthyroidism",
      description: "Overactive thyroid gland producing too many hormones",
      prevalence: "1.2% of US population",
      riskLevel: "Moderate",
      slug: "hyperthyroidism"
    },
    {
      name: "Polycystic Ovary Syndrome",
      description: "Hormonal disorder affecting women of reproductive age",
      prevalence: "6-12% of women",
      riskLevel: "Moderate",
      slug: "polycystic-ovary-syndrome"
    },
    {
      name: "Osteoporosis",
      description: "Condition causing bones to become weak and brittle",
      prevalence: "16.5% of women over 50",
      riskLevel: "Moderate",
      slug: "osteoporosis"
    },
    {
      name: "Cushing's Syndrome",
      description: "Disorder caused by prolonged exposure to high cortisol levels",
      prevalence: "10-15 per million",
      riskLevel: "Low",
      slug: "cushings-syndrome"
    }
  ];

  const riskFactors = [
    "Family history of endocrine disorders",
    "Age (risk increases with age)",
    "Obesity or being overweight",
    "Sedentary lifestyle",
    "Poor diet high in processed foods",
    "Chronic stress",
    "Certain medications",
    "Previous radiation exposure",
    "Autoimmune conditions",
    "Pregnancy complications"
  ];

  const preventionTips = [
    "Maintain a healthy weight",
    "Exercise regularly (150 minutes/week)",
    "Eat a balanced, nutrient-rich diet",
    "Limit processed foods and added sugars",
    "Manage stress through relaxation techniques",
    "Get adequate sleep (7-9 hours)",
    "Avoid smoking and limit alcohol",
    "Take prescribed medications as directed",
    "Monitor blood sugar and hormone levels",
    "Get regular health screenings"
  ];

  const diabetesWarnings = [
    "Blood sugar over 300 mg/dL",
    "Severe dehydration or vomiting",
    "Rapid, deep breathing",
    "Fruity-smelling breath",
    "Confusion or loss of consciousness"
  ];

  const thyroidSymptoms = {
    hypo: [
      "Unexplained weight gain",
      "Fatigue and weakness",
      "Cold intolerance",
      "Dry skin and hair",
      "Depression or mood changes"
    ],
    hyper: [
      "Unexplained weight loss",
      "Rapid heartbeat",
      "Heat intolerance",
      "Excessive sweating",
      "Anxiety or nervousness"
    ]
  };

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
              <span className="text-gray-700">Endocrine Disorders</span>
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
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 text-green-700 p-4 rounded-lg">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Endocrine Disorders</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="secondary">67 Conditions</Badge>
                    <Badge variant="outline" className="text-green-600 border-green-200">Hormone & Metabolism</Badge>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Endocrine disorders affect hormone-producing glands and can impact metabolism, growth, reproduction, and mood. 
                Early detection and proper management are essential for maintaining hormonal balance and overall health.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">40M+</div>
                <div className="text-sm text-gray-600">Americans with diabetes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">20M</div>
                <div className="text-sm text-gray-600">Americans with thyroid disease</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">54M</div>
                <div className="text-sm text-gray-600">Adults with osteoporosis/osteopenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">96M</div>
                <div className="text-sm text-gray-600">Adults with prediabetes</div>
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
                  <Stethoscope className="h-6 w-6 text-green-600" />
                  Common Endocrine Conditions
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

              {/* Thyroid Symptoms Comparison */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Droplets className="h-6 w-6 text-green-600" />
                  Thyroid Disorder Symptoms
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-700">Hypothyroidism (Underactive)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {thyroidSymptoms.hypo.map((symptom, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-700">Hyperthyroidism (Overactive)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {thyroidSymptoms.hyper.map((symptom, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
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
                      Several factors can increase your risk of developing endocrine disorders:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {riskFactors.map((factor, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
                  Prevention & Management
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Many endocrine disorders can be prevented or managed effectively with lifestyle modifications:
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
              {/* Emergency Warning - Diabetes */}
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  <div className="font-medium text-red-800 mb-2">DIABETES EMERGENCY - Call 911 for:</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    {diabetesWarnings.map((warning, index) => (
                      <li key={index}>• {warning}</li>
                    ))}
                  </ul>
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
                  <Link to="/tools/diabetes-risk" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Diabetes Risk Assessment</div>
                    <div className="text-sm text-gray-600">Evaluate your diabetes risk factors</div>
                  </Link>
                  <Link to="/tools/bmi-calculator" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">BMI Calculator</div>
                    <div className="text-sm text-gray-600">Calculate body mass index</div>
                  </Link>
                  <Link to="/tools/symptom-checker" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="font-medium text-health-700">Symptom Checker</div>
                    <div className="text-sm text-gray-600">Evaluate endocrine symptoms</div>
                  </Link>
                </CardContent>
              </Card>

              {/* Blood Sugar Ranges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Blood Sugar Targets
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Normal (Fasting)</div>
                    <div className="text-sm text-gray-600">Less than 100 mg/dL</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Prediabetes</div>
                    <div className="text-sm text-gray-600">100-125 mg/dL (fasting)</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Diabetes</div>
                    <div className="text-sm text-gray-600">126 mg/dL or higher (fasting)</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">A1C Target</div>
                    <div className="text-sm text-gray-600">Less than 7% for most adults</div>
                  </div>
                </CardContent>
              </Card>

              {/* Screening Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Screening Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="border-l-4 border-green-200 pl-3">
                    <div className="font-medium text-gray-900">Diabetes Screening</div>
                    <div className="text-sm text-gray-600">Every 3 years starting at age 45</div>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-3">
                    <div className="font-medium text-gray-900">Thyroid Function</div>
                    <div className="text-sm text-gray-600">Every 5 years starting at age 35</div>
                  </div>
                  <div className="border-l-4 border-purple-200 pl-3">
                    <div className="font-medium text-gray-900">Bone Density</div>
                    <div className="text-sm text-gray-600">Women at 65, men at 70</div>
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
                  <p>The endocrine system produces over 50 different hormones.</p>
                  <p>Type 2 diabetes can often be prevented or delayed through lifestyle changes.</p>
                  <p>Thyroid disorders are 5-8 times more common in women than men.</p>
                  <p>Many endocrine disorders have similar symptoms, making proper diagnosis crucial.</p>
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

export default EndocrineDisordersPage;