import { Card, CardContent } from "@/components/ui/card";
import studioImage from "@/assets/office-team-diverse.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-6 text-foreground">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('about.bullets.expertiseTitle')}</h3>
                  <p className="text-muted-foreground">{t('about.bullets.expertiseDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('about.bullets.customTitle')}</h3>
                  <p className="text-muted-foreground">{t('about.bullets.customDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('about.bullets.learningTitle')}</h3>
                  <p className="text-muted-foreground">{t('about.bullets.learningDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden border-primary/20 shadow-glow">
              <CardContent className="p-0">
                <img 
                  src={studioImage} 
                  alt={t('about.imageAlt')} 
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
