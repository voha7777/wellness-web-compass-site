import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Brain, AlertTriangle, Phone, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DepressionTestPage = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<{ score: number; severity: string; recommendations: string[] } | null>(null);

  const questions = [
    {
      id: "mood",
      question: "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
    },
    {
      id: "interest",
      question: "Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?",
    },
    {
      id: "sleep",
      question: "Over the last 2 weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
    },
    {
      id: "energy",
      question: "Over the last 2 weeks, how often have you been bothered by feeling tired or having little energy?",
    },
    {
      id: "appetite",
      question: "Over the last 2 weeks, how often have you been bothered by poor appetite or overeating?",
    },
    {
      id: "self_worth",
      question: "Over the last 2 weeks, how often have you been bothered by feeling bad about yourself or that you are a failure?",
    },
    {
      id: "concentration",
      question: "Over the last 2 weeks, how often have you had trouble concentrating on things like reading or watching TV?",
    },
    {
      id: "movement",
      question: "Over the last 2 weeks, how often have you been moving or speaking so slowly that others noticed, or being restless?",
    },
    {
      id: "thoughts",
      question: "Over the last 2 weeks, how often have you had thoughts that you would be better off dead or hurting yourself?",
    },
  ];

  const options = [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" },
  ];

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    
    let severity = "";
    let recommendations: string[] = [];

    if (totalScore <= 4) {
      severity = "Minimal Depression";
      recommendations = [
        "Your responses suggest minimal signs of depression",
        "Continue maintaining healthy lifestyle habits",
        "Practice stress management techniques",
        "Stay connected with friends and family",
        "Monitor your mental health regularly"
      ];
    } else if (totalScore <= 9) {
      severity = "Mild Depression";
      recommendations = [
        "Consider lifestyle changes like regular exercise",
        "Practice mindfulness or meditation",
        "Maintain a regular sleep schedule",
        "Consider talking to a counselor or therapist",
        "Stay socially connected"
      ];
    } else if (totalScore <= 14) {
      severity = "Moderate Depression";
      recommendations = [
        "Strongly consider professional counseling or therapy",
        "Consult with your primary care doctor",
        "Consider joining a support group",
        "Maintain regular exercise and healthy eating",
        "Avoid alcohol and drugs"
      ];
    } else if (totalScore <= 19) {
      severity = "Moderately Severe Depression";
      recommendations = [
        "Seek professional help from a mental health provider",
        "Consider both therapy and medication options",
        "Inform trusted friends or family about your condition",
        "Create a safety plan if having difficult thoughts",
        "Consider intensive outpatient treatment"
      ];
    } else {
      severity = "Severe Depression";
      recommendations = [
        "Seek immediate professional help",
        "Contact a mental health crisis line if needed",
        "Consider medication evaluation with a psychiatrist",
        "Intensive therapy or possible hospitalization may be needed",
        "Ensure you have a strong support system"
      ];
    }

    setResult({ score: totalScore, severity, recommendations });
  };

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isComplete = questions.every(q => answers[q.id] !== undefined);
  const hasThoughtsOfHarm = answers["thoughts"] > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Brain className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Depression Screening Test</h1>
            <p className="text-xl text-muted-foreground">
              PHQ-9 Depression Assessment Tool
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This screening tool is not a diagnostic test. If you're experiencing thoughts of self-harm 
              or suicide, please contact emergency services immediately or call the National Suicide Prevention Lifeline: 988
            </AlertDescription>
          </Alert>

          {hasThoughtsOfHarm && (
            <Alert className="mb-8 border-red-500">
              <Phone className="h-4 w-4" />
              <AlertDescription className="text-red-700">
                <strong>Crisis Resources:</strong><br />
                • National Suicide Prevention Lifeline: 988<br />
                • Crisis Text Line: Text HOME to 741741<br />
                • Emergency Services: 911
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Depression Assessment</CardTitle>
                <CardDescription>Please answer all questions based on the last 2 weeks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {questions.map((question, index) => (
                  <div key={question.id}>
                    <Label className="text-sm font-semibold mb-3 block">
                      {index + 1}. {question.question}
                    </Label>
                    <RadioGroup
                      value={answers[question.id]?.toString() || ""}
                      onValueChange={(value) => handleAnswerChange(question.id, parseInt(value))}
                    >
                      {options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value.toString()} id={`${question.id}-${option.value}`} />
                          <Label htmlFor={`${question.id}-${option.value}`} className="text-sm">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}

                <Button 
                  onClick={calculateScore} 
                  disabled={!isComplete}
                  className="w-full mt-6"
                >
                  Get Results
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
                        Score: {result.score}/27
                      </div>
                      <div className={`text-xl font-semibold mb-4 ${
                        result.score <= 4 ? "text-green-600" :
                        result.score <= 9 ? "text-yellow-600" : 
                        result.score <= 14 ? "text-orange-600" : "text-red-600"
                      }`}>
                        {result.severity}
                      </div>
                      <Progress 
                        value={(result.score / 27) * 100} 
                        className="w-full mb-4"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Heart className="w-4 h-4 mr-2 text-primary" />
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
              <CardTitle>Understanding Depression</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Common Symptoms:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Persistent sad or empty mood</li>
                  <li>• Loss of interest in activities</li>
                  <li>• Changes in sleep patterns</li>
                  <li>• Fatigue or loss of energy</li>
                  <li>• Feelings of worthlessness or guilt</li>
                  <li>• Difficulty concentrating</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">When to Seek Help:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Symptoms persist for 2+ weeks</li>
                  <li>• Symptoms interfere with daily life</li>
                  <li>• Thoughts of self-harm or suicide</li>
                  <li>• Substance abuse increases</li>
                  <li>• Relationships are suffering</li>
                  <li>• Work/school performance declines</li>
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

export default DepressionTestPage;