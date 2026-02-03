import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Index from "./pages/Index";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import Logo from "./components/logo";
import Process from "./components/Process";
import Onboard from "./components/Onboard";

const queryClient = new QueryClient();

/* 🔥 Scroll to Top Logic (inline) */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  // Check if user has visited before
  const hasVisited = localStorage.getItem("hasVisitedBefore");
  
  // Only show loading if this is the first visit
  const [isLoading, setIsLoading] = useState(!hasVisited);

  const handleLoadComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
      // Mark that user has visited
      localStorage.setItem("hasVisitedBefore", "true");
    }, 200);
  };

  return (
    <>
      {/* Loader - only shows on first visit */}
      {isLoading && (
        <Logo 
          onLoadComplete={handleLoadComplete}
          loadingDuration={2500}
        />
      )}

      {/* App Content */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in",
        }}
      >
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />

            <BrowserRouter>
              {/* ✅ Scroll resets on every route change */}
              <ScrollToTop />

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/work" element={<Work />} />
                <Route path="/process" element={<Process />} />
                <Route path="/onboard" element={<Onboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>

          </TooltipProvider>
        </QueryClientProvider>
      </div>
    </>
  );
};

export default App;