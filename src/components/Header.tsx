import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">🐵</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">The Wise Monkey</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <Button variant="glow" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;