import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, CheckCircle2, Phone, Mail, Hammer, Paintbrush } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroImage from "@/assets/hero-flooring.jpg";
import renovacePredPo from "@/assets/renovace-pred-po-main.jpg";
import pokladkaVinyl from "@/assets/pokladka-vinyl-1.jpg";

const Index = () => {
  const services = [
    {
      title: "Renovace podlah",
      description: "Profesionální renovace dřevěných podlah s dlouholetou zkušeností. Obnovíme staré parkety a vrátíme jim původní krásu.",
      icon: Hammer,
      link: "/sluzby/renovace-podlah",
      image: renovacePredPo,
    },
    {
      title: "Pokládka podlah",
      description: "Odborná pokládka vinylové podlahy a laminátu Praha. Rychlá instalace, dokonalý výsledek a záruka kvality.",
      icon: Paintbrush,
      link: "/sluzby/pokladka-vinylu",
      image: pokladkaVinyl,
    },
  ];

  const benefits = [
    "Dlouholetá praxe v oboru",
    "Profesionální vybavení",
    "Kvalitní materiály",
    "Garance spokojenosti",
    "Rychlá realizace",
    "Férové ceny",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero sekce */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Profesionální pokládka a renovace podlah Praha
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Renovace a pokládka podlah. Praha a okolí do 40 km.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+420736673508">
                  <Button variant="cta" size="xl">
                    <Phone className="h-5 w-5" />
                    Zavolejte nám
                  </Button>
                </a>
                <Link to="/kontakt">
                  <Button variant="outline" size="xl">
                    Nezávazně poptat
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Služby */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Naše služby</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nabízíme komplexní péči o vaše podlahy a venkovní povrchy s důrazem na kvalitu a spolehlivost.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                    <Link to={service.link}>
                      <Button variant="link" className="p-0">
                        Zjistit více →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proč si vybrat nás */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Proč si vybrat DOMÁCÍ POHODU?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Jsme firma s dlouholetou tradicí a stovkami spokojených zákazníků v Praze a okolí. 
                  Specializujeme se na renovace podlah, pokládku vinylové podlahy Praha a broušení parket Praha.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-section rounded-lg p-8">
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Chcete nezávaznou cenovou nabídku?</h3>
                <p className="text-muted-foreground mb-6">
                  Kontaktujte nás telefonicky nebo vyplňte formulář a my se vám ozveme do 24 hodin.
                </p>
                <div className="space-y-3">
                  <a href="tel:+420736673508" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    +420 736 673 508 (Filip Malát)
                  </a>
                  <a href="tel:+420734133866" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    +420 734 133 866 (Václav Čížek)
                  </a>
                  <a href="mailto:domacipohoda.kontakt@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    domacipohoda.kontakt@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA sekce */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Připraveni začít s vaším projektem?</h2>
            <p className="text-xl mb-8 opacity-90">
              Kontaktujte nás ještě dnes pro nezávaznou konzultaci a cenovou nabídku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+420736673508">
                <Button variant="outline" size="xl" className="bg-background text-foreground hover:bg-background/90">
                  <Phone className="h-5 w-5" />
                  Zavolejte nám
                </Button>
              </a>
              <Link to="/kontakt">
                <Button variant="outline" size="xl" className="bg-background text-foreground hover:bg-background/90">
                  Napište nám
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
