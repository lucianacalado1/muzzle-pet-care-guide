import laraImg from "@/assets/lara.jpeg";

const OurStorySection = () => (
  <section id="nossa-historia" className="py-8 md:py-12 bg-background">
    <div className="container">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          A nossa história
        </h2>
        <p className="text-center text-accent font-semibold mb-6">
          A Muzzle não nasceu como uma marca. Nasceu de uma inquietação.
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
              Durante anos, a Lara — uma maltês companheira e saudável — viveu dentro do que sempre me disseram ser o "normal": ração seca, petiscos industrializados, uma rotina comum. Até deixar de parecer normal.
            </p>
            <p>
              Com o tempo, começaram a surgir sinais: desconforto, sensibilidade, comportamentos que indicavam que algo não estava bem. Procurei respostas, fiz consultas e acompanhamentos — mas nunca houve uma explicação clara. E isso levou-me a questionar o básico.
            </p>
            <p className="text-foreground font-medium">
              Se posso escolher melhor, por que continuar a oferecer o mesmo de sempre?
            </p>
            <p>
              Foi assim que comecei a estudar alimentação e a perceber o impacto real que ela tem na saúde dos animais — não apenas a nível físico, mas também digestivo, inflamatório e geral.
            </p>
            <p>
              Mas encontrei um obstáculo: fazer tudo de forma completa, com qualidade e dentro das exigências, é complexo e pouco acessível para a maioria das pessoas. Foi nesse momento que a Muzzle começou a ganhar forma.
            </p>
            <p>
              Não como mais uma marca de alimentação pet, mas como uma abordagem mais simples e consciente. Decidimos focar no essencial.
            </p>
            <p>
              Criar algo prático, versátil e realmente útil no dia a dia — sem complicar a rotina dos tutores. Assim nasceram as nossas gomas de colagénio à base de caldo de ossos.
            </p>
            <p>
              Um alimento tradicional, conhecido há gerações, adaptado para o presente: fácil de servir, nutritivo e pensado para complementar a alimentação de forma natural.
            </p>
            <p>
              A Muzzle ainda está no início. Produção artesanal, testes e evolução constante. Mas a base mantém-se a mesma: Tudo começou com a Lara. E continua a ser por ela.
            </p>
            <p className="text-foreground font-semibold italic">
              Cuidado real com quem não fala, mas sente.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection;
