import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t('services.items.automation.title'),
      description: t('services.items.automation.description'),
      icon: "⚡",
      features: t('services.items.automation.features', { returnObjects: true }) as string[],
    },
    {
      title: t('services.items.conversational.title'),
      description: t('services.items.conversational.description'),
      icon: "💬",
      features: t('services.items.conversational.features', { returnObjects: true }) as string[],
    },
    {
      title: t('services.items.data.title'),
      description: t('services.items.data.description'),
      icon: "📊",
      features: t('services.items.data.features', { returnObjects: true }) as string[],
    },
    {
      title: t('services.items.integration.title'),
      description: t('services.items.integration.description'),
      icon: "🔗",
      features: t('services.items.integration.features', { returnObjects: true }) as string[],
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4 text-foreground">{t('services.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
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
