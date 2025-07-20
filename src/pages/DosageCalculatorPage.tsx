import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calculator, AlertTriangle, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DosageCalculatorPage = () => {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [medication, setMedication] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const medications = [
    { name: "Acetaminophen (Paracetamol)", adult: "325-650mg every 4-6 hours", pediatric: "10-15mg/kg every 4-6 hours" },
    { name: "Ibuprofen", adult: "200-400mg every 4-6 hours", pediatric: "5-10mg/kg every 6-8 hours" },
    { name: "Aspirin", adult: "325-650mg every 4 hours", pediatric: "Not recommended under 16" },
    { name: "Amoxicillin", adult: "250-500mg every 8 hours", pediatric: "20-40mg/kg/day divided" },
  ];

  const calculateDosage = () => {
    if (!weight || !age || !medication) {
      setResult("Please fill in all fields");
      return;
    }

    const selectedMed = medications.find(med => med.name === medication);
    if (!selectedMed) return;

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);

    if (ageNum >= 18) {
      setResult(`Recommended adult dosage: ${selectedMed.adult}`);
    } else {
      setResult(`Recommended pediatric dosage: ${selectedMed.pediatric} (Weight: ${weightNum}kg)`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Calculator className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Medication Dosage Calculator</h1>
            <p className="text-xl text-muted-foreground">
              Calculate appropriate medication dosages based on weight and age
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This calculator is for educational purposes only. Always consult with a healthcare professional 
              before taking any medication. Do not exceed recommended dosages.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Dosage Calculator</CardTitle>
                <CardDescription>Enter patient information to calculate dosage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Enter weight in kg"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="age">Age (years)</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="medication">Medication</Label>
                  <Select value={medication} onValueChange={setMedication}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select medication" />
                    </SelectTrigger>
                    <SelectContent>
                      {medications.map((med) => (
                        <SelectItem key={med.name} value={med.name}>
                          {med.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateDosage} className="w-full">
                  Calculate Dosage
                </Button>

                {result && (
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>{result}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Safety Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">General Guidelines:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Always follow your doctor's prescription</li>
                    <li>• Check for drug allergies before taking medication</li>
                    <li>• Read medication labels carefully</li>
                    <li>• Don't exceed maximum daily doses</li>
                    <li>• Consider drug interactions with other medications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">When to Seek Help:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Severe side effects or allergic reactions</li>
                    <li>• Symptoms worsen or don't improve</li>
                    <li>• Accidental overdose</li>
                    <li>• Uncertainty about dosage</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Emergency Contact:</h3>
                  <p className="text-sm text-muted-foreground">
                    Poison Control: 1-800-222-1222<br />
                    Emergency Services: 911
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DosageCalculatorPage;