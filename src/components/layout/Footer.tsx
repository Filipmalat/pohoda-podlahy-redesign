import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* O společnosti */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DOMÁCÍ POHODA</h3>
            <p className="text-muted-foreground text-sm">
              Profesionální renovace podlah, pokládka vinylové podlahy a laminátu, 
              broušení parket a vysokotlaké čištění v Praze a okolí do 40 km.
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Naše služby</h3>
            <nav className="space-y-2">
              <Link to="/sluzby/renovace-podlah" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Renovace podlah
              </Link>
              <Link to="/sluzby/pokladka-vinylu" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Pokládka vinylu a laminátu
              </Link>
              <Link to="/sluzby/brouseni-parket" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Broušení parket
              </Link>
              <Link to="/sluzby/vysotlake-cisteni" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Vysokotlaké čištění
              </Link>
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <a href="tel:+420736673508" className="text-muted-foreground hover:text-primary transition-colors block">
                    +420 736 673 508 (Filip Malát)
                  </a>
                  <a href="tel:+420734133866" className="text-muted-foreground hover:text-primary transition-colors block">
                    +420 734 133 866 (Václav Čížek)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a href="mailto:domacipohoda.kontakt@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  domacipohoda.kontakt@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Praha a okolí do 40 km
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DOMÁCÍ POHODA. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
