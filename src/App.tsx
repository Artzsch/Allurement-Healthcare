import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import ConsultationForm from "./pages/ConsultationForm";
import RequestStaffingSolutions from "./pages/RequestStaffingSolutions";
import ApplyNow from "./pages/ApplyNow";
import FAQ from "./pages/FAQ";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import InteractiveBackground from "./components/InteractiveBackground";
import FloatingActionButton from "./components/FloatingActionButton";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="healthcare-theme">
      <TooltipProvider>
        <Toaster />
        <InteractiveBackground />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/consultation-form" element={<ConsultationForm />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/request-staffing-solutions" element={<RequestStaffingSolutions />} />
            <Route path="/apply-now" element={<ApplyNow />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingActionButton />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>;


export default App;
