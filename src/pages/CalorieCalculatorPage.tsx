import { useState } from "react";
import { Calculator, Activity, Target, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CalorieCalculatorPage = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
    goal: ""
  });

  const [results, setResults] = useState<{
    bmr: number;
    tdee: number;
    goalCalories: number;
    protein: number;
    carbs: number;
    fats: number;
  } | null>(null);

  const activityLevels = [
    { value: "1.2", label: "Sedentary", description: "Little or no exercise" },
    { value: "1.375", label: "Lightly Active", description: "Light exercise 1-3 days/week" },
    { value: "1.55", label: "Moderately Active", description: "Moderate exercise 3-5 days/week" },
    { value: "1.725", label: "Very Active", description: "Hard exercise 6-7 days/week" },
    { value: "1.9", label: "Extremely Active", description: "Very hard exercise/physical job" }
  ];

  const goals = [
    { value: "lose", label: "Lose Weight", modifier: -500 },
    { value: "maintain", label: "Maintain Weight", modifier: 0 },
    { value: "gain", label: "Gain Weight", modifier: 500 }
  ];

  const calculateCalories = () => {
    const age = parseInt(formData.age);
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const activityMultiplier = parseFloat(formData.activityLevel);

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr: number;
    if (formData.gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate TDEE
    const tdee = bmr * activityMultiplier;

    // Calculate goal calories
    const goalModifier = goals.find(g => g.value === formData.goal)?.modifier || 0;
    const goalCalories = tdee + goalModifier;

    // Calculate macronutrients (rough estimates)
    const protein = Math.round((goalCalories * 0.25) / 4); // 25% protein
    const fats = Math.round((goalCalories * 0.30) / 9); // 30% fats
    const carbs = Math.round((goalCalories * 0.45) / 4); // 45% carbs

    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      goalCalories: Math.round(goalCalories),
      protein,
      carbs,
      fats
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every(value => value !== "")) {
      calculateCalories();
    }
  };

  const resetForm = () => {
    setFormData({
      age: "",
      gender: "",
      height: "",
      weight: "",
      activityLevel: "",
      goal: ""
    });
    setResults(null);
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
                <Calculator className="h-12 w-12" />
              </div>
              <h1 className="text-4xl font-bold mb-6">Calorie Calculator</h1>
              <p className="text-xl opacity-90">
                Calculate your daily calorie needs based on your goals and activity level
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
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <Label>Gender</Label>
                        <RadioGroup 
                          value={formData.gender} 
                          onValueChange={(value) => setFormData({...formData, gender: value})}
                          className="flex gap-6 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female">Female</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input
                          id="height"
                          type="number"
                          min="120"
                          max="250"
                          value={formData.height}
                          onChange={(e) => setFormData({...formData, height: e.target.value})}
                          placeholder="Enter height in cm"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          type="number"
                          min="30"
                          max="200"
                          step="0.1"
                          value={formData.weight}
                          onChange={(e) => setFormData({...formData, weight: e.target.value})}
                          placeholder="Enter weight in kg"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="activity">Activity Level</Label>
                      <Select value={formData.activityLevel} onValueChange={(value) => setFormData({...formData, activityLevel: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your activity level" />
                        </SelectTrigger>
                        <SelectContent>
                          {activityLevels.map((level) => (
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

                    <div>
                      <Label htmlFor="goal">Goal</Label>
                      <Select value={formData.goal} onValueChange={(value) => setFormData({...formData, goal: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                        <SelectContent>
                          {goals.map((goal) => (
                            <SelectItem key={goal.value} value={goal.value}>
                              {goal.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
                        Calculate Calories
                      </Button>
                      <Button type="button" variant="outline" onClick={resetForm}>
                        Reset
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Results */}
              {results && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Your Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">Basal Metabolic Rate (BMR)</h3>
                        <div className="text-2xl font-bold text-blue-700">{results.bmr} calories/day</div>
                        <p className="text-sm text-blue-600 mt-1">Calories needed at rest</p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-900 mb-2">Total Daily Energy Expenditure</h3>
                        <div className="text-2xl font-bold text-green-700">{results.tdee} calories/day</div>
                        <p className="text-sm text-green-600 mt-1">Calories to maintain current weight</p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-purple-900 mb-2">Goal Calories</h3>
                        <div className="text-2xl font-bold text-purple-700">{results.goalCalories} calories/day</div>
                        <p className="text-sm text-purple-600 mt-1">Recommended daily intake for your goal</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Recommended Macronutrients</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Protein (25%)</span>
                          <span className="font-medium">{results.protein}g</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Carbohydrates (45%)</span>
                          <span className="font-medium">{results.carbs}g</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Fats (30%)</span>
                          <span className="font-medium">{results.fats}g</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {!results && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5" />
                      About Calorie Calculation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">How it works:</h4>
                      <ul className="text-sm space-y-2 text-gray-600">
                        <li>• BMR: Calories your body needs at rest</li>
                        <li>• TDEE: BMR × Activity Level multiplier</li>
                        <li>• Goal calories adjust for weight goals</li>
                      </ul>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        These calculations provide estimates. Individual needs may vary. 
                        Consult a healthcare professional for personalized advice.
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold mb-2">Tips for success:</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Track your food intake consistently</li>
                        <li>• Monitor weight changes weekly</li>
                        <li>• Adjust calories if needed after 2-3 weeks</li>
                        <li>• Focus on nutrient-dense foods</li>
                        <li>• Stay hydrated and get adequate sleep</li>
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

export default CalorieCalculatorPage;