import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import DonateBlood from './pages/DonateBlood';
import GetBlood from './pages/GetBlood';
import BeAVolunteer from './pages/BeAVolunteer';
import Donate from './pages/Donate';
import Contacts from './pages/Contacts';
import Notice from './pages/Notice';
import MedicalKnowledge from './pages/MedicalKnowledge';
import AboutUs from './pages/AboutUs';
import Hospitals from './pages/Hospitals';
import NotFound from './pages/NotFound';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const queryClient = new QueryClient();

const App = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
    setShowInstallPrompt(false);
  };

  return (
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
              <Route path="/be-a-volunteer" element={<BeAVolunteer />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/medical-knowledge" element={<MedicalKnowledge />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>

        <AlertDialog open={showInstallPrompt} onOpenChange={setShowInstallPrompt}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Install BOBDO App</AlertDialogTitle>
              <AlertDialogDescription>
                Install our app for a better experience and quick access to blood donation services.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Not Now</AlertDialogCancel>
              <AlertDialogAction onClick={handleInstall}>Install</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;