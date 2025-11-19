import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RenovacePodlah from "./pages/services/RenovacePodlah";
import PokladkaVinylu from "./pages/services/PokladkaVinylu";
import BrouseniParket from "./pages/services/BrouseniParket";
import VysotlakeCisteni from "./pages/services/VysotlakeCisteni";
import NasePrace from "./pages/NasePrace";
import Kontakt from "./pages/Kontakt";
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
          <Route path="/sluzby/renovace-podlah" element={<RenovacePodlah />} />
          <Route path="/sluzby/pokladka-vinylu" element={<PokladkaVinylu />} />
          <Route path="/sluzby/brouseni-parket" element={<BrouseniParket />} />
          <Route path="/sluzby/vysotlake-cisteni" element={<VysotlakeCisteni />} />
          <Route path="/nase-prace" element={<NasePrace />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
