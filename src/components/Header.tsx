import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "O que são as gominhas", href: "#o-que-sao" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como usar", href: "#como-usar" },
  { label: "Nossa História", href: "#nossa-historia" },
  { label: "Nutrição Funcional", href: "#nutricao-funcional" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-center h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-muzzle.jpg" alt="Muzzle Pet Food" className="h-10 rounded-md mix-blend-multiply" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/quiz"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Descobrir a dose ideal
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/quiz"
            onClick={() => setOpen(false)}
            className="block text-center bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Descobrir a dose ideal
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
