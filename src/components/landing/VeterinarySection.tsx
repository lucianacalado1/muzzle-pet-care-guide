import { Stethoscope, ShieldCheck, Sparkles, Bone, Heart, Leaf } from "lucide-react";

const keyPoints = [
  { icon: Sparkles, text: "Fonte natural de colagénio" },
  { icon: Heart, text: "Apoio à pele e pelagem" },
  { icon: Bone, text: "Suporte às articulações" },
  { icon: Leaf, text: "Nutrição complementar para cães e gatos" },
];

const VeterinarySection = () => (
  <section className="py-8 md:py-12 bg-background">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left column */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Desenvolvido com orientação veterinária
          </h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            As gominhas Muzzle foram formuladas com base em princípios de nutrição funcional para Focinhos, utilizando caldo de ossos concentrado como fonte natural de colagénio.
          </p>
          <ul className="space-y-3">
            {keyPoints.map((point) => (
              <li
                key={point.text}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                  <point.icon className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground font-medium text-sm">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column – credibility card */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="bg-card rounded-2xl p-6 border border-border shadow-md">
            <div className="flex items-start gap-2.5 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-foreground font-bold text-sm leading-snug">
                Receita desenvolvida com orientação de nutricionista veterinária
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              As formulações passam por análise criteriosa para garantir segurança, equilíbrio nutricional e benefícios reais para a saúde do seu Focinho.
            </p>
            <div className="border-t border-border pt-3">
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