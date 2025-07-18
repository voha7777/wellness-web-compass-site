
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DiseasesPage from "./pages/DiseasesPage";
import MedicationsPage from "./pages/MedicationsPage";
import ArticlesPage from "./pages/ArticlesPage";
import ToolsPage from "./pages/ToolsPage";
import HypertensionPage from "./pages/HypertensionPage";
import BMICalculatorPage from "./pages/BMICalculatorPage";
import SymptomCheckerPage from "./pages/SymptomCheckerPage";
import DrugInteractionsPage from "./pages/DrugInteractionsPage";
import NutritionPage from "./pages/NutritionPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Disease & Conditions Routes */}
          <Route path="/diseases" element={<DiseasesPage />} />
          <Route path="/diseases/common" element={<NotFound />} />
          <Route path="/diseases/symptoms" element={<NotFound />} />
          <Route path="/diseases/chronic" element={<NotFound />} />
          <Route path="/diseases/all" element={<NotFound />} />
          <Route path="/diseases/hypertension" element={<HypertensionPage />} />
          <Route path="/diseases/:diseaseId" element={<NotFound />} />
          
          {/* Medications & Drugs Routes */}
          <Route path="/medications" element={<MedicationsPage />} />
          <Route path="/medications/index" element={<NotFound />} />
          <Route path="/medications/prescription" element={<NotFound />} />
          <Route path="/medications/otc" element={<NotFound />} />
          <Route path="/medications/interactions" element={<NotFound />} />
          <Route path="/medications/:medicationId" element={<NotFound />} />
          
          {/* Articles Routes */}
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/latest" element={<NotFound />} />
          <Route path="/articles/featured" element={<NotFound />} />
          <Route path="/articles/news" element={<NotFound />} />
          <Route path="/articles/topics" element={<NotFound />} />
          <Route path="/articles/:category/:articleId" element={<NotFound />} />
          
          {/* Surveys & Tools Routes */}
          <Route path="/surveys" element={<NotFound />} />
          <Route path="/surveys/assessments" element={<NotFound />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/bmi-calculator" element={<BMICalculatorPage />} />
          <Route path="/tools/symptom-checker" element={<SymptomCheckerPage />} />
          <Route path="/tools/drug-interactions" element={<DrugInteractionsPage />} />
          <Route path="/tools/calorie-calculator" element={<NotFound />} />
          <Route path="/tools/heart-rate-calculator" element={<NotFound />} />
          <Route path="/tools/dosage-calculator" element={<NotFound />} />
          <Route path="/tools/diabetes-risk" element={<NotFound />} />
          <Route path="/tools/depression-test" element={<NotFound />} />
          <Route path="/tools/heart-health-assessment" element={<NotFound />} />
          <Route path="/tools/drug-alternatives" element={<NotFound />} />
          <Route path="/tools/first-aid" element={<NotFound />} />
          <Route path="/tools/emergency-contacts" element={<NotFound />} />
          
          {/* Health Topics Routes */}
          <Route path="/topics" element={<NotFound />} />
          <Route path="/topics/:topicId" element={<NotFound />} />
          
          {/* Nutrition Routes */}
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/nutrition/:topicId" element={<NotFound />} />
          
          {/* About/Contact Routes */}
          <Route path="/about" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
