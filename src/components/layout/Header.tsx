import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">DOMÁCÍ POHODA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Domů
            </NavLink>
            <div className="relative group">
              <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Služby
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-background border rounded-lg shadow-lg">
                <div className="p-2">
                  <NavLink
                    to="/sluzby/renovace-podlah"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary rounded transition-colors"
                  >
                    Renovace podlah
                  </NavLink>
                  <NavLink
                    to="/sluzby/pokladka-vinylu"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary rounded transition-colors"
                  >
                    Pokládka podlah
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink
              to="/nase-prace"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Naše práce
            </NavLink>
            <NavLink
              to="/kontakt"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Kontakt
            </NavLink>
            <a href="tel:+420736673508">
              <Button variant="cta" size="default" className="ml-4">
                <Phone className="h-4 w-4" />
                Zavolejte nám
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t">
            <NavLink
              to="/"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded transition-colors"
              activeClassName="text-primary bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Domů
            </NavLink>
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-foreground/80 mb-2">Služby</div>
              <div className="pl-4 space-y-2">
                <NavLink
                  to="/sluzby/renovace-podlah"
                  className="block py-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Renovace podlah
                </NavLink>
                <NavLink
                  to="/sluzby/pokladka-vinylu"
                  className="block py-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pokládka podlah
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/nase-prace"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded transition-colors"
              activeClassName="text-primary bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Naše práce
            </NavLink>
            <NavLink
              to="/kontakt"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded transition-colors"
              activeClassName="text-primary bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </NavLink>
            <div className="px-4 pt-2">
              <a href="tel:+420736673508" className="block">
                <Button variant="cta" size="default" className="w-full">
                  <Phone className="h-4 w-4" />
                  Zavolejte nám
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
