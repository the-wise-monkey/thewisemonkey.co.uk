import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Compass, Home, Mail } from "lucide-react";

import heroAiImage from "@/assets/hero-tech-cyan.jpg";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroAiImage}
          alt={t('hero.bgAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      <div className="absolute inset-0 overflow-hidden -z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8">
            <span className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-background/30 px-4 py-1 text-sm text-primary backdrop-blur">
              404
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            <span className="text-foreground">{t('notFound.title')}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            {t('notFound.message')}
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            {t('notFound.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="hero" size="lg" className="text-lg px-8 py-3">
              <Link to="/">{t('notFound.cta')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <a href="/#contact">{t('notFound.ctaSecondary')}</a>
            </Button>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3 text-left">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <Compass className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground">{t('notFound.hint')}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <Home className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground">
                  <Link to="/" className="underline underline-offset-4 hover:text-primary transition-colors">{t('notFound.cta')}</Link>
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground">
                  <a href="/#contact" className="underline underline-offset-4 hover:text-primary transition-colors">{t('notFound.ctaSecondary')}</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
