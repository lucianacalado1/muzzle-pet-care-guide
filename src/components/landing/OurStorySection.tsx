import laraImg from "@/assets/lara.jpeg";

const OurStorySection = () => (
  <section id="nossa-historia" className="py-14 md:py-20 bg-background">
    <div className="container">
      <div
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nossa História
        </h2>
        <p className="text-center text-accent font-semibold mb-6">
          Essa é a Lara. A inspiração por trás da Muzzle Pet Food.
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mt-8">
          <div className="w-full md:w-2/5 shrink-0">
            <img
              src={laraImg}
              alt="Lara, a maltês que inspirou a Muzzle Pet Food"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/5]"
            />
          </div>

          <div className="w-full md:w-3/5 space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
            <p>
              Lara é uma maltês carinhosa que sempre fez parte da família. Com o passar dos anos, começaram a surgir sinais de desconforto em uma das patinhas traseiras. Ela lambia constantemente a região e demonstrava sensibilidade ao toque.
            </p>
            <p>
              Mesmo após consultas veterinárias, nunca houve um diagnóstico totalmente claro para explicar o que ela sentia. Esse cenário despertou uma reflexão importante sobre algo que muitas vezes passa despercebido no dia a dia: <strong className="text-foreground">a alimentação dos pets.</strong>
            </p>
            <p>
              Durante anos, Lara se alimentou de ração seca e petiscos industrializados, como a maioria dos cães. Mas ao aprofundar os estudos sobre nutrição funcional para pets, surgiu um entendimento importante: a alimentação pode influenciar diretamente a saúde da pele, das articulações, da digestão e do bem-estar geral.
            </p>
            <p>
              A partir dessa descoberta, iniciou-se uma transição gradual para uma alimentação mais natural, baseada em ingredientes reais e nutrientes funcionais, incluindo suplementação com colágeno natural proveniente de caldo de ossos.
            </p>
            <p>
              Toda a formulação foi desenvolvida com <strong className="text-foreground">nutricionista veterinária</strong>, garantindo equilíbrio nutricional e segurança para os pets.
            </p>
            <p>
              Com o tempo, os resultados começaram a aparecer: mais vitalidade, mais disposição e mais bem-estar.
            </p>
            <p className="text-foreground font-semibold italic">
              Foi dessa experiência — inspirada pela Lara — que nasceu a Muzzle Pet Food.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection;
