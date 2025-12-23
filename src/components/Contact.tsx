import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-6 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t('contact.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 border-primary/20 flex flex-col">
              <CardHeader className="text-center flex-1">
                <div className="text-3xl mb-3">📧</div>
                <CardTitle className="text-lg">{t('contact.cards.email.title')}</CardTitle>
                <p className="text-muted-foreground mt-2">{t('contact.cards.email.value')}</p>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 border-primary/20 flex flex-col">
              <CardHeader className="text-center flex-1">
                <div className="text-3xl mb-3">💬</div>
                <CardTitle className="text-lg">{t('contact.cards.chat.title')}</CardTitle>
                <p className="text-muted-foreground mt-2">{t('contact.cards.chat.value')}</p>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 border-primary/20 flex flex-col">
              <CardHeader className="text-center flex-1">
                <div className="text-3xl mb-3">🚀</div>
                <CardTitle className="text-lg">{t('contact.cards.quick.title')}</CardTitle>
                <p className="text-muted-foreground mt-2">{t('contact.cards.quick.value')}</p>
              </CardHeader>
            </Card>
          </div>
          
          <div className="space-y-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => window.open('https://form.typeform.com/to/rJ0fsdyt', '_blank')}
            >
              {t('contact.cta')}
            </Button>
            <p className="text-sm text-muted-foreground">
              {t('contact.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;