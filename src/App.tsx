import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
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
          <Route path="/about" element={
            <div className="min-h-screen bg-background">
              <Navigation />
              <About />
            </div>
          } />
          <Route path="/features" element={
            <div className="min-h-screen bg-background">
              <Navigation />
              <Features />
            </div>
          } />
          <Route path="/games" element={
            <div className="min-h-screen bg-background">
              <Navigation />
              <Games />
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen bg-background">
              <Navigation />
              <Contact />
            </div>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
