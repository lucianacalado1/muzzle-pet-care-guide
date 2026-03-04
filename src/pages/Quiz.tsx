import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dog, Cat, ArrowRight, ArrowLeft, PawPrint } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { QuizData } from "@/types/quiz";

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuizData>({
    petName: "",
    species: "",
    age: "",
    breed: "",
    weight: "",
    sex: "",
    goals: [],
    diet: "",
    email: "",
  });

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const update = (field: keyof QuizData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal: string) => {
    setData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const canNext = () => {
    switch (step) {
      case 0:
        return data.petName && data.species && data.weight;
      case 1:
        return data.goals.length > 0;
      case 2:
        return !!data.diet;
      case 3:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("muzzle-quiz", JSON.stringify(data));
    navigate("/resultado");
  };

  const goals = [
    { id: "skin", label: "Pele e Pelo", emoji: "✨" },
    { id: "joints", label: "Articulações", emoji: "🦴" },
    { id: "mobility", label: "Mobilidade", emoji: "🏃" },
    { id: "digestion", label: "Digestão", emoji: "💧" },
    { id: "none", label: "Sem preocupação específica", emoji: "😊" },
  ];

  const diets = [
    { id: "kibble", label: "Ração", emoji: "🥣" },
    { id: "natural", label: "Alimentação Natural", emoji: "🥩" },
    { id: "supplement", label: "Suplementação", emoji: "💊" },
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-10">
        <div className="w-full max-w-lg mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Etapa {step + 1} de {totalSteps}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                {step === 0 && (
                  <div className="space-y-5">
                    <h2 className="text-2xl font-bold">Sobre o seu Pet 🐾</h2>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block">Nome do pet</label>
                      <Input
                        placeholder="Ex: Luna"
                        value={data.petName}
                        onChange={(e) => update("petName", e.target.value)}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block">Espécie</label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: "dog" as const, label: "Cão", icon: Dog },
                          { id: "cat" as const, label: "Gato", icon: Cat },
                        ].map((s) => (
                          <button
                            key={s.id}
                            onClick={() => update("species", s.id)}
                            className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all font-semibold ${
                              data.species === s.id
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/30"
                            }`}
                          >
                            <s.icon className="w-6 h-6" />
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-semibold mb-1.5 block">Idade</label>
                        <Input placeholder="Ex: 3 anos" value={data.age} onChange={(e) => update("age", e.target.value)} className="rounded-xl" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-1.5 block">Peso (kg)</label>
                        <Input placeholder="Ex: 12" type="number" value={data.weight} onChange={(e) => update("weight", e.target.value)} className="rounded-xl" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-semibold mb-1.5 block">Raça</label>
                        <Input placeholder="Ex: Labrador" value={data.breed} onChange={(e) => update("breed", e.target.value)} className="rounded-xl" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-1.5 block">Sexo</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: "male" as const, label: "♂ Macho" },
                            { id: "female" as const, label: "♀ Fêmea" },
                          ].map((s) => (
                            <button
                              key={s.id}
                              onClick={() => update("sex", s.id)}
                              className={`p-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                                data.sex === s.id
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-border hover:border-primary/30"
                              }`}
                            >
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5">
                    <h2 className="text-2xl font-bold">Qual o objetivo? 🎯</h2>
                    <p className="text-muted-foreground text-sm">Selecione um ou mais objetivos de saúde.</p>
                    <div className="space-y-3">
                      {goals.map((g) => (
                        <button
                          key={g.id}
                          onClick={() => toggleGoal(g.id)}
                          className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left font-medium ${
                            data.goals.includes(g.id)
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <span className="text-xl">{g.emoji}</span>
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <h2 className="text-2xl font-bold">Alimentação Atual 🍽️</h2>
                    <p className="text-muted-foreground text-sm">Como o seu pet se alimenta hoje?</p>
                    <div className="space-y-3">
                      {diets.map((d) => (
                        <button
                          key={d.id}
                          onClick={() => update("diet", d.id)}
                          className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left font-medium ${
                            data.diet === d.id
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <span className="text-xl">{d.emoji}</span>
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <h2 className="text-2xl font-bold">Quase lá! 📧</h2>
                    <p className="text-muted-foreground text-sm">
                      Informe seu email para receber o resultado personalizado.
                    </p>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="rounded-xl text-base py-6"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8 pt-4 border-t border-border">
              {step > 0 ? (
                <Button variant="ghost" onClick={() => setStep(step - 1)} className="gap-1">
                  <ArrowLeft className="w-4 h-4" /> Voltar
                </Button>
              ) : (
                <div />
              )}
              {step < totalSteps - 1 ? (
                <Button onClick={() => setStep(step + 1)} disabled={!canNext()} className="gap-1 rounded-full px-6">
                  Próximo <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!canNext()} className="gap-1 rounded-full px-6">
                  <PawPrint className="w-4 h-4" /> Ver Resultado
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
