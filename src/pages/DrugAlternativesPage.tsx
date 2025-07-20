import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, Pill, AlertTriangle, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DrugAlternativesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [results, setResults] = useState<any[]>([]);

  const drugDatabase = [
    {
      name: "Advil (Ibuprofen)",
      category: "pain-relief",
      alternatives: [
        { name: "Acetaminophen", type: "Generic", reason: "Different mechanism, safer for stomach", price: "Lower" },
        { name: "Naproxen", type: "Generic", reason: "Longer-lasting action", price: "Similar" },
        { name: "Aspirin", type: "Generic", reason: "Additional cardiovascular benefits", price: "Lower" },
        { name: "Willow bark extract", type: "Natural", reason: "Natural anti-inflammatory", price: "Variable" },
      ]
    },
    {
      name: "Lipitor (Atorvastatin)",
      category: "cholesterol",
      alternatives: [
        { name: "Simvastatin", type: "Generic", reason: "Similar efficacy, lower cost", price: "Much Lower" },
        { name: "Rosuvastatin", type: "Generic", reason: "More potent cholesterol reduction", price: "Lower" },
        { name: "Red yeast rice", type: "Natural", reason: "Natural statin alternative", price: "Variable" },
        { name: "Pravastatin", type: "Generic", reason: "Fewer drug interactions", price: "Lower" },
      ]
    },
    {
      name: "Nexium (Esomeprazole)",
      category: "acid-reflux",
      alternatives: [
        { name: "Omeprazole", type: "Generic", reason: "Same drug class, much cheaper", price: "Much Lower" },
        { name: "Ranitidine", type: "Generic", reason: "Different mechanism, H2 blocker", price: "Lower" },
        { name: "Famotidine", type: "Generic", reason: "H2 blocker, fewer side effects", price: "Lower" },
        { name: "DGL Licorice", type: "Natural", reason: "Natural stomach lining protection", price: "Variable" },
      ]
    },
    {
      name: "Xanax (Alprazolam)",
      category: "anxiety",
      alternatives: [
        { name: "Lorazepam", type: "Generic", reason: "Similar action, different duration", price: "Lower" },
        { name: "Buspirone", type: "Generic", reason: "Non-addictive anxiety medication", price: "Lower" },
        { name: "Sertraline", type: "Generic", reason: "Long-term anxiety treatment", price: "Lower" },
        { name: "L-theanine", type: "Natural", reason: "Natural calming supplement", price: "Variable" },
      ]
    },
    {
      name: "Adderall (Amphetamine)",
      category: "adhd",
      alternatives: [
        { name: "Methylphenidate", type: "Generic", reason: "Different stimulant mechanism", price: "Lower" },
        { name: "Atomoxetine", type: "Generic", reason: "Non-stimulant ADHD medication", price: "Lower" },
        { name: "Modafinil", type: "Generic", reason: "Wakefulness promoter", price: "Variable" },
        { name: "L-tyrosine", type: "Natural", reason: "Natural focus enhancement", price: "Much Lower" },
      ]
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "pain-relief", label: "Pain Relief" },
    { value: "cholesterol", label: "Cholesterol" },
    { value: "acid-reflux", label: "Acid Reflux" },
    { value: "anxiety", label: "Anxiety" },
    { value: "adhd", label: "ADHD" },
  ];

  const searchAlternatives = () => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const filtered = drugDatabase.filter(drug => {
      const matchesSearch = drug.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "all" || drug.category === category;
      return matchesSearch && matchesCategory;
    });

    setResults(filtered);
  };

  const getPriceColor = (price: string) => {
    switch (price) {
      case "Much Lower": return "text-green-600";
      case "Lower": return "text-green-500";
      case "Similar": return "text-yellow-600";
      case "Higher": return "text-orange-600";
      case "Variable": return "text-gray-600";
      default: return "text-gray-600";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Generic": return "bg-blue-100 text-blue-800";
      case "Brand": return "bg-purple-100 text-purple-800";
      case "Natural": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Pill className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Drug Alternatives Finder</h1>
            <p className="text-xl text-muted-foreground">
              Find generic alternatives and natural options for your medications
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This tool is for informational purposes only. Always consult with your healthcare provider 
              or pharmacist before switching medications. Do not stop or change medications without medical supervision.
            </AlertDescription>
          </Alert>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search for Drug Alternatives</CardTitle>
              <CardDescription>Enter a medication name to find alternatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="drug-search">Medication Name</Label>
                  <Input
                    id="drug-search"
                    placeholder="e.g., Advil, Lipitor, Nexium..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && searchAlternatives()}
                  />
                </div>
                <div className="md:w-48">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={searchAlternatives} className="md:mt-6">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {results.length > 0 && (
            <div className="space-y-6">
              {results.map((drug, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{drug.name}</span>
                      <Badge variant="outline">{categories.find(c => c.value === drug.category)?.label}</Badge>
                    </CardTitle>
                    <CardDescription>Alternative medications and supplements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {drug.alternatives.map((alt: any, altIndex: number) => (
                        <Card key={altIndex} className="border border-border">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-foreground">{alt.name}</h4>
                              <Badge className={getTypeColor(alt.type)}>{alt.type}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{alt.reason}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">Cost Comparison:</span>
                              <span className={`text-sm font-medium ${getPriceColor(alt.price)}`}>
                                {alt.price}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {searchTerm && results.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <Info className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No alternatives found</h3>
                <p className="text-muted-foreground">
                  Try searching for a different medication or check the spelling. 
                  Our database includes common brand-name medications.
                </p>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Why Consider Alternatives?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Cost Savings</h4>
                  <p className="text-sm text-muted-foreground">Generic medications can cost 80-85% less than brand names</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Different Side Effects</h4>
                  <p className="text-sm text-muted-foreground">Alternative medications may have fewer or different side effects</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Drug Interactions</h4>
                  <p className="text-sm text-muted-foreground">Some alternatives may have fewer interactions with other medications</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Natural Options</h4>
                  <p className="text-sm text-muted-foreground">Natural supplements may provide gentler alternatives for some conditions</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Considerations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Consult Your Doctor</h4>
                  <p className="text-sm text-muted-foreground">Always discuss alternatives with your healthcare provider first</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Timing Matters</h4>
                  <p className="text-sm text-muted-foreground">Some medications require gradual tapering before switching</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Monitor Effects</h4>
                  <p className="text-sm text-muted-foreground">Track how you respond to any new medication or supplement</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Insurance Coverage</h4>
                  <p className="text-sm text-muted-foreground">Check if alternatives are covered by your insurance plan</p>
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

export default DrugAlternativesPage;