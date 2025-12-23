import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="fixed top-0 w-full z-50 bg-background/42 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img 
              src="/lovable-uploads/0ab59fbd-7462-443c-b135-228fd47b2c30.png" 
              alt={t('footer.logoAlt')} 
              className="w-10 h-10 rounded-md"
            />
            <h1 className="text-base md:text-xl font-bold text-foreground">{t('footer.brand')}</h1>
          </Link>
          
          <nav className="hidden md:grid grid-cols-4 gap-4 text-center absolute left-1/2 transform -translate-x-1/2">
            <a href="/#about" className="text-foreground/80 hover:text-primary transition-colors">{t('nav.about')}</a>
            <a href="/blog" className="text-foreground/80 hover:text-primary transition-colors">{t('nav.blog')}</a>
            <a href="/#services" className="text-foreground/80 hover:text-primary transition-colors">{t('nav.services')}</a>
            <a href="/#contact" className="text-foreground/80 hover:text-primary transition-colors">{t('nav.contact')}</a>
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
