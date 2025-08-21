import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0ab59fbd-7462-443c-b135-228fd47b2c30.png" 
              alt={t('footer.logoAlt')} 
              className="w-10 h-10"
            />
            <h1 className="text-base md:text-xl font-bold text-foreground">{t('footer.brand')}</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">{t('nav.about')}</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">{t('nav.services')}</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">{t('nav.contact')}</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;