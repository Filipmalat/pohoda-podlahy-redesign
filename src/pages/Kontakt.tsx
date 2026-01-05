import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Zpráva odeslána!",
        description: "Děkujeme za váš zájem. Ozveme se vám do 24 hodin.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Chyba při odesílání",
        description: "Zkuste to prosím znovu nebo nás kontaktujte telefonicky.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-hero-gradient text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Kontaktujte nás</h1>
              <p className="text-xl opacity-90">
                Máte zájem o naše služby nebo chcete nezávaznou cenovou nabídku? 
                Ozvěte se nám telefonicky, e-mailem nebo vyplňte kontaktní formulář.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Kontaktní informace */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Kontaktní údaje</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Telefon</h3>
                          <a href="tel:+420736673508" className="text-muted-foreground hover:text-primary transition-colors block">
                            +420 736 673 508 (Filip Malát)
                          </a>
                          <a href="tel:+420734133866" className="text-muted-foreground hover:text-primary transition-colors block">
                            +420 734 133 866 (Václav Čížek)
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">E-mail</h3>
                          <a href="mailto:domacipohoda.kontakt@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            domacipohoda.kontakt@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Oblast působení</h3>
                          <p className="text-muted-foreground">
                            Praha a okolí do 40 km
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Dostupnost</h3>
                          <p className="text-muted-foreground">
                            Po-Pá: 7:00 - 18:00<br />
                            So: 8:00 - 14:00<br />
                            Ne: Po domluvě
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-8 bg-section">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-lg">Rychlá odpověď</h3>
                    <p className="text-muted-foreground mb-4">
                      Snažíme se odpovědět na všechny dotazy do 24 hodin. 
                      V pracovní dny obvykle reagujeme během několika hodin.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Pro urgentní případy nás prosím kontaktujte telefonicky.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Kontaktní formulář */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Napište nám</h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Jméno a příjmení *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jan Novák"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jan.novak@email.cz"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+420 123 456 789"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Zpráva *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Popište váš dotaz nebo požadavek..."
                          className="mt-2 min-h-[150px]"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        Odesláním formuláře souhlasíte se zpracováním osobních údajů 
                        pro účely komunikace a poskytnutí cenové nabídky.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Často kladené otázky</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Jak dlouho trvá realizace?</h3>
                    <p className="text-muted-foreground text-sm">
                      Závisí na rozsahu prací. Standardní byt zvládneme během 2-3 dnů. 
                      Přesný odhad vám sdělíme po prohlídce.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Poskytujete cenové nabídky zdarma?</h3>
                    <p className="text-muted-foreground text-sm">
                      Ano, konzultace a cenová nabídka jsou vždy zdarma a nezávazné.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Jezdíte i mimo Prahu?</h3>
                    <p className="text-muted-foreground text-sm">
                      Ano, poskytujeme služby v Praze a okolí do vzdálenosti 40 km.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Jaké máte platební podmínky?</h3>
                    <p className="text-muted-foreground text-sm">
                      Platba hotově nebo převodem po dokončení prací. U větších projektů možnost zálohy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
