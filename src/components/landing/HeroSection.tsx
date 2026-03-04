import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

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
      <motion.div
        className="max-w-2xl mx-auto text-center"
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
        <motion.p variants={fadeUp} className="text-base text-muted-foreground mb-8 max-w-lg mx-auto">
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
    </div>
  </section>
);

export default HeroSection;
