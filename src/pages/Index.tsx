import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Bone, Heart, Droplets, PawPrint, Snowflake, UtensilsCrossed, IceCreamCone } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const benefits = [
  { icon: Sparkles, title: "Pele e Pelagem", desc: "Colágeno natural que fortalece a pele e dá mais brilho à pelagem." },
  { icon: Bone, title: "Articulações", desc: "Nutrientes que auxiliam na saúde das cartilagens e articulações." },
  { icon: Heart, title: "Mobilidade", desc: "Mais disposição e flexibilidade, especialmente para pets seniores." },
  { icon: Droplets, title: "Suporte Nutricional", desc: "Aminoácidos essenciais que complementam a alimentação do pet." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <PawPrint className="w-4 h-4" /> 100% Natural
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Nutrição funcional para cães e gatos
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-4">
              Gominhas naturais feitas a partir de caldo de ossos concentrado
            </motion.p>
            <motion.p variants={fadeUp} className="text-base text-muted-foreground mb-8 max-w-lg mx-auto">
              Suplementação natural para melhorar pele, pelagem e mobilidade do seu pet.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
              >
                <PawPrint className="w-5 h-5" />
                Descobrir a dose ideal para meu pet
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* O que são */}
      <section id="o-que-sao" className="py-20 bg-card">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10">
              O que são as Gominhas Muzzle
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 mb-10">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                <p className="text-muted-foreground">Snacks naturais em formato de gelatina</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                <p className="text-muted-foreground">Feitos a partir de caldo de ossos concentrado</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                <p className="text-muted-foreground">Fonte natural de colágeno e nutrientes</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-10">
              <p className="font-semibold text-accent-foreground text-center">⚠️ Não é caldo líquido — é um snack funcional em formato de gominha.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold mb-3">Para quem é?</h3>
                <p className="text-muted-foreground">Cães e gatos de todas as idades e portes.</p>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold mb-3">Sempre com</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Introdução gradual</li>
                  <li>• Pequenas quantidades</li>
                  <li>• Observação da aceitação do pet</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20">
        <div className="container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Benefícios para o seu Pet
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                  <b.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Como Usar e Conservar */}
      <section id="como-usar" className="py-20 bg-card">
        <div className="container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            3 formas de usar
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="bg-background rounded-2xl p-8 text-center border border-border">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <PawPrint className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">1 — Snack</h3>
              <p className="text-muted-foreground text-sm">Oferecer a gominha descongelada como petisco funcional.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-background rounded-2xl p-8 text-center border border-border">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <IceCreamCone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">2 — Geladinho</h3>
              <p className="text-muted-foreground text-sm">Oferecer a gominha congelada nos dias mais quentes.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-background rounded-2xl p-8 text-center border border-border">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">3 — Topping</h3>
              <p className="text-muted-foreground text-sm">Derreter alguns segundos e servir morno sobre a refeição do pet.</p>
            </motion.div>
          </motion.div>

          {/* Conservação */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="text-2xl font-bold text-center mb-6">
              Como conservar
            </motion.h3>
            <motion.div variants={fadeUp} className="bg-background rounded-2xl p-6 border border-border space-y-3">
              <div className="flex gap-3 items-start">
                <Snowflake className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">Manter congelado por até 3 meses</p>
              </div>
              <div className="flex gap-3 items-start">
                <Snowflake className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Após descongelar:</p>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Manter refrigerado</li>
                    <li>• Consumir em até 48 horas</li>
                    <li>• Não recongelar</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              <PawPrint className="w-5 h-5" />
              Descobrir a dose ideal para meu pet
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
