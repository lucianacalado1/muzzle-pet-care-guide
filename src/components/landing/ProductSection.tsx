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
  <section id="o-que-sao" className="py-14 md:py-20 bg-background">
    <div className="container">
      <motion.div
        className="max-w-[720px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-4">
          O que são as gominhas Muzzle
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-muted-foreground text-center mb-6 leading-relaxed">
          Snacks naturais em formato de gelatina feitos a partir de caldo de ossos concentrado. Uma forma simples e prática de complementar a alimentação do seu pet com colágeno natural e nutrientes importantes para pele, articulações e bem-estar.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default ProductSection;
