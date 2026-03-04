import { motion } from "framer-motion";
import { Sparkles, Bone, Heart, Leaf } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const pillars = [
  { icon: Sparkles, label: "Saúde da pele e do pelo" },
  { icon: Bone, label: "Suporte às articulações" },
  { icon: Heart, label: "Mobilidade e bem-estar" },
  { icon: Leaf, label: "Apoio nutricional diário" },
];

const FunctionalNutritionSection = () => (
  <section id="nutricao-funcional" className="py-20">
    <div className="container">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4">
          Nutrição funcional para quem faz parte da família
        </motion.h2>

        <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
          A Muzzle nasceu com um propósito simples: ajudar tutores a oferecer uma nutrição mais natural, funcional e consciente para seus pets.
        </motion.p>

        <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-10">
          Os produtos foram pensados para complementar a alimentação diária com nutrientes importantes, como <strong className="text-foreground">colágeno natural</strong>, que contribui para:
        </motion.p>

        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.label}
              variants={fadeUp}
              className="bg-card rounded-2xl p-5 border border-border flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-foreground font-semibold text-sm text-center">{p.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="text-muted-foreground text-sm italic">
          Todas as receitas são desenvolvidas com orientação de nutricionista veterinária, garantindo segurança e equilíbrio nutricional.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default FunctionalNutritionSection;
