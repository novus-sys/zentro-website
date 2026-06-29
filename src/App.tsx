import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import WorkmarkLanding from "./pages/WorkmarkLanding";
import Universities from "./pages/Universities";
import WorkmarkCreator from "./pages/WorkmarkCreator";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Trust from "./pages/Trust";
import NotFound from "./pages/NotFound";

// Layout components
import CorporateNavbar from "@/components/layout/Navbar";
import CorporateFooter from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";

const queryClient = new QueryClient();

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Global corporate layout (Navbar + Footer)
function CorporateLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CorporateNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <CorporateFooter />
    </div>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Corporate Platform - Unified Single-Page Landing */}
            <Route element={<CorporateLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/student" element={<WorkmarkLanding />} />
              <Route path="/universities" element={<Universities />} />
              <Route path="/workmark-creator" element={<WorkmarkCreator />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/trust" element={<Trust />} />
            </Route>

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
