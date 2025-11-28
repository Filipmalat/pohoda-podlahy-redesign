import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import renovacePredPo from "@/assets/renovace-pred-po-main.jpg";
import pokladkaVinyl1 from "@/assets/pokladka-vinyl-1.jpg";
import brouseniStroj from "@/assets/brouseni-stroj.jpg";
import renovaceObyvak1 from "@/assets/renovace-obyvak-1.jpg";
import pokladkaVinyl2 from "@/assets/pokladka-vinyl-2.jpg";
import renovaceKuchyn from "@/assets/renovace-kuchyn.jpg";

const NasePrace = () => {
  const projects = [
    {
      title: "Renovace masivní podlahy",
      image: renovacePredPo,
      service: "Renovace podlah",
    },
    {
      title: "Pokládka vinylové podlahy",
      image: pokladkaVinyl1,
      service: "Pokládka podlah",
    },
    {
      title: "Broušení parket",
      image: brouseniStroj,
      service: "Renovace podlah",
    },
    {
      title: "Renovace parket v obývacím pokoji",
      image: renovaceObyvak1,
      service: "Renovace podlah",
    },
    {
      title: "Pokládka vinylové podlahy",
      image: pokladkaVinyl2,
      service: "Pokládka podlah",
    },
    {
      title: "Renovace kuchyň",
      image: renovaceKuchyn,
      service: "Renovace podlah",
    },
  ];

  const testimonials = [
    {
      name: "Jana Nováková",
      location: "Praha 4",
      rating: 5,
      text: "Skvělá práce! Naše staré parkety vypadají jako nové. Pan Malát byl velmi profesionální a práce proběhla rychle a čistě. Určitě doporučuji!",
      service: "Renovace podlah",
    },
    {
      name: "Petr Dvořák",
      location: "Praha 6",
      rating: 5,
      text: "Vynikající služba. Pokládka vinylové podlahy proběhla přesně podle domluvy. Kvalita práce je na vysoké úrovni a cena byla férová.",
      service: "Pokládka podlah",
    },
    {
      name: "Martin Svoboda",
      location: "Praha 10",
      rating: 5,
      text: "Renovace parket proběhla bez problémů. Pánové byli šikovní, spolehliví a po sobě uklidili. Výsledek předčil naše očekávání.",
      service: "Renovace podlah",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-hero-gradient text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Naše práce</h1>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Realizované projekty</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.service}`}
                    className="w-full h-80 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{project.service}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Reference od našich zákazníků</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Kvalita naší práce se odráží v recenzích spokojených zákazníků. 
              Každá reference nás motivuje k dalšímu zlepšování našich služeb.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-xs text-primary mt-1">{testimonial.service}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-section">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Co nás odlišuje?</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      Jsme rodinná firma s důrazem na kvalitu, spolehlivost a osobní přístup ke každému zákazníkovi.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 text-left mb-8">
                      <div>
                        <h3 className="font-semibold mb-2 text-lg">Profesionalita</h3>
                        <p className="text-muted-foreground">
                          Dlouholeté zkušenosti a průběžné vzdělávání v oboru zajišťují špičkovou kvalitu našich služeb.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-lg">Moderní technologie</h3>
                        <p className="text-muted-foreground">
                          Používáme nejmodernější vybavení a materiály pro dosažení perfektních výsledků.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-lg">Férové ceny</h3>
                        <p className="text-muted-foreground">
                          Transparentní oceňování bez skrytých poplatků. Kvalita za rozumnou cenu.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-lg">Záruka spokojenosti</h3>
                        <p className="text-muted-foreground">
                          Stojíme si za kvalitou naší práce a poskytujeme záruku na všechny realizované projekty.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Chcete být další v naší galerii spokojených zákazníků?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Kontaktujte nás ještě dnes a proměňme vaši vizi v realitu. 
              Těšíme se na spolupráci s vámi!
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

export default NasePrace;
