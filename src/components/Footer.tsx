const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/0ab59fbd-7462-443c-b135-228fd47b2c30.png" 
              alt="The Wise Monkey Logo" 
              className="w-8 h-8"
            />
            <span className="text-lg font-semibold text-foreground">The Wise Monkey</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              Building the future with Wise AI agents and deep tech solutions
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 The Wise Monkey Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;