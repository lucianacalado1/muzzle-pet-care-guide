import { motion } from "framer-motion";
import { Sparkles, Bone, Heart, Droplets, Leaf } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const benefits = [
  { icon: Sparkles, title: "Pele e pelagem", desc: "Pele e pelagem mais saudáveis" },
  { icon: Bone, title: "Articulações", desc: "Suporte para articulações" },
  { icon: Heart, title: "Mobilidade", desc: "Mais mobilidade" },
  { icon: Droplets, title: "Nutrição", desc: "Nutrição complementar" },
  { icon: Leaf, title: "Ingredientes", desc: "Ingredientes naturais" },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-14 md:py-20 bg-soft-cream">
    <div className="container">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Benefícios para o seu pet
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {benefits.map((b) => (
          <motion.div
            key={b.title}
            variants={fadeUp}
            className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-border"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-6 h-6 text-accent" />
            </div>
            <p className="text-foreground font-semibold text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default BenefitsSection;
