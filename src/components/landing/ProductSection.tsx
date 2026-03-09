import { motion } from "framer-motion";
import { Info } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const ProductSection = () => (
  <section id="o-que-sao" className="py-14 md:py-20">
    <div className="container">
      <motion.div
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-8">
          O que são as gominhas Muzzle
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
          Snacks naturais em formato de gelatina feitos a partir de caldo de ossos concentrado. Uma forma simples de complementar a alimentação com colágeno e nutrientes importantes.
        </motion.p>
        <motion.div variants={fadeUp} className="bg-accent/10 border border-accent/30 rounded-2xl p-5 flex items-center gap-3 justify-center">
          <Info className="w-5 h-5 text-accent shrink-0" />
          <p className="font-semibold text-accent-foreground">Não é caldo líquido.</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProductSection;
