import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import vinylImage from "@/assets/vinyl-installation.jpg";

const PokladkaVinylu = () => {
  const benefits = [
    "Odolnost proti vlhkosti a vodě",
    "Snadná údržba a čištění",
    "Široká škála designů a barev",
    "Tichá chůze díky tlumicím vlastnostem",
    "Dlouhá životnost (15-25 let)",
    "Vhodné pro podlahové vytápění",
  ];

  const types = [
    {
      title: "Vinylové lamely",
      description: "Click systém umožňující rychlou a jednoduchou instalaci. Ideální pro DIY projekty i profesionální pokládku.",
    },
    {
      title: "Vinylové desky",
      description: "Luxusní vzhled s vysokou odolností. Perfektní volba pro obchodní prostory i domácnosti.",
    },
    {
      title: "Laminátové podlahy",
      description: "Ekonomická alternativa s přirozeným vzhledem dřeva. Vhodné pro všechny typy interiérů.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-hero-gradient text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Pokládka vinylu a laminátu Praha</h1>
              <p className="text-xl mb-8 opacity-90">
                Odborná pokládka vinylové podlahy a laminátu v Praze a okolí. Rychlá instalace, 
                profesionální přístup a záruka kvality za férové ceny.
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
                  Pokládka vinylové podlahy Praha je moderní řešení pro každý interiér. Vinyl kombinuje 
                  estetiku přírodních materiálů s praktičností a odolností syntetických podlah.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Vinylové podlahy jsou ideální volbou pro koupelny, kuchyně i obývací prostory. 
                  Díky své odolnosti vůči vlhkosti a snadné údržbě jsou oblíbenou volbou pro domácnosti 
                  s dětmi i domácími mazlíčky.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center">Typy podlah, které pokládáme</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {types.map((type, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Proces pokládky vinylové podlahy</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Příprava podkladu</h3>
                    <p className="text-muted-foreground">
                      Důkladná příprava podkladu je základ úspěšné pokládky vinylu. Vyrovnáme nerovnosti, 
                      očistíme povrch a zajistíme optimální podmínky pro instalaci.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Aklimatizace materiálu</h3>
                    <p className="text-muted-foreground">
                      Před pokládkou necháváme materiál aklimatizovat v prostředí, kde bude instalován. 
                      Zaručíme tím dlouhodobou stabilitu podlahy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Profesionální instalace</h3>
                    <p className="text-muted-foreground">
                      Pokládka vinylové podlahy Praha probíhá s maximální precizností. Dbáme na správné 
                      dilatační spáry a perfektní spojení jednotlivých dílů.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Finální úpravy</h3>
                    <p className="text-muted-foreground">
                      Po dokončení pokládky provedeme instalaci soklů a přechodových lišt. 
                      Vše důkladně zkontrolujeme a předáme k užívání.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section">
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
