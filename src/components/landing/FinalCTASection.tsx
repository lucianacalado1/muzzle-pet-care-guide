import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FinalCTASection = () => (
  <section className="py-14 md:py-20 bg-gradient-to-br from-primary to-foreground">
    <div className="container">
      <motion.div
        className="max-w-[720px] mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Descubra a dose ideal para o seu pet
        </h2>
        <p className="text-primary-foreground/80 mb-8">
          Responda algumas perguntas rápidas e receba uma recomendação personalizada.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/quiz"
            className="inline-flex justify-center items-center gap-2 bg-accent text-accent-foreground px-8 h-[52px] md:h-14 w-full md:w-auto rounded-2xl text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <PawPrint className="w-5 h-5" />
            Descobrir a dose ideal
          </Link>
          <p className="text-sm text-primary-foreground/60">
            Leva menos de 30 segundos para descobrir a dose ideal para o seu pet.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
