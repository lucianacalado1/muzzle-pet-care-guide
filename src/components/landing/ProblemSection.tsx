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
  "Pele ou pelagem opaca",
  "Rigidez ou dificuldade para se movimentar",
  "Queda excessiva de pelo",
  "Baixa disposição",
  "Sensibilidade nas articulações",
  "Recuperação lenta após atividades",
];

const ProblemSection = () => (
  <section className="py-[56px] lg:py-[80px] bg-soft-cream">
    <div className="container">
      <motion.div
        className="max-w-[1024px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-accent" />
        </motion.div>
        
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-[32px]">
          Você percebe algum desses sinais no seu pet?
        </motion.h2>

        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-border flex items-center justify-center min-h-[120px]"
            >
              <p className="text-foreground font-medium">{p}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;