import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StaatsRegelwerk from "./pages/StaatsRegelwerk";
import FraktionsRegelwerk from "./pages/FraktionsRegelwerk";
import StaatsGesetz from "./pages/StaatsGesetz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Router>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/staats-regelwerk" element={<StaatsRegelwerk />} />
          <Route path="/fraktions-regelwerk" element={<FraktionsRegelwerk />} />
          <Route path="/staats-gesetz" element={<StaatsGesetz />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
