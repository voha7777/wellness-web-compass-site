import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DiabetesRiskPage = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ score: number; risk: string; recommendations: string[] } | null>(null);

  const questions = [
    {
      id: "age",
      question: "What is your age?",
      options: [
        { value: "0", label: "Under 45 years" },
        { value: "5", label: "45-54 years" },
        { value: "7", label: "55-64 years" },
        { value: "9", label: "65 years or older" },
      ]
    },
    {
      id: "weight",
      question: "Are you overweight?",
      options: [
        { value: "0", label: "No, normal weight" },
        { value: "5", label: "Slightly overweight" },
        { value: "9", label: "Moderately overweight" },
        { value: "13", label: "Very overweight" },
      ]
    },
    {
      id: "exercise",
      question: "How often do you exercise?",
      options: [
        { value: "0", label: "Daily" },
        { value: "2", label: "3-4 times per week" },
        { value: "4", label: "1-2 times per week" },
        { value: "6", label: "Rarely or never" },
      ]
    },
    {
      id: "family",
      question: "Do you have a family history of diabetes?",
      options: [
        { value: "0", label: "No family history" },
        { value: "3", label: "Grandparent, aunt, or uncle" },
        { value: "5", label: "Parent or sibling" },
        { value: "8", label: "Both parents" },
      ]
    },
    {
      id: "blood_pressure",
      question: "Do you have high blood pressure?",
      options: [
        { value: "0", label: "No" },
        { value: "2", label: "Taking medication for it" },
        { value: "4", label: "Yes, not on medication" },
      ]
    },
  ];

  const calculateRisk = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + parseInt(value), 0);
    
    let risk = "";
    let recommendations: string[] = [];

    if (totalScore < 9) {
      risk = "Low Risk";
      recommendations = [
        "Maintain a healthy lifestyle",
        "Continue regular exercise",
        "Keep a balanced diet",
        "Monitor weight regularly"
      ];
    } else if (totalScore < 15) {
      risk = "Moderate Risk";
      recommendations = [
        "Increase physical activity to at least 150 minutes per week",
        "Focus on weight management",
        "Reduce refined sugars in diet",
        "Get regular health checkups",
        "Consider pre-diabetes screening"
      ];
    } else {
      risk = "High Risk";
      recommendations = [
        "Consult with a healthcare provider immediately",
        "Get comprehensive diabetes screening",
        "Work with a dietitian for meal planning",
        "Start structured exercise program",
        "Monitor blood glucose levels",
        "Consider diabetes prevention program"
      ];
    }

    setResult({ score: totalScore, risk, recommendations });
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isComplete = questions.every(q => answers[q.id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Diabetes Risk Assessment</h1>
            <p className="text-xl text-muted-foreground">
              Evaluate your risk factors for developing Type 2 diabetes
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This assessment is for educational purposes only and does not replace professional medical advice. 
              Consult your healthcare provider for proper diabetes screening.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment Questions</CardTitle>
                <CardDescription>Answer all questions to calculate your diabetes risk</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {questions.map((question, index) => (
                  <div key={question.id}>
                    <Label className="text-base font-semibold mb-3 block">
                      {index + 1}. {question.question}
                    </Label>
                    <RadioGroup
                      value={answers[question.id] || ""}
                      onValueChange={(value) => handleAnswerChange(question.id, value)}
                    >
                      {question.options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                          <Label htmlFor={`${question.id}-${option.value}`}>{option.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}

                <Button 
                  onClick={calculateRisk} 
                  disabled={!isComplete}
                  className="w-full mt-6"
                >
                  Calculate Risk Score
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Results</CardTitle>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        Score: {result.score}
                      </div>
                      <div className={`text-xl font-semibold mb-4 ${
                        result.risk === "Low Risk" ? "text-green-600" :
                        result.risk === "Moderate Risk" ? "text-yellow-600" : "text-red-600"
                      }`}>
                        {result.risk}
                      </div>
                      <Progress 
                        value={(result.score / 30) * 100} 
                        className="w-full mb-4"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
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
                    Complete the assessment to see your results
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Understanding Diabetes Risk Factors</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Modifiable Risk Factors:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Physical inactivity</li>
                  <li>• Overweight or obesity</li>
                  <li>• High blood pressure</li>
                  <li>• Poor diet high in processed foods</li>
                  <li>• Smoking</li>
                  <li>• High stress levels</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Non-modifiable Risk Factors:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Age (45 years or older)</li>
                  <li>• Family history of diabetes</li>
                  <li>• Ethnicity (certain groups at higher risk)</li>
                  <li>• History of gestational diabetes</li>
                  <li>• Polycystic ovary syndrome (PCOS)</li>
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

export default DiabetesRiskPage;