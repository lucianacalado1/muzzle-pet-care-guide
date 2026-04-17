import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import productHero from "@/assets/product-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const HeroSection = () =>
<section className="relative overflow-hidden pt-4 pb-14 md:pt-6 md:pb-20 bg-white">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text + CTA (desktop: all together, mobile: split around image) */}
        <motion.div
        className="flex-1 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={stagger}>
        
          <motion.div variants={fadeUp} className="flex flex-nowrap items-center gap-3 mb-6 justify-center md:justify-start overflow-x-auto">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
              <PawPrint className="w-4 h-4" /> 100% Natural
            </span>
            <span className="inline-flex items-center gap-2 bg-[hsl(39,50%,92%)] text-[hsl(150,30%,25%)] px-4 py-1.5 rounded-full text-sm font-medium">
              <PawPrint className="w-4 h-4" /> Receita desenvolvida com orientação veterinária
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-extrabold leading-tight mb-6 text-center md:text-5xl">Snack funcional para cães e gatos

        </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-4">
            Gominhas naturais feitas a partir de caldo de ossos concentrado
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground mb-8 max-w-lg md:mx-0 mx-auto">
            Suplementação natural para melhorar pele, pelagem e mobilidade do seu pet.
          </motion.p>

          {/* Product Image - mobile only (before CTA) */}
          <motion.div
          className="flex md:hidden justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}>
          
            <img
            src={productHero}
            alt="Muzzle Pet Food - Gominhas naturais de caldo de ossos"
            className="w-[480px] object-contain drop-shadow-2xl mix-blend-multiply" />
          
          </motion.div>

          <motion.div variants={fadeUp} className="w-full">
            <Link
            to="/quiz"
            className="inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-8 h-[52px] md:h-14 w-full rounded-2xl text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
            
              <PawPrint className="w-5 h-5" />
              Descobrir a dose ideal para meu pet
            </Link>
          </motion.div>
        </motion.div>

        {/* Product Image - desktop only */}
        <motion.div
        className="hidden md:flex flex-1 justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}>
        
          <img
          src={productHero}
          alt="Muzzle Pet Food - Gominhas naturais de caldo de ossos"
          className="w-[600px] object-contain drop-shadow-2xl mix-blend-multiply" />
        
        </motion.div>
      </div>
    </div>
  </section>;


export default HeroSection;