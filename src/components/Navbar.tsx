import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Funcionalidades", path: "/features" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contactos", path: "/contact" },
    { name: "Carreiras", path: "/careers" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Package className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">TaskNest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-primary font-semibold"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Agendar Demonstração</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                  activeClassName="text-primary font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Agendar Demonstração
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
