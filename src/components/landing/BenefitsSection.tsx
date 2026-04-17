import { Sparkles, Bone, Heart, Droplets, Leaf } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Pele e pelagem", desc: "Pele e pelagem mais saudáveis" },
  { icon: Bone, title: "Articulações", desc: "Suporte para articulações" },
  { icon: Heart, title: "Mobilidade", desc: "Mais mobilidade" },
  { icon: Droplets, title: "Nutrição", desc: "Nutrição complementar" },
  { icon: Leaf, title: "Ingredientes", desc: "Ingredientes naturais" },
  { icon: Leaf, title: "Sem conservantes", desc: "Snack sem conservantes" },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-14 md:py-20 bg-soft-cream">
    <div className="container">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        initial="hidden"
        whileInView="visible"}
      >
        Benefícios para o seu pet
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mt-8"
        initial="hidden"
        whileInView="visible"}
      >
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-border"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-6 h-6 text-accent" />
            </div>
            <p className="text-foreground font-semibold text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
