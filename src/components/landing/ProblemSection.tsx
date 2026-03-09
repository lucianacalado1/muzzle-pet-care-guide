import { AlertTriangle } from "lucide-react";

const problems = [
  "Pele ou pelagem opaca",
  "Rigidez ou dificuldade para se movimentar",
  "Queda excessiva de pelo",
  "Baixa disposição",
  "Sensibilidade nas articulações",
  "Recuperação lenta após atividades",
];

const ProblemSection = () => {
  return (
    <section className="py-14 lg:py-20 bg-soft-cream">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-accent" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Você percebe algum desses sinais no seu pet?
        </h2>
        
        <p className="text-center text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Pequenos sinais podem indicar que o organismo do seu pet precisa de suporte nutricional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border flex items-center justify-center min-h-[100px]"
            >
              <p className="text-foreground font-medium">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
