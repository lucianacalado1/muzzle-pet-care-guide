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

const mediaItems = [
  {
    type: "video",
    name: "Cookie",
    pet: "",
    text: "Cookie aprovou o novo snack de primeira",
    src: "/videos/video-4.mp4",
  },
  {
    type: "video",
    name: "Testando com gatos",
    pet: "",
    text: "Um aprovou de primeira. Outro precisou de adaptação — algo comum com gatos.",
    src: "/videos/video-1.mp4",
  },
  {
    type: "video",
    name: "Thor",
    pet: "Labrador",
    text: "Aceitou como snack logo na primeira tentativa.",
    src: "/videos/video-2.mp4",
  },
  {
    type: "video",
    name: "Zeus",
    pet: "aprovou de primeira 🐾",
    text: "Dos 3 gatinhos que testaram, apenas um não aceitou de imediato.",
    src: "/videos/video-3.mp4",
  }
];

const SocialProofSection = () => (
  <section className="py-14 md:py-20 bg-soft-cream">
    <div className="container">
      <motion.p
        className="text-sm md:text-base text-center text-muted-foreground mb-3 font-medium"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Mais de 50 pets já experimentaram e aprovaram as gominhas Muzzle.
      </motion.p>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Pets que já experimentaram
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm"
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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {mediaItems.map((m, i) => (
          <motion.div key={i} variants={fadeUp} className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col">
            <div className="aspect-video relative bg-muted/30">
              {m.type === "video" ? (
                <video 
                  src={m.src} 
                  className="w-full h-full object-cover" 
                  controls
                  preload="metadata"
                />
              ) : (
                <img 
                  src={m.src} 
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-5 flex-1 bg-card">
              <p className="font-bold text-foreground text-base mb-1">
                {m.name} {m.pet && <span className="font-normal text-muted-foreground text-sm">— {m.pet}</span>}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">"{m.text}"</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
