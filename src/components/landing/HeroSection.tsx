import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import muzzlePackage from "@/assets/muzzle-package-nobg.png";

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

        {/* Triple Product Image */}
        <motion.div
          className="flex-1 flex items-end justify-center gap-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Left smaller */}
          <motion.img
            src={muzzlePackage}
            alt="Muzzle Pet Food"
            className="w-24 md:w-36 object-contain drop-shadow-xl -mr-4 md:-mr-6 opacity-80"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ transform: "rotate(-6deg)" }}
          />
          {/* Center larger */}
          <motion.img
            src={muzzlePackage}
            alt="Muzzle Pet Food - Snack Funcional à base de Caldo de Ossos"
            className="w-44 md:w-64 object-contain drop-shadow-2xl z-10 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          {/* Right smaller */}
          <motion.img
            src={muzzlePackage}
            alt="Muzzle Pet Food"
            className="w-24 md:w-36 object-contain drop-shadow-xl -ml-4 md:-ml-6 opacity-80"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ transform: "rotate(6deg)" }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
