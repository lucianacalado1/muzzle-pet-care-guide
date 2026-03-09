import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const problems = [
  "Pelo opaco ou queda excessiva",
  "Coceiras ou pele sensível",
  "Rigidez nas articulações",
  "Dificuldade para se movimentar",
  "Falta de energia",
  "Alimentação pouco nutritiva",
];

const ProblemSection = () => (
  <section className="py-14 md:py-20 bg-soft-cream">
    <div className="container">
      <motion.div
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-accent" />
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10">
          Você percebe algum desses sinais no seu pet?
        </motion.h2>
        <motion.div variants={fadeUp} className="space-y-4 mb-8">
          {problems.map((p) => (
            <div key={p} className="flex gap-3 items-center bg-background rounded-xl p-4 border border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
              <p className="text-foreground font-medium">{p}</p>
            </div>
          ))}
        </motion.div>
        <motion.p variants={fadeUp} className="text-center text-muted-foreground text-sm italic">
          Muitos desses sinais estão ligados à falta de nutrientes importantes na alimentação.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
