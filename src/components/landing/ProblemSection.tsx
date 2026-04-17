import { Sparkles, Zap, Wind, Battery, Bone, Timer } from "lucide-react";

const problems = [
  { text: "Pele ou pelagem opaca", icon: Sparkles },
  { text: "Rigidez ou dificuldade para se movimentar", icon: Zap },
  { text: "Queda excessiva de pelo", icon: Wind },
  { text: "Baixa disposição", icon: Battery },
  { text: "Sensibilidade nas articulações", icon: Bone },
  { text: "Recuperação lenta após atividades", icon: Timer },
];

const ProblemSection = () => {
  return (
    <section className="py-8 lg:py-12 bg-soft-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Você percebe algum desses sinais no seu pet?
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Pequenos sinais podem indicar que o organismo do seu pet precisa de suporte nutricional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map(({ text, icon: Icon }) => (
            <div
              key={text}
              className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border flex flex-col items-center gap-3 min-h-[100px]"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-foreground font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>);

};

export default ProblemSection;