import { Sparkles, Bone, Heart, Droplets, Leaf } from "lucide-react";

const benefits = [
  { icon: Sparkles, title: "Rotina equilibrada", desc: "Apoio à rotina alimentar equilibrada" },
  { icon: Bone, title: "Nutrientes naturais", desc: "Fonte natural de nutrientes" },
  { icon: Heart, title: "Dia a dia", desc: "Fácil de oferecer no dia a dia" },
  { icon: Droplets, title: "Ingredientes reais", desc: "Desenvolvido com ingredientes reais" },
  { icon: Leaf, title: "Sem artificiais", desc: "Sem conservantes ou artificiais" },
  { icon: Leaf, title: "Cuidado simples", desc: "Cuidado simples e consistente" },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-8 md:py-12 bg-soft-cream">
    <div className="container">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Benefícios para o seu Focinho
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mt-8"
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
