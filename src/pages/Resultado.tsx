import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, PawPrint, RotateCcw, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { QuizData, calculateDose, goalLabels, goalBenefits } from "@/types/quiz";

const Resultado = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<QuizData | null>(null);
  const [dose, setDose] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("muzzle-quiz");
    if (!stored) {
      navigate("/quiz");
      return;
    }
    const parsed: QuizData = JSON.parse(stored);
    setData(parsed);
    setDose(calculateDose(parsed.species, parseFloat(parsed.weight) || 0));
  }, [navigate]);

  if (!data) return null;

  const speciesLabel = data.species === "cat" ? "Gato" : "Cão";
  const whatsappMessage = encodeURIComponent(
    `Olá! Acabei de fazer o teste no site da Muzzle.\n\nPet: ${data.petName}\nEspécie: ${speciesLabel}\nPeso: ${data.weight}kg\n\nDose recomendada: ${dose} gominhas por dia.\n\nGostaria de fazer o pedido.`
  );

  const whatsappUrl = `https://wa.me/351917191314?text=${whatsappMessage}`;

  const routineTips = [
    "Ofereça diariamente",
    "Pode ser como snack ou topping",
    "Introduza gradualmente",
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-10 px-4">
        <motion.div
          className="w-full max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <PawPrint className="w-8 h-8 text-accent" />
            </div>

            <h1 className="text-3xl font-extrabold mb-2">
              Recomendação para {data.petName} 🎉
            </h1>
            <p className="text-muted-foreground mb-8">
              {data.species === "cat" ? "Gato" : "Cão"} • {data.weight}kg
              {data.breed ? ` • ${data.breed}` : ""}
            </p>

            {/* Dose */}
            <div className="bg-primary/10 rounded-2xl p-6 mb-8">
              <p className="text-sm font-semibold text-primary mb-1">Dose Recomendada</p>
              <p className="text-5xl font-extrabold text-primary">{dose}</p>
              <p className="text-primary font-medium">gominhas por dia</p>
            </div>

            {/* Benefícios esperados */}
            {data.goals.length > 0 && !data.goals.includes("none") && (
              <div className="text-left space-y-4 mb-8">
                <h3 className="font-bold text-lg">Benefícios esperados:</h3>
                {data.goals.map((g) => (
                  <div key={g} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{goalLabels[g]}</p>
                      <p className="text-sm text-muted-foreground">{goalBenefits[g]}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {data.goals.includes("none") && (
              <div className="text-left mb-8">
                <p className="text-sm text-muted-foreground">{goalBenefits.none}</p>
              </div>
            )}

            {/* Como incluir na rotina */}
            <div className="text-left mb-8">
              <h3 className="font-bold text-lg mb-3">Como incluir na rotina:</h3>
              <div className="space-y-2">
                {routineTips.map((tip) => (
                  <div key={tip} className="flex gap-2 items-center">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg mb-4"
            >
              <MessageCircle className="w-5 h-5" />
              Fazer pedido pelo WhatsApp
            </a>

            <Link to="/quiz">
              <Button variant="ghost" className="gap-1 text-muted-foreground">
                <RotateCcw className="w-4 h-4" /> Refazer o quiz
              </Button>
            </Link>

          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Resultado;
