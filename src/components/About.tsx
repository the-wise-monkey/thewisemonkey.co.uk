import { Card, CardContent } from "@/components/ui/card";
import studioImage from "@/assets/office-team-happy.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Meet The Wise Monkey
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a deep tech software development studio with expertise spanning Wise AI agents, 
              blockchain technologies, and advanced software solutions. While we build across 
              multiple cutting-edge domains, we're currently focused on creating intelligent 
              Wise AI agents that don't just automate tasks—they think, learn, and evolve with your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Deep Tech Expertise</h3>
                  <p className="text-muted-foreground">Wise AI agents, blockchain, and advanced software solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Custom Solutions</h3>
                  <p className="text-muted-foreground">Tailored AI agents that fit your unique business requirements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Continuous Learning</h3>
                  <p className="text-muted-foreground">Our agents improve over time, adapting to your changing needs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden border-primary/20 shadow-glow">
              <CardContent className="p-0">
                <img 
                  src={studioImage} 
                  alt="The Wise Monkey Studio" 
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
            
            {/* Floating Tech Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/70 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;