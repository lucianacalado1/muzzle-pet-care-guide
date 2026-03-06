import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import productHero from "@/assets/product-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const HeroSection = () => (
  <section className="relative overflow-hidden py-20 md:py-32">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <PawPrint className="w-4 h-4" /> 100% Natural
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Nutrição funcional para cães e gatos
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-4">
            Gominhas naturais feitas a partir de caldo de ossos concentrado
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground mb-8 max-w-lg md:mx-0 mx-auto">
            Suplementação natural para melhorar pele, pelagem e mobilidade do seu pet.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              <PawPrint className="w-5 h-5" />
              Descobrir a dose ideal para meu pet
            </Link>
          </motion.div>
        </motion.div>

        {/* Product Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img
            src={productHero}
            alt="Muzzle Pet Food - Gominhas naturais de caldo de ossos"
            className="w-72 md:w-96 rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
