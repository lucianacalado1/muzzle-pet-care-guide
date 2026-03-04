export interface QuizData {
  petName: string;
  species: "dog" | "cat" | "";
  age: string;
  breed: string;
  weight: string;
  sex: "male" | "female" | "";
  goals: string[];
  diet: string;
  email: string;
}

export function calculateDose(species: string, weight: number): number {
  if (species === "cat") return 2;
  if (weight <= 10) return 2;
  if (weight <= 25) return 4;
  return 6;
}

export const goalLabels: Record<string, string> = {
  skin: "Pele e Pelo",
  joints: "Articulações",
  mobility: "Mobilidade",
  digestion: "Digestão",
  none: "Sem preocupação específica",
};

export const goalBenefits: Record<string, string> = {
  skin: "O colágeno hidrolisado presente nas gominhas Muzzle ajuda a fortalecer a pele e dar mais brilho e maciez aos pelos do seu pet.",
  joints: "As gominhas contêm nutrientes que auxiliam na manutenção da saúde das articulações, proporcionando mais conforto e qualidade de vida.",
  mobility: "A suplementação com colágeno natural contribui para a mobilidade e flexibilidade, especialmente em pets mais velhos ou de raças grandes.",
  digestion: "O caldo de ossos concentrado é rico em aminoácidos que auxiliam na saúde intestinal e digestão.",
  none: "As gominhas Muzzle oferecem suplementação funcional completa com colágeno natural, beneficiando a saúde geral do seu pet.",
};
