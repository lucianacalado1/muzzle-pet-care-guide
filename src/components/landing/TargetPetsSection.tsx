import { motion } from "framer-motion";
import { Dog, Cat } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const TargetPetsSection = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">
          Para quem é?
        </motion.h2>
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-background rounded-full px-6 py-3 border border-border">
            <Dog className="w-5 h-5 text-accent" />
            <span className="font-semibold">Cães</span>
          </div>
          <div className="flex items-center gap-2 bg-background rounded-full px-6 py-3 border border-border">
            <Cat className="w-5 h-5 text-accent" />
            <span className="font-semibold">Gatos</span>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="bg-background rounded-2xl p-6 border border-border text-left space-y-3 max-w-md mx-auto">
          <p className="text-sm font-semibold text-foreground mb-3">Sempre com:</p>
          {["Introdução gradual", "Pequenas quantidades", "Observação da aceitação"].map((item) => (
            <div key={item} className="flex gap-3 items-center">
              <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <p className="text-muted-foreground text-sm">{item}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default TargetPetsSection;
