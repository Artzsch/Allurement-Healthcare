import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import ConsultationForm from "./pages/ConsultationForm";
import RequestStaffingSolutions from "./pages/RequestStaffingSolutions";
import ApplyNow from "./pages/ApplyNow";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consultation" element={<ConsultationForm />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/request-staffing" element={<RequestStaffingSolutions />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;