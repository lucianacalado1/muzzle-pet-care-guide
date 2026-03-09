import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const testimonials = [
  {
    name: "Luna",
    pet: "Golden Retriever",
    text: "A Luna adora as gominhas! Desde que começou, o pelo ficou muito mais brilhante e macio.",
    emoji: "🐕",
  },
  {
    name: "Milo",
    pet: "Gato Persa",
    text: "O Milo é exigente, mas aceitou de primeira. A pele dele melhorou muito em poucas semanas.",
    emoji: "🐈",
  },
  {
    name: "Thor",
    pet: "Labrador",
    text: "Com 9 anos, o Thor estava com dificuldade para se levantar. As gominhas ajudaram demais na mobilidade.",
    emoji: "🐕‍🦺",
  },
];

const SocialProofSection = () => (
  <section className="py-14 md:py-20">
    <div className="container">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Pets que já experimentaram
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                {t.emoji}
              </div>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.pet}</p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
