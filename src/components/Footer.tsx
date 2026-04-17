const Footer = () => {
  return (
    <footer className="bg-[hsl(153,33%,22%)] text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <img src="/logo-muzzle.png" alt="Muzzle Pet Food" className="h-14 w-14 object-contain rounded-full mb-3 mx-auto md:mx-0" />
            <p className="text-sm opacity-80">Suplementação funcional natural para o seu pet.</p>
          </div>
          <div className="flex gap-6 text-sm opacity-80">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              Instagram
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Muzzle Pet Food. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
