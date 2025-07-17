
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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
          <Route path="/diseases" element={<NotFound />} />
          <Route path="/diseases/common" element={<NotFound />} />
          <Route path="/diseases/symptoms" element={<NotFound />} />
          <Route path="/diseases/chronic" element={<NotFound />} />
          <Route path="/diseases/all" element={<NotFound />} />
          <Route path="/diseases/:diseaseId" element={<NotFound />} />
          
          {/* Medications & Drugs Routes */}
          <Route path="/medications" element={<NotFound />} />
          <Route path="/medications/index" element={<NotFound />} />
          <Route path="/medications/prescription" element={<NotFound />} />
          <Route path="/medications/otc" element={<NotFound />} />
          <Route path="/medications/interactions" element={<NotFound />} />
          <Route path="/medications/:medicationId" element={<NotFound />} />
          
          {/* Articles Routes */}
          <Route path="/articles" element={<NotFound />} />
          <Route path="/articles/latest" element={<NotFound />} />
          <Route path="/articles/featured" element={<NotFound />} />
          <Route path="/articles/news" element={<NotFound />} />
          <Route path="/articles/topics" element={<NotFound />} />
          <Route path="/articles/:category/:articleId" element={<NotFound />} />
          
          {/* Surveys & Tools Routes */}
          <Route path="/surveys" element={<NotFound />} />
          <Route path="/surveys/assessments" element={<NotFound />} />
          <Route path="/tools" element={<NotFound />} />
          <Route path="/tools/bmi-calculator" element={<NotFound />} />
          <Route path="/tools/symptom-checker" element={<NotFound />} />
          <Route path="/tools/drug-interactions" element={<NotFound />} />
          
          {/* Health Topics Routes */}
          <Route path="/topics" element={<NotFound />} />
          <Route path="/topics/:topicId" element={<NotFound />} />
          
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
