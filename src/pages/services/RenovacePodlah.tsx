import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import beforeAfterImage from "@/assets/renovace-pred-po-main.jpg";

const RenovacePodlah = () => {
  const process = [
    "Prohlídka a konzultace na místě",
    "Příprava podkladu a odstranění starého nátěru",
    "Vyrovnání nerovností a oprava poškozených míst",
    "Broušení a leštění povrchu",
    "Aplikace ochranné vrstvy (lak, olej, vosk)",
    "Finální úprava a kontrola kvality",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero sekce */}
        <section className="bg-hero-gradient text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Renovace podlah Praha</h1>
              <p className="text-xl mb-8 opacity-90">
                Profesionální renovace dřevěných podlah, která vrátí vašim starým parketám a podlahám jejich původní krásu a eleganci. 
                Specializujeme se na renovace podlah Praha a okolí do 40 km.
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

        {/* Popis služby */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Co zahrnuje renovace podlah?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Renovace podlah Praha je komplexní proces, který zahrnuje obnovu dřevěných podlah včetně parket, 
                  prken a dalších dřevěných povrchů. Pomocí moderních technologií a kvalitních materiálů dokážeme 
                  obnovit i velmi poškozené podlahy.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Naše služby renovace podlah zahrnují broušení, lakování, olejování nebo voskování podle vašich 
                  požadavků. Používáme pouze certifikované materiály šetrné ke zdraví i životnímu prostředí.
                </p>
                <div className="space-y-3">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src={beforeAfterImage} 
                  alt="Renovace podlah před a po - ukázka renovace dřevěné podlahy v Praze" 
                  className="rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Ukázka renovace podlahy - před a po
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ceník */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Ceník renovace parket</h2>
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
                        <TableCell>Broušení parket</TableCell>
                        <TableCell className="text-right">od 330 Kč/m²</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Tmelení</TableCell>
                        <TableCell className="text-right">od 90 Kč/m² (2 vrstvy od 140 Kč/m²)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nanesení ochranné vrstvy - olej/lak (2 vrstvy)</TableCell>
                        <TableCell className="text-right">310 Kč/m²</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Výhody */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Výhody profesionální renovace podlah</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Úspora nákladů</h3>
                  <p className="text-muted-foreground">
                    Renovace podlah Praha je ekonomicky výhodnější než výměna za nové. Ušetříte až 70 % nákladů 
                    oproti kompletní výměně podlahy.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Zachování kvality</h3>
                  <p className="text-muted-foreground">
                    Staré dřevěné podlahy jsou často kvalitnější než moderní materiály. Renovací zachováte 
                    původní charakter a hodnotu vašeho interiéru.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Rychlá realizace</h3>
                  <p className="text-muted-foreground">
                    Renovace podlah probíhá rychleji než kompletní výměna. Standardní byt dokážeme zrenovovat 
                    během 2-3 dnů.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">Máte zájem o renovaci podlah v Praze?</h2>
                  <p className="text-lg mb-8 opacity-90">
                    Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku. 
                    Rádi vám poradíme nejlepší řešení pro vaše podlahy.
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

export default RenovacePodlah;
