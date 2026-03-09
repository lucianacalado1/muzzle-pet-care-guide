import { motion } from "framer-motion";
import { PawPrint, IceCreamCone, UtensilsCrossed } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const HowToUseSection = () => (
  <section id="como-usar" className="py-14 md:py-20 bg-soft-cream">
    <div className="container">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        3 formas simples de usar
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="bg-card rounded-2xl p-8 text-center border border-border">
          <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
            <PawPrint className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-lg font-bold mb-2">Snack</h3>
          <p className="text-muted-foreground text-sm">Gominha descongelada</p>
        </motion.div>
        <motion.div variants={fadeUp} className="bg-card rounded-2xl p-8 text-center border border-border">
          <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
            <IceCreamCone className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-lg font-bold mb-2">Geladinho</h3>
          <p className="text-muted-foreground text-sm">Oferecer congelado</p>
        </motion.div>
        <motion.div variants={fadeUp} className="bg-card rounded-2xl p-8 text-center border border-border">
          <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
            <UtensilsCrossed className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-lg font-bold mb-2">Topping</h3>
          <p className="text-muted-foreground text-sm">Derreter alguns segundos e servir morno sobre a refeição</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HowToUseSection;
