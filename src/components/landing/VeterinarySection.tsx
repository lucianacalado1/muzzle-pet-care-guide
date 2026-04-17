import { Stethoscope, ShieldCheck, Sparkles, Bone, Heart, Leaf } from "lucide-react";

const keyPoints = [
  { icon: Sparkles, text: "Fonte natural de colágeno" },
  { icon: Heart, text: "Apoio à pele e pelagem" },
  { icon: Bone, text: "Suporte às articulações" },
  { icon: Leaf, text: "Nutrição complementar para cães e gatos" },
];

const VeterinarySection = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container">
      <div
        className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
      >
        {/* Left column */}
        <div className="flex-1 max-w-[720px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Desenvolvido com orientação veterinária
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            As gominhas Muzzle foram formuladas com base em princípios de nutrição funcional para pets, utilizando caldo de ossos concentrado como fonte natural de colágeno.
          </p>
          <ul className="space-y-4">
            {keyPoints.map((point) => (
              <li
                key={point.text}
                className="flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                  <point.icon className="w-[18px] h-[18px] text-accent" />
                </div>
                <span className="text-foreground font-medium text-sm md:text-base">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column – credibility card */}
        <div
          className="w-full lg:w-auto lg:min-w-[340px]"
        >
          <div className="bg-card rounded-2xl p-7 border border-border shadow-md">
            <div className="w-14 h-14 rounded-full bg-accent/20 mb-5 flex items-center justify-center mx-auto">
              <Stethoscope className="w-7 h-7 text-accent" />
            </div>
            <div className="flex items-start gap-2.5 mb-4">
              <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-foreground font-bold text-sm leading-snug">
                Receita desenvolvida com orientação de nutricionista veterinária
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              As formulações passam por análise criteriosa para garantir segurança, equilíbrio nutricional e benefícios reais para a saúde do seu pet.
            </p>
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground italic">
                Supervisão técnica: Nutricionista Veterinária
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VeterinarySection;