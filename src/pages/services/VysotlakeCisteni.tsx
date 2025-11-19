import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import cleaningImage from "@/assets/pressure-cleaning.jpg";

const VysotlakeCisteni = () => {
  const surfaces = [
    {
      title: "Střechy",
      description: "Odstranění mechu, řas a nečistot ze střešních krytin. Prodloužení životnosti střechy.",
    },
    {
      title: "Fasády",
      description: "Čištění fasád všech typů - omítka, obklad, dřevo. Obnova původního vzhledu budovy.",
    },
    {
      title: "Zámková dlažba",
      description: "Hloubkové čištění venkovních ploch. Odstranění skvrn, mechu a plísní.",
    },
    {
      title: "Terasy a balkony",
      description: "Profesionální čištění terasových ploch z dřeva, kamene či kompozitu.",
    },
  ];

  const advantages = [
    "Ekologické čištění bez chemie",
    "Šetrné k povrchovým materiálům",
    "Efektivní odstranění všech nečistot",
    "Rychlá realizace",
    "Profesionální vybavení",
    "Dostupné ceny",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-hero-gradient text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Vysokotlaké čištění Praha</h1>
              <p className="text-xl mb-8 opacity-90">
                Profesionální vysokotlaké čištění střech, fasád a zámkové dlažby v Praze a okolí. 
                Efektivní odstranění nečistot, mechu a řas s šetrným přístupem k povrchům.
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
                  src={cleaningImage} 
                  alt="Vysokotlaké čištění Praha - čištění zámkové dlažby, střech a fasád" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Co je vysokotlaké čištění?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Vysokotlaké čištění je moderní metoda odstranění nečistot pomocí proudu vody pod vysokým tlakem. 
                  Tato technologie umožňuje efektivní čištění různých povrchů bez použití agresivních chemikálií.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Vysokotlaké čištění střech a zámkové dlažby je šetrné k životnímu prostředí a zároveň 
                  vysoce účinné. Dokáže odstranit i silně usazené nečistoty, mech, řasy a plísně.
                </p>
                <div className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Jaké povrchy čistíme?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {surfaces.map((surface, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{surface.title}</h3>
                    <p className="text-muted-foreground text-sm">{surface.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Proč je vysokotlaké čištění důležité?</h2>
              
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Ochrana před poškozením</h3>
                    <p className="text-muted-foreground">
                      Mech a řasy na střechách mohou zadržovat vlhkost a postupně poškozovat střešní krytinu. 
                      Pravidelné vysokotlaké čištění střech prodlužuje jejich životnost a předchází nákladným opravám.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Zvýšení estetické hodnoty</h3>
                    <p className="text-muted-foreground">
                      Čistá fasáda a zámková dlažba výrazně zlepšují celkový vzhled nemovitosti. 
                      Vysokotlaké čištění zámkové dlažby obnoví původní barvu a čistotu povrchu.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Bezpečnost</h3>
                    <p className="text-muted-foreground">
                      Zarostlé a znečištěné povrchy mohou být kluzké a nebezpečné. Pravidelné čištění 
                      zajišťuje bezpečnost pohybu po venkovních plochách.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Hygienické důvody</h3>
                    <p className="text-muted-foreground">
                      Plísně a mikroorganismy rostoucí na venkovních površích mohou negativně ovlivňovat 
                      zdraví obyvatel. Vysokotlaké čištění tyto nežádoucí organismy efektivně odstraňuje.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Jak probíhá vysokotlaké čištění?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Obhlídka a konzultace</h3>
                    <p className="text-muted-foreground">
                      Provedeme obhlídku čištěného povrchu, určíme rozsah prací a doporučíme 
                      vhodný postup čištění.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Příprava prostoru</h3>
                    <p className="text-muted-foreground">
                      Zajistíme ochranu okolních ploch a osazení. Připravíme profesionální vybavení 
                      pro vysokotlaké čištění.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Samotné čištění</h3>
                    <p className="text-muted-foreground">
                      Provedeme důkladné čištění s nastavením optimálního tlaku pro daný typ povrchu. 
                      Zaručujeme šetrný, ale účinný proces.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kontrola a závěr</h3>
                    <p className="text-muted-foreground">
                      Po dokončení zkontrolujeme kvalitu provedené práce a odstraníme případné 
                      nečistoty z okolí. Předáme vám dokonale čistý povrch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">Potřebujete vysokotlaké čištění?</h2>
                  <p className="text-lg mb-8 opacity-90">
                    Kontaktujte nás pro bezplatnou konzultaci a cenovou nabídku. Rádi vám 
                    poradíme nejlepší způsob čištění vašich povrchů.
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

export default VysotlakeCisteni;
