import { Sparkles, Bone, Heart, Leaf } from "lucide-react";

const pillars = [
  { icon: Sparkles, label: "Saúde da pele e do pelo" },
  { icon: Bone, label: "Suporte às articulações" },
  { icon: Heart, label: "Mobilidade e bem-estar" },
  { icon: Leaf, label: "Apoio nutricional diário" },
];

const FunctionalNutritionSection = () => (
  <section id="nutricao-funcional" className="py-14 md:py-20 bg-soft-cream">
    <div className="container">
      <div
        className="max-w-[720px] mx-auto text-center"
        initial="hidden"
        whileInView="visible"}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nutrição funcional para quem faz parte da família
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          A Muzzle nasceu com um propósito simples: ajudar tutores a oferecer uma nutrição mais natural, funcional e consciente para seus pets.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Os produtos foram pensados para complementar a alimentação diária com nutrientes importantes, como <strong className="text-foreground">colágeno natural</strong>, que contribui para:
        </p>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-10"
        >
          {pillars.map((p) => (
            <div
              key={p.label}
              className="bg-card rounded-2xl p-5 border border-border flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-foreground font-semibold text-sm text-center">{p.label}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm italic">
          Todas as receitas são desenvolvidas com orientação de nutricionista veterinária, garantindo segurança e equilíbrio nutricional.
        </p>
      </div>
    </div>
  </section>
);

export default FunctionalNutritionSection;
