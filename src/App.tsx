import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DonateBlood from "./pages/DonateBlood";
import GetBlood from "./pages/GetBlood";
import BeADonor from "./pages/BeADonor";
import BeAVolunteer from "./pages/BeAVolunteer";
import Donate from "./pages/Donate";
import Contacts from "./pages/Contacts";
import Notice from "./pages/Notice";
import MedicalKnowledge from "./pages/MedicalKnowledge";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate-blood" element={<DonateBlood />} />
            <Route path="/get-blood" element={<GetBlood />} />
            <Route path="/be-a-donor" element={<BeADonor />} />
            <Route path="/be-a-volunteer" element={<BeAVolunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/medical-knowledge" element={<MedicalKnowledge />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;