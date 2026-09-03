export interface QuizData {
  petName: string;
  species: "dog" | "cat" | "";
  age: string;
  breed: string;
  size: "small" | "medium" | "large" | "";
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
  none: "Sem preocupação especial",
  allergies: "Alergias ou pele sensível",
  coat: "Pelo mais forte e brilhante",
  joints: "Displasia ou problemas articulares",
  weight: "Controle ou perda de peso",
  mobility: "Maior mobilidade",
};

export const goalBenefits: Record<string, string> = {
  none: "As gomas de caldo de ossos Muzzle oferecem colágeno natural completo, beneficiando a saúde geral do seu pet.",
  allergies: "O colágeno natural presente nas gomas Muzzle auxilia na regeneração da pele e fortalecimento da barreira cutânea, reduzindo sensibilidades.",
  coat: "O colágeno hidrolisado fortalece os folículos e dá mais brilho e maciez à pelagem do seu pet.",
  joints: "As gomas contêm nutrientes que auxiliam na manutenção da saúde das articulações e cartilagens, proporcionando mais conforto.",
  weight: "As gomas de caldo de ossos auxiliam no metabolismo e na manutenção de uma composição corporal saudável.",
  mobility: "O colágeno natural contribui para a mobilidade e flexibilidade, especialmente em pets mais velhos ou de raças grandes.",
};

export const dietLabels: Record<string, string> = {
  kibble: "Ração seca",
  natural: "Alimentação natural",
  supplement: "Alimentação suplementada",
};
