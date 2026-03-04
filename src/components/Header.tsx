import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-muzzle.jpg" alt="Muzzle Pet Food" className="h-10 rounded-md" />
        </Link>
        <Link
          to="/quiz"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Fazer o Quiz
        </Link>
      </div>
    </header>
  );
};

export default Header;
