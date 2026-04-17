import { Snowflake } from "lucide-react";

const items = [
  "Manter congelado até 3 meses",
  "Após descongelar manter refrigerado",
  "Consumir em até 48 horas",
  "Não recongelar",
];

const StorageSection = () => (
  <section className="py-20">
    <div className="container">
      <div
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Como conservar</h2>
        <p className="text-lg text-muted-foreground text-center mb-6">
          Recomendações simples para garantir a qualidade das gominhas.
        </p>
        <div className="bg-card rounded-2xl p-6 border border-border space-y-4 mt-8">
          {items.map((item) => (
            <div key={item} className="flex gap-3 items-center">
              <Snowflake className="w-5 h-5 text-accent shrink-0" />
              <p className="text-muted-foreground text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StorageSection;
