import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import parquetImage from "@/assets/parquet-sanding.jpg";

const BrouseniParket = () => {
  const reasons = [
    "Odstranění poškrábaného a opotřebovaného povrchu",
    "Obnova původní barvy a lesku dřeva",
    "Prodloužení životnosti podlahy",
    "Odstranění skvrn a nečistot",
    "Příprava pro nové lakování nebo olejování",
    "Ekonomicky výhodnější než výměna podlahy",
  ];

  const equipment = [
    {
      title: "Moderní brusky",
      description: "Používáme profesionální parkové brusky s odsáváním prachu pro čisté a efektivní broušení.",
    },
    {
      title: "Kvalitní brusivo",
      description: "Výběr správné hrubosti brusiva zajišťuje dokonalý výsledek bez poškození dřeva.",
    },
    {
      title: "Ochranné nátěry",
      description: "Nabízíme laky, oleje a vosky nejvyšší kvality od renomovaných výrobců.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-hero-gradient text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Broušení parket Praha</h1>
              <p className="text-xl mb-8 opacity-90">
                Profesionální broušení parket v Praze a okolí. Oživte své staré parkety a vraťte jim 
                původní krásu pomocí moderních technologií a zkušených řemeslníků.
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
                <h2 className="text-3xl font-bold mb-6">Kdy je potřeba broušení parket?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Broušení parket Praha je nezbytné, když vaše dřevěná podlaha vykazuje známky opotřebení. 
                  Poškrábání, матовost povrchu nebo viditelné skvrny jsou signálem, že je čas na renovaci.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Profesionální broušení parket dokáže obnovit i velmi zanedbané podlahy. Díky našim 
                  zkušenostem a modernímu vybavení dosahujeme výsledků, které překonají vaše očekávání.
                </p>
                <div className="space-y-3">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src={parquetImage} 
                  alt="Broušení parket Praha - profesionální renovace parkové podlahy" 
                  className="rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Broušení parket v praxi
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Naše vybavení a materiály</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {equipment.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-primary/50 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Besprašné broušení</h3>
                    <p className="text-muted-foreground">
                      Všechny naše brusky jsou vybaveny systémem odsávání prachu. Díky tomu je broušení parket Praha 
                      čisté a bezprašné, což oceníte zejména v obydlených prostorách. Minimalizujeme nepořádek 
                      a urychlujeme přípravu pro finální nátěr.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Proces broušení parket</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Příprava prostoru</h3>
                    <p className="text-muted-foreground">
                      Odstranění nábytku, zakrytí dveří a oken proti prachu. Kontrola stavu podlahy 
                      a určení rozsahu prací.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hrubé broušení</h3>
                    <p className="text-muted-foreground">
                      Odstranění starého laku nebo oleje pomocí hrubého brusiva. Vyrovnání nerovností 
                      a odstranění hlubších poškození.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Jemné broušení</h3>
                    <p className="text-muted-foreground">
                      Postupné zjemňování povrchu pomocí různých stupňů brusiva. Dosažení hladkého 
                      a rovnoměrného povrchu připraveného pro nátěr.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tmelení a čištění</h3>
                    <p className="text-muted-foreground">
                      Vyplnění spár a trhlin dřevěným tmelem. Důkladné vyčištění povrchu od prachu 
                      a nečistot před aplikací finálního nátěru.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lakování nebo olejování</h3>
                    <p className="text-muted-foreground">
                      Aplikace ochranného nátěru podle vašeho výběru. Lak zajistí vysoký lesk a odolnost, 
                      olej zdůrazní přirozenou krásu dřeva.
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
                  <h2 className="text-3xl font-bold mb-4">Potřebujete profesionální broušení parket?</h2>
                  <p className="text-lg mb-8 opacity-90">
                    Ozvěte se nám pro nezávaznou konzultaci a cenovou nabídku. Rádi vám poradíme 
                    nejlepší řešení pro vaše parkety.
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

export default BrouseniParket;
