
import { useState } from "react";
import { Calculator, ArrowLeft, Scale, Activity, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const BMICalculatorPage = () => {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [unit, setUnit] = useState<string>("metric");
  const [result, setResult] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBMI = () => {
    let weightKg = parseFloat(weight);
    let heightM = parseFloat(height);

    if (unit === "imperial") {
      weightKg = weightKg * 0.453592; // pounds to kg
      heightM = heightM * 0.0254; // inches to meters
    } else {
      heightM = heightM / 100; // cm to meters
    }

    const bmi = weightKg / (heightM * heightM);
    setResult(Math.round(bmi * 10) / 10);

    if (bmi < 18.5) {
      setCategory("Underweight");
    } else if (bmi < 25) {
      setCategory("Normal weight");
    } else if (bmi < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Underweight": return "text-blue-600";
      case "Normal weight": return "text-green-600";
      case "Overweight": return "text-orange-600";
      case "Obese": return "text-red-600";
      default: return "text-gray-600";
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
              <span className="text-gray-600">BMI Calculator</span>
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
              <div className="bg-blue-50 text-blue-700 p-3 rounded-lg">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">BMI Calculator</h1>
                <p className="text-gray-600">Calculate your Body Mass Index</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Calculate Your BMI
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Unit System</Label>
                    <RadioGroup value={unit} onValueChange={setUnit}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="metric" id="metric" />
                        <Label htmlFor="metric">Metric (kg, cm)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="imperial" id="imperial" />
                        <Label htmlFor="imperial">Imperial (lbs, inches)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weight" className="text-sm font-medium mb-2 block">
                        Weight {unit === "metric" ? "(kg)" : "(lbs)"}
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder={unit === "metric" ? "70" : "154"}
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height" className="text-sm font-medium mb-2 block">
                        Height {unit === "metric" ? "(cm)" : "(inches)"}
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder={unit === "metric" ? "175" : "69"}
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={calculateBMI} 
                    className="w-full"
                    disabled={!weight || !height}
                  >
                    Calculate BMI
                  </Button>

                  {result && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-health-600 mb-2">
                        {result}
                      </div>
                      <div className={`text-lg font-semibold ${getCategoryColor(category)}`}>
                        {category}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* BMI Categories */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>BMI Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Underweight</span>
                        <span className="text-blue-600">< 18.5</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Normal weight</span>
                        <span className="text-green-600">18.5 - 24.9</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <span className="font-medium">Overweight</span>
                        <span className="text-orange-600">25 - 29.9</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span className="font-medium">Obese</span>
                        <span className="text-red-600">≥ 30</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Understanding BMI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      BMI is a screening tool used to identify whether a person is underweight, 
                      normal weight, overweight, or obese. It's calculated using height and weight.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-health-600 rounded-full"></div>
                        <span className="text-sm">BMI doesn't measure body fat directly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-health-600 rounded-full"></div>
                        <span className="text-sm">Results may vary for athletes and elderly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-health-600 rounded-full"></div>
                        <span className="text-sm">Consult healthcare provider for interpretation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold mb-6 text-center">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/tools/calorie-calculator" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <Calculator className="h-8 w-8 text-health-600 mx-auto mb-3" />
                <div className="font-medium text-gray-900 mb-2">Calorie Calculator</div>
                <div className="text-sm text-gray-600">Calculate daily calorie needs</div>
              </Link>
              <Link to="/tools/heart-rate-calculator" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <Heart className="h-8 w-8 text-health-600 mx-auto mb-3" />
                <div className="font-medium text-gray-900 mb-2">Heart Rate Calculator</div>
                <div className="text-sm text-gray-600">Find your target heart rate</div>
              </Link>
              <Link to="/tools/fitness-assessment" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <Activity className="h-8 w-8 text-health-600 mx-auto mb-3" />
                <div className="font-medium text-gray-900 mb-2">Fitness Assessment</div>
                <div className="text-sm text-gray-600">Evaluate your fitness level</div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BMICalculatorPage;
