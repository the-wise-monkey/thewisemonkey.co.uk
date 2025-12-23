import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

import heroAiImage from "@/assets/hero-ai.jpg";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroAiImage} 
          alt={t('hero.bgAlt')} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
            <span className="text-foreground">{t('hero.title.part1')}</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('hero.title.emphasis')}
            </span>{" "}
            <span className="text-foreground">{t('hero.title.part2')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => window.open('https://form.typeform.com/to/rJ0fsdyt', '_blank')}
            >
              {t('hero.ctaPrimary')}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 hidden">
              {t('hero.ctaSecondary')}
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-medium text-primary mb-2">50+</div>
              <div className="text-muted-foreground">{t('hero.stats.deployed')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-medium text-primary mb-2">99%</div>
              <div className="text-muted-foreground">{t('hero.stats.satisfaction')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-medium text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">{t('hero.stats.monitoring')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
