import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Bone, Droplets, Heart, Star, PawPrint } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const benefits = [
  { icon: Sparkles, title: "Pele e Pelo", desc: "Pelos mais brilhantes e pele saudável com colágeno natural." },
  { icon: Bone, title: "Articulações", desc: "Fortalece cartilagens e articulações para mais conforto." },
  { icon: Heart, title: "Mobilidade", desc: "Mais disposição e flexibilidade no dia a dia." },
  { icon: Droplets, title: "Digestão", desc: "Aminoácidos que auxiliam a saúde intestinal." },
];

const howToUse = [
  { emoji: "🍬", title: "Snack Descongelado", desc: "Descongele e ofereça como petisco funcional." },
  { emoji: "🧊", title: "Geladinho Congelado", desc: "Ofereça congelado nos dias quentes como um geladinho refrescante." },
  { emoji: "🥣", title: "Topping na Refeição", desc: "Amasse e misture na ração ou alimentação natural." },
];

const testimonials = [
  { name: "Camila R.", pet: "Luna, Golden Retriever", text: "A Luna adora! Desde que começou a tomar, o pelo ficou muito mais bonito e sedoso.", stars: 5 },
  { name: "Pedro M.", pet: "Thor, Bulldog Francês", text: "Thor tinha dificuldade de mobilidade e as gominhas ajudaram muito. Recomendo demais!", stars: 5 },
  { name: "Ana L.", pet: "Mimi, Gata Persa", text: "Minha gata é exigente mas ama essas gominhas. A digestão dela melhorou muito!", stars: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              className="flex-1 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <PawPrint className="w-4 h-4" /> 100% Natural
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Gominhas Naturais <span className="text-accent">Muzzle</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Suplementação funcional com colágeno de caldo de ossos. Seu pet mais saudável, feliz e cheio de vitalidade.
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
            <motion.div
              className="flex-1 max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img
                src="/product-1.jpeg"
                alt="Gominhas Muzzle Pet Food"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que são */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">
              O que são as Gominhas?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8">
              As gominhas Muzzle são snacks funcionais feitos de <strong>gelatina natural de caldo de ossos concentrado</strong>. Ricas em colágeno, aminoácidos e nutrientes essenciais, elas oferecem uma forma deliciosa e prática de suplementar a alimentação do seu pet.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <img src="/product-2.jpeg" alt="Produto Muzzle" className="w-40 h-40 object-cover rounded-2xl shadow-md" />
              <img src="/product-3.jpeg" alt="Produto Muzzle" className="w-40 h-40 object-cover rounded-2xl shadow-md" />
              <img src="/product-4.jpeg" alt="Produto Muzzle" className="w-40 h-40 object-cover rounded-2xl shadow-md" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20">
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

      {/* Como Usar */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Como Usar
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {howToUse.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="text-center text-sm text-muted-foreground mt-10 max-w-md mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            ❄️ Conserve congelado. Após descongelar, consumir em até 3 dias mantendo refrigerado.
          </motion.p>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            O que dizem os tutores
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.pet}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para cuidar melhor do seu pet?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg opacity-80 mb-8 max-w-lg mx-auto">
              Descubra a dose ideal de gominhas Muzzle com nosso quiz rápido e personalizado.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity"
              >
                <PawPrint className="w-5 h-5" />
                Começar o Quiz
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
