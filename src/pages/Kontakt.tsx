import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Kontakt = () => {
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
                Ozvěte se nám telefonicky nebo e-mailem.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
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
                          <a href="mailto:fivapodlahy@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            fivapodlahy@gmail.com
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
