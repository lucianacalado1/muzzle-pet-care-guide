import { ShieldCheck } from "lucide-react";

const AuthoritySection = () => (
  <section className="py-8 md:py-12 bg-background">
    <div className="container">
      <div
        className="max-w-[720px] mx-auto text-center"
      >
        <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-7 h-7 text-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Por que o Colagénio é importante para os Pets?
        </h2>
        <p className="text-muted-foreground leading-relaxed mt-8">
          O colagénio é uma proteína estrutural essencial presente na pele, pelagem, cartilagens e articulações. Com o envelhecimento, a produção natural de colagénio diminui, levando a sinais como pelo opaco, rigidez articular e perda de mobilidade. A suplementação com colagénio natural, obtido a partir do caldo de ossos, ajuda a repor esses nutrientes de forma biodisponível, promovendo uma pele mais saudável, pelagem mais brilhante e articulações mais flexíveis.
        </p>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
