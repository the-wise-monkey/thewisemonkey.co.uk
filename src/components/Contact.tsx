import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Build Your Wise AI Agent?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's discuss how we can create an intelligent Wise AI solution tailored to your needs. 
            Every great Wise AI agent starts with a conversation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader className="text-center">
                <div className="text-3xl mb-3">📧</div>
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">hello@thewisemonkey.co.uk</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-primary/20">
              <CardHeader className="text-center">
                <div className="text-3xl mb-3">💬</div>
                <CardTitle className="text-lg">Let's Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Schedule a free consultation</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-primary/20">
              <CardHeader className="text-center">
                <div className="text-3xl mb-3">🚀</div>
                <CardTitle className="text-lg">Quick Start</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Get a prototype in 2 weeks</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => window.open('https://form.typeform.com/to/rJ0fsdyt', '_blank')}
            >
              Start Your Wise AI Project
            </Button>
            <p className="text-sm text-muted-foreground">
              No commitment required. Let's explore the possibilities together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;