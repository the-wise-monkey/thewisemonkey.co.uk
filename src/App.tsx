import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const supportedLocales = ["en", "es"] as const;
type SupportedLocale = typeof supportedLocales[number];

const LocaleRoute = () => {
  const params = useParams();
  const { i18n } = useTranslation();
  const locale = (params.locale || "en").toLowerCase().slice(0, 2) as SupportedLocale;
  const effective = supportedLocales.includes(locale) ? locale : "en";

  useEffect(() => {
    if (i18n.resolvedLanguage !== effective) {
      void i18n.changeLanguage(effective);
    }
  }, [effective, i18n]);

  return <Index />;
};

const RootRedirect = () => {
  let preferred = "en";
  try {
    const stored = localStorage.getItem("i18nextLng");
    if (stored) preferred = stored.toLowerCase().slice(0, 2);
    else if (typeof navigator !== "undefined") preferred = (navigator.language || "en").toLowerCase().slice(0, 2);
  } catch {}
  if (!supportedLocales.includes(preferred as SupportedLocale)) preferred = "en";
  return <Navigate to={`/${preferred}`} replace />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path=":locale" element={<LocaleRoute />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
