import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";
import productHero from "@/assets/product-hero.png";

const HeroSection = () =>
<section className="relative overflow-hidden pb-8 md:pb-12 bg-white">
    <div className="container pt-2">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

        {/* Text column — order-1 on mobile and desktop */}
        <div className="order-1 flex-1 text-center md:text-left max-w-lg mx-auto md:mx-0">

          <div className="flex flex-wrap items-center gap-3 mb-6 justify-center">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">
              <PawPrint className="w-4 h-4" /> 100% Natural
            </span>
            <span className="inline-flex items-center gap-2 bg-[hsl(39,50%,92%)] text-[hsl(150,30%,25%)] px-5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
              <PawPrint className="w-4 h-4" /> Receita desenvolvida com orientação veterinária
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Uma nova forma de cuidar do seu pet{" "}
            <span className="text-accent italic">simples, natural e funcional</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Desenvolvido a partir de caldo de ossos, ingrediente tradicionalmente valorizado pela sua riqueza nutricional.
          </p>
          <p className="text-base text-muted-foreground mb-8 max-w-lg md:mx-0 mx-auto">
            Acreditamos que cuidar da saúde do pet não precisa ser complicado, artificial ou agressivo.
          </p>

          <div className="w-full">
            <Link
            to="/quiz"
            className="inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-8 h-[52px] md:h-14 w-full rounded-2xl text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
              <PawPrint className="w-5 h-5" />
              Descobrir a dose ideal para meu pet
            </Link>
          </div>
        </div>

        {/* Image column — order-2 on mobile, natural on desktop */}
        <div className="order-2 flex justify-center md:flex-1">
          <img
            src={productHero}
            alt="Muzzle Pet Food - Gominhas naturais de caldo de ossos"
            className="w-[300px] md:w-[600px] object-contain drop-shadow-2xl mix-blend-multiply"
          />
        </div>

      </div>
    </div>
  </section>;


export default HeroSection;
