import { useState } from "react";
import { Heart, Activity, Target, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

const HeartRateCalculatorPage = () => {
  const [formData, setFormData] = useState({
    age: "",
    restingHR: "",
    fitnessLevel: ""
  });

  const [results, setResults] = useState<{
    maxHR: number;
    zones: {
      name: string;
      percentage: string;
      range: string;
      description: string;
      color: string;
    }[];
  } | null>(null);

  const fitnessLevels = [
    { value: "beginner", label: "Beginner", description: "New to exercise" },
    { value: "intermediate", label: "Intermediate", description: "Regular exercise 2-3 times/week" },
    { value: "advanced", label: "Advanced", description: "Regular exercise 4+ times/week" },
    { value: "athlete", label: "Athlete", description: "Competitive or very high level" }
  ];

  const calculateHeartRateZones = () => {
    const age = parseInt(formData.age);
    const restingHR = parseInt(formData.restingHR);
    
    // Calculate Maximum Heart Rate (220 - age)
    const maxHR = 220 - age;
    
    // Calculate Heart Rate Reserve (HRR = Max HR - Resting HR)
    const hrr = maxHR - restingHR;

    // Calculate training zones using Karvonen method
    const zones = [
      {
        name: "Recovery Zone",
        percentage: "50-60%",
        range: `${Math.round(restingHR + hrr * 0.5)}-${Math.round(restingHR + hrr * 0.6)}`,
        description: "Light activity, warm-up, cool-down",
        color: "bg-gray-100 text-gray-700"
      },
      {
        name: "Aerobic Base",
        percentage: "60-70%",
        range: `${Math.round(restingHR + hrr * 0.6)}-${Math.round(restingHR + hrr * 0.7)}`,
        description: "Fat burning, base fitness building",
        color: "bg-blue-100 text-blue-700"
      },
      {
        name: "Aerobic Zone",
        percentage: "70-80%",
        range: `${Math.round(restingHR + hrr * 0.7)}-${Math.round(restingHR + hrr * 0.8)}`,
        description: "Cardiovascular fitness improvement",
        color: "bg-green-100 text-green-700"
      },
      {
        name: "Lactate Threshold",
        percentage: "80-90%",
        range: `${Math.round(restingHR + hrr * 0.8)}-${Math.round(restingHR + hrr * 0.9)}`,
        description: "High-intensity training, performance",
        color: "bg-orange-100 text-orange-700"
      },
      {
        name: "VO2 Max Zone",
        percentage: "90-100%",
        range: `${Math.round(restingHR + hrr * 0.9)}-${maxHR}`,
        description: "Maximum effort, short intervals",
        color: "bg-red-100 text-red-700"
      }
    ];

    setResults({ maxHR, zones });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.age && formData.restingHR && formData.fitnessLevel) {
      calculateHeartRateZones();
    }
  };

  const resetForm = () => {
    setFormData({
      age: "",
      restingHR: "",
      fitnessLevel: ""
    });
    setResults(null);
  };

  const getRecommendedZone = () => {
    switch (formData.fitnessLevel) {
      case "beginner":
        return "Recovery Zone and Aerobic Base";
      case "intermediate":
        return "Aerobic Base and Aerobic Zone";
      case "advanced":
        return "Aerobic Zone and Lactate Threshold";
      case "athlete":
        return "All zones depending on training goals";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-600 to-health-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 p-4 rounded-full inline-block mb-6">
                <Heart className="h-12 w-12" />
              </div>
              <h1 className="text-4xl font-bold mb-6">Heart Rate Zone Calculator</h1>
              <p className="text-xl opacity-90">
                Calculate your optimal training heart rate zones for effective workouts
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Calculator Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Calculate Your Heart Rate Zones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="age">Age (years)</Label>
                      <Input
                        id="age"
                        type="number"
                        min="15"
                        max="100"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        placeholder="Enter your age"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="restingHR">Resting Heart Rate (bpm)</Label>
                      <Input
                        id="restingHR"
                        type="number"
                        min="40"
                        max="120"
                        value={formData.restingHR}
                        onChange={(e) => setFormData({...formData, restingHR: e.target.value})}
                        placeholder="Enter resting heart rate"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Measure first thing in the morning before getting up
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="fitness">Fitness Level</Label>
                      <Select value={formData.fitnessLevel} onValueChange={(value) => setFormData({...formData, fitnessLevel: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your fitness level" />
                        </SelectTrigger>
                        <SelectContent>
                          {fitnessLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              <div>
                                <div className="font-medium">{level.label}</div>
                                <div className="text-sm text-gray-500">{level.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
                        Calculate Zones
                      </Button>
                      <Button type="button" variant="outline" onClick={resetForm}>
                        Reset
                      </Button>
                    </div>
                  </form>

                  {!results && (
                    <div className="mt-6">
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>How to measure resting heart rate:</strong>
                          <br />
                          1. Measure first thing in the morning
                          <br />
                          2. Count pulse for 60 seconds
                          <br />
                          3. Use wrist or neck pulse points
                        </AlertDescription>
                      </Alert>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Results */}
              {results && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        Your Heart Rate Zones
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 p-4 bg-health-50 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-health-600 mb-1">Maximum Heart Rate</div>
                          <div className="text-3xl font-bold text-health-700">{results.maxHR} bpm</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {results.zones.map((zone, index) => (
                          <div key={index} className={`p-4 rounded-lg ${zone.color}`}>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold">{zone.name}</h3>
                              <span className="text-sm font-medium">{zone.percentage}</span>
                            </div>
                            <div className="text-xl font-bold mb-1">{zone.range} bpm</div>
                            <p className="text-sm">{zone.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {formData.fitnessLevel && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Recommended Training Zone</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-800 mb-2">
                            For {fitnessLevels.find(l => l.value === formData.fitnessLevel)?.label}:
                          </h4>
                          <p className="text-green-700">{getRecommendedZone()}</p>
                        </div>
                        
                        <div className="mt-4 space-y-3">
                          <h4 className="font-semibold">Training Tips:</h4>
                          <ul className="text-sm space-y-1 text-gray-600">
                            <li>• Start with lower zones and gradually increase intensity</li>
                            <li>• Spend 80% of training time in aerobic zones</li>
                            <li>• Use higher zones for specific interval training</li>
                            <li>• Monitor how you feel, not just heart rate</li>
                            <li>• Allow adequate recovery between intense sessions</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {!results && (
                <Card>
                  <CardHeader>
                    <CardTitle>About Heart Rate Training</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Benefits of Zone Training:</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Optimize workout efficiency</li>
                        <li>• Prevent overtraining</li>
                        <li>• Target specific fitness goals</li>
                        <li>• Track progress objectively</li>
                        <li>• Ensure adequate recovery</li>
                      </ul>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        These calculations provide general guidelines. Individual responses may vary. 
                        Consult a healthcare provider before starting any exercise program.
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold mb-2">Equipment Options:</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Heart rate monitors (chest strap)</li>
                        <li>• Fitness watches and smartwatches</li>
                        <li>• Gym equipment with HR sensors</li>
                        <li>• Manual pulse checking</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HeartRateCalculatorPage;