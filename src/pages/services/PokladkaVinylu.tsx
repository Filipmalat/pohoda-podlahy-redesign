import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import vinylImage from "@/assets/vinyl-installation.jpg";

const PokladkaVinylu = () => {
  const vinylBenefits = [
    "Snadná údržba a čištění",
    "Široká škála designů a barev",
    "Tichá chůze díky tlumicím vlastnostem",
    "Vhodné pro podlahové vytápění",
  ];

  const laminatBenefits = [
    "Vysoká odolnost proti poškrábání",
    "Jednoduchá a rychlá pokládka (plovoucím způsobem)",
    "Široká nabídka dekorů",
    "Výborný poměr cena/výkon",
    "Snadná údržba",
    "Dobrá kompatibilita s podlahovým vytápěním",
  ];

  const woodBenefits = [
    "Přirozený a luxusní vzhled",
    "Dlouhá životnost – možnost opakované renovace",
    "Výborné tepelně-izolační vlastnosti",
    "Příjemný pocit při chůzi",
    "Zvyšuje hodnotu nemovitosti",
    "Vhodné pro podlahové vytápění (u vícevrstvých podlah)",
  ];


  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-hero-gradient text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Pokládka podlah Praha</h1>
              <p className="text-xl mb-8 opacity-90">
                Odborná pokládka vinylové, dřevěné a laminátové podlahy v Praze a okolí. Rychlá instalace, profesionální přístup a záruka kvality za férové ceny.
              </p>
              <a href="tel:+420736673508">
                <Button variant="outline" size="xl" className="bg-background text-foreground hover:bg-background/90">
                  <Phone className="h-5 w-5" />
                  Nezávazně poptat
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={vinylImage} 
                  alt="Pokládka vinylové podlahy Praha - profesionální instalace vinylu" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Proč zvolit vinylovou podlahu?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Pokládka vinylové podlahy je moderní řešení pro každý interiér. Vinyl kombinuje 
                  estetiku přírodních materiálů s praktičností a odolností syntetických podlah.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Vinylové podlahy jsou ideální volbou pro kuchyně i obývací prostory. 
                  Díky své odolnosti vůči vlhkosti a snadné údržbě jsou oblíbenou volbou pro domácnosti i komerční prostory.
                </p>
                <div className="space-y-3 mb-8">
                  <h3 className="font-semibold">Výhody vinylu:</h3>
                  {vinylBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Proč zvolit laminátovou podlahu?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Pokládka laminátové podlahy je cenově dostupné a přitom velmi praktické řešení pro moderní interiéry. Laminát dokáže věrně imitovat dřevo, kámen i další přírodní materiály, a to za zlomek ceny.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Laminátové podlahy jsou ideální volbou pro obývací pokoje, chodby i ložnice. Díky své tvrdosti a odolnosti proti poškrábání jsou vhodné do domácností s vyšším provozem.
                </p>
                <div className="space-y-3 mb-8">
                  <h3 className="font-semibold">Výhody laminátu:</h3>
                  {laminatBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Proč zvolit dřevěnou podlahu?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Pokládka dřevěné podlahy je investice do krásy, přirozenosti a dlouhé životnosti. Dřevo přináší do interiéru teplo a eleganci, kterou žádný syntetický materiál nedokáže zcela nahradit.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Dřevěné podlahy jsou ideální volbou pro obývací pokoje, ložnice i reprezentativní prostory. Lze je opakovaně renovovat, takže mohou sloužit desítky let.
                </p>
                <div className="space-y-3">
                  <h3 className="font-semibold">Výhody dřeva:</h3>
                  {woodBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Ceník */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Ceník</h2>
              <p className="text-center text-muted-foreground mb-6">*Ceny neobsahují materiál</p>
              <Card>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Služba</TableHead>
                        <TableHead className="text-right">Cena od</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Pokládka lepeného vinylu</TableCell>
                        <TableCell className="text-right">275 Kč/m²</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pokládka click vinylu</TableCell>
                        <TableCell className="text-right">235 Kč/m²</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pokládka laminátové podlahy</TableCell>
                        <TableCell className="text-right">235 Kč/m²</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pokládka dřevěné podlahy se zámky</TableCell>
                        <TableCell className="text-right">235 Kč/m²</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pokládka lepené dřevěné podlahy</TableCell>
                        <TableCell className="text-right">295 Kč/m²</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Montáž lišt</TableCell>
                        <TableCell className="text-right">80 Kč/m</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nivelace</TableCell>
                        <TableCell className="text-right">od 185 Kč/m²</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Penetrace a příprava podkladu</TableCell>
                        <TableCell className="text-right">od 45 Kč/m²</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Zaměření</TableCell>
                        <TableCell className="text-right font-semibold">Zdarma</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">Plánujete pokládku vinylu nebo laminátu?</h2>
                  <p className="text-lg mb-8 opacity-90">
                    Kontaktujte nás pro bezplatnou konzultaci a cenovou nabídku na míru. 
                    Poradíme vám s výběrem materiálu a zajistíme profesionální instalaci.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+420736673508">
                      <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90">
                        <Phone className="h-5 w-5" />
                        +420 736 673 508
                      </Button>
                    </a>
                    <Link to="/kontakt">
                      <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90">
                        Napsat e-mail
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PokladkaVinylu;
