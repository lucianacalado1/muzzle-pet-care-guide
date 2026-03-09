import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AuthoritySection = () => (
  <section className="py-14 md:py-20 bg-card">
    <div className="container">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-7 h-7 text-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Por que o colágeno é importante para pets?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          O colágeno é uma proteína estrutural essencial presente na pele, pelagem, cartilagens e articulações. Com o envelhecimento, a produção natural de colágeno diminui, levando a sinais como pelo opaco, rigidez articular e perda de mobilidade. A suplementação com colágeno natural, obtido a partir do caldo de ossos, ajuda a repor esses nutrientes de forma biodisponível, promovendo uma pele mais saudável, pelagem mais brilhante e articulações mais flexíveis.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AuthoritySection;
