import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Conversational AI Agents",
      description: "Intelligent chatbots and virtual assistants that understand context, maintain conversations, and provide meaningful interactions.",
      icon: "💬",
      features: ["Natural Language Processing", "Multi-turn Conversations", "Sentiment Analysis", "Integration Ready"]
    },
    {
      title: "Automation Agents",
      description: "Smart automation systems that handle complex workflows, make decisions, and adapt to changing conditions.",
      icon: "⚡",
      features: ["Workflow Automation", "Decision Making", "Error Handling", "Performance Monitoring"]
    },
    {
      title: "Data Analysis Agents",
      description: "Sophisticated agents that analyze vast amounts of data, identify patterns, and generate actionable insights.",
      icon: "📊",
      features: ["Pattern Recognition", "Predictive Analytics", "Real-time Processing", "Custom Reports"]
    },
    {
      title: "Integration Solutions",
      description: "Seamless integration of AI agents into your existing systems, ensuring smooth deployment and operation.",
      icon: "🔗",
      features: ["API Integration", "Legacy System Support", "Cloud Deployment", "Monitoring & Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our AI Agent Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            While we excel in blockchain and deep tech solutions, we're currently focused on 
            creating AI agents that solve real business problems. Each solution is crafted 
            with precision and designed to scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">{service.icon}</div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;