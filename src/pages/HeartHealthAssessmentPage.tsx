import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, Activity, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HeartHealthAssessmentPage = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    systolic: "",
    diastolic: "",
    cholesterol: "",
    hdl: "",
    smoking: "",
    diabetes: "",
    exercise: "",
    familyHistory: "",
  });
  
  const [result, setResult] = useState<{
    riskScore: number;
    riskLevel: string;
    riskPercentage: number;
    recommendations: string[];
  } | null>(null);

  const calculateHeartRisk = () => {
    // Simplified Framingham Risk Score calculation
    let score = 0;
    
    // Age scoring
    const age = parseInt(formData.age);
    if (formData.gender === "male") {
      if (age >= 20 && age <= 34) score += -9;
      else if (age >= 35 && age <= 39) score += -4;
      else if (age >= 40 && age <= 44) score += 0;
      else if (age >= 45 && age <= 49) score += 3;
      else if (age >= 50 && age <= 54) score += 6;
      else if (age >= 55 && age <= 59) score += 8;
      else if (age >= 60 && age <= 64) score += 10;
      else if (age >= 65) score += 11;
    } else {
      if (age >= 20 && age <= 34) score += -7;
      else if (age >= 35 && age <= 39) score += -3;
      else if (age >= 40 && age <= 44) score += 0;
      else if (age >= 45 && age <= 49) score += 3;
      else if (age >= 50 && age <= 54) score += 6;
      else if (age >= 55 && age <= 59) score += 8;
      else if (age >= 60 && age <= 64) score += 10;
      else if (age >= 65) score += 12;
    }

    // Blood pressure scoring
    const systolic = parseInt(formData.systolic);
    if (systolic < 120) score += 0;
    else if (systolic <= 129) score += 0;
    else if (systolic <= 139) score += 1;
    else if (systolic <= 159) score += 1;
    else if (systolic >= 160) score += 2;

    // Total cholesterol scoring
    const cholesterol = parseInt(formData.cholesterol);
    if (cholesterol < 160) score += 0;
    else if (cholesterol <= 199) score += 4;
    else if (cholesterol <= 239) score += 7;
    else if (cholesterol <= 279) score += 9;
    else if (cholesterol >= 280) score += 11;

    // HDL scoring
    const hdl = parseInt(formData.hdl);
    if (hdl >= 60) score += -1;
    else if (hdl >= 50) score += 0;
    else if (hdl >= 40) score += 1;
    else if (hdl < 40) score += 2;

    // Smoking
    if (formData.smoking === "yes") score += 8;

    // Diabetes
    if (formData.diabetes === "yes") score += 6;

    // Exercise (protective factor)
    if (formData.exercise === "regular") score -= 2;
    else if (formData.exercise === "occasional") score -= 1;

    // Family history
    if (formData.familyHistory === "yes") score += 4;

    // Convert score to risk percentage (simplified)
    let riskPercentage = Math.max(1, Math.min(30, score * 2));
    
    let riskLevel = "";
    let recommendations: string[] = [];

    if (riskPercentage < 5) {
      riskLevel = "Low Risk";
      recommendations = [
        "Maintain your current healthy lifestyle",
        "Continue regular exercise and balanced diet",
        "Monitor blood pressure and cholesterol annually",
        "Avoid smoking and limit alcohol consumption"
      ];
    } else if (riskPercentage < 10) {
      riskLevel = "Moderate Risk";
      recommendations = [
        "Increase physical activity to 150+ minutes per week",
        "Focus on heart-healthy diet (Mediterranean style)",
        "Monitor blood pressure and cholesterol every 6 months",
        "Consider stress management techniques",
        "Maintain healthy weight"
      ];
    } else if (riskPercentage < 20) {
      riskLevel = "High Risk";
      recommendations = [
        "Consult with a cardiologist or primary care physician",
        "Consider medication for blood pressure or cholesterol",
        "Implement intensive lifestyle changes",
        "Monitor heart health markers every 3 months",
        "Consider cardiac stress testing"
      ];
    } else {
      riskLevel = "Very High Risk";
      recommendations = [
        "Seek immediate medical consultation",
        "Likely need medication management",
        "Consider comprehensive cardiac evaluation",
        "Implement aggressive lifestyle interventions",
        "Regular monitoring by healthcare team"
      ];
    }

    setResult({
      riskScore: score,
      riskLevel,
      riskPercentage,
      recommendations
    });
  };

  const isFormComplete = Object.values(formData).every(value => value !== "");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Heart Health Assessment</h1>
            <p className="text-xl text-muted-foreground">
              Evaluate your cardiovascular disease risk factors
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This assessment provides an estimate based on established risk factors. 
              It does not replace professional medical evaluation. Consult your healthcare provider for comprehensive heart health screening.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Health Information</CardTitle>
                <CardDescription>Please provide accurate information for best results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Your age"
                      value={formData.age}
                      onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="systolic">Systolic BP (mmHg)</Label>
                    <Input
                      id="systolic"
                      type="number"
                      placeholder="120"
                      value={formData.systolic}
                      onChange={(e) => setFormData(prev => ({ ...prev, systolic: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="diastolic">Diastolic BP (mmHg)</Label>
                    <Input
                      id="diastolic"
                      type="number"
                      placeholder="80"
                      value={formData.diastolic}
                      onChange={(e) => setFormData(prev => ({ ...prev, diastolic: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cholesterol">Total Cholesterol (mg/dL)</Label>
                    <Input
                      id="cholesterol"
                      type="number"
                      placeholder="200"
                      value={formData.cholesterol}
                      onChange={(e) => setFormData(prev => ({ ...prev, cholesterol: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hdl">HDL Cholesterol (mg/dL)</Label>
                    <Input
                      id="hdl"
                      type="number"
                      placeholder="50"
                      value={formData.hdl}
                      onChange={(e) => setFormData(prev => ({ ...prev, hdl: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Do you smoke?</Label>
                  <RadioGroup
                    value={formData.smoking}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, smoking: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="smoking-yes" />
                      <Label htmlFor="smoking-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="smoking-no" />
                      <Label htmlFor="smoking-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Do you have diabetes?</Label>
                  <RadioGroup
                    value={formData.diabetes}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, diabetes: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="diabetes-yes" />
                      <Label htmlFor="diabetes-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="diabetes-no" />
                      <Label htmlFor="diabetes-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Exercise frequency</Label>
                  <RadioGroup
                    value={formData.exercise}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, exercise: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="regular" id="exercise-regular" />
                      <Label htmlFor="exercise-regular">Regular (3+ times/week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="occasional" id="exercise-occasional" />
                      <Label htmlFor="exercise-occasional">Occasional (1-2 times/week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rarely" id="exercise-rarely" />
                      <Label htmlFor="exercise-rarely">Rarely or never</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Family history of heart disease?</Label>
                  <RadioGroup
                    value={formData.familyHistory}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, familyHistory: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="family-yes" />
                      <Label htmlFor="family-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="family-no" />
                      <Label htmlFor="family-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button 
                  onClick={calculateHeartRisk} 
                  disabled={!isFormComplete}
                  className="w-full mt-6"
                >
                  Calculate Heart Risk
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Heart Health Results</CardTitle>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {result.riskPercentage}%
                      </div>
                      <div className={`text-xl font-semibold mb-4 ${
                        result.riskPercentage < 5 ? "text-green-600" :
                        result.riskPercentage < 10 ? "text-yellow-600" :
                        result.riskPercentage < 20 ? "text-orange-600" : "text-red-600"
                      }`}>
                        {result.riskLevel}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        10-year cardiovascular disease risk
                      </p>
                      <Progress 
                        value={Math.min(result.riskPercentage * 3.33, 100)} 
                        className="w-full mb-4"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Activity className="w-4 h-4 mr-2 text-primary" />
                        Recommendations
                      </h3>
                      <ul className="space-y-2">
                        {result.recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            • {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    Complete the assessment to see your heart health risk
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Heart-Healthy Lifestyle Tips</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Diet</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Eat plenty of fruits and vegetables</li>
                  <li>• Choose whole grains over refined</li>
                  <li>• Include omega-3 rich fish</li>
                  <li>• Limit saturated and trans fats</li>
                  <li>• Reduce sodium intake</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Exercise</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 150 minutes moderate aerobic activity</li>
                  <li>• 2 days of strength training</li>
                  <li>• Include flexibility exercises</li>
                  <li>• Start slowly and progress gradually</li>
                  <li>• Find activities you enjoy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Lifestyle</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Don't smoke or quit smoking</li>
                  <li>• Limit alcohol consumption</li>
                  <li>• Manage stress effectively</li>
                  <li>• Get adequate sleep (7-9 hours)</li>
                  <li>• Maintain healthy weight</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HeartHealthAssessmentPage;