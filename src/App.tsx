
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
          <Route path="/diseases/common" element={<DiseasesPage />} />
          <Route path="/diseases/symptoms" element={<DiseasesPage />} />
          <Route path="/diseases/chronic" element={<DiseasesPage />} />
          <Route path="/diseases/all" element={<DiseasesPage />} />
          <Route path="/diseases/hypertension" element={<HypertensionPage />} />
          <Route path="/diseases/:diseaseId" element={<HypertensionPage />} />
          
          {/* Medications & Drugs Routes */}
          <Route path="/medications" element={<MedicationsPage />} />
          <Route path="/medications/index" element={<MedicationsPage />} />
          <Route path="/medications/prescription" element={<MedicationsPage />} />
          <Route path="/medications/otc" element={<MedicationsPage />} />
          <Route path="/medications/interactions" element={<DrugInteractionsPage />} />
          <Route path="/medications/:medicationId" element={<MedicationsPage />} />
          
          {/* Articles Routes */}
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/latest" element={<ArticlesPage />} />
          <Route path="/articles/featured" element={<ArticlesPage />} />
          <Route path="/articles/news" element={<ArticlesPage />} />
          <Route path="/articles/topics" element={<ArticlesPage />} />
          <Route path="/articles/:category/:articleId" element={<ArticlesPage />} />
          
          {/* Surveys & Tools Routes */}
          <Route path="/surveys" element={<ToolsPage />} />
          <Route path="/surveys/assessments" element={<ToolsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/bmi-calculator" element={<BMICalculatorPage />} />
          <Route path="/tools/symptom-checker" element={<SymptomCheckerPage />} />
          <Route path="/tools/drug-interactions" element={<DrugInteractionsPage />} />
          <Route path="/tools/calorie-calculator" element={<ToolsPage />} />
          <Route path="/tools/heart-rate-calculator" element={<ToolsPage />} />
          <Route path="/tools/dosage-calculator" element={<ToolsPage />} />
          <Route path="/tools/diabetes-risk" element={<ToolsPage />} />
          <Route path="/tools/depression-test" element={<ToolsPage />} />
          <Route path="/tools/heart-health-assessment" element={<ToolsPage />} />
          <Route path="/tools/drug-alternatives" element={<ToolsPage />} />
          <Route path="/tools/first-aid" element={<ToolsPage />} />
          <Route path="/tools/emergency-contacts" element={<ToolsPage />} />
          
          {/* Health Topics Routes */}
          <Route path="/topics" element={<ArticlesPage />} />
          <Route path="/topics/:topicId" element={<ArticlesPage />} />
          
          {/* Nutrition Routes */}
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/nutrition/:topicId" element={<NutritionPage />} />
          
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
