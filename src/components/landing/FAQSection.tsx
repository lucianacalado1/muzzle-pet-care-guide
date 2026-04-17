import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

const faqs = [
{
  question: "Isso substitui a alimentação do meu pet?",
  answer: "Não. As gominhas Muzzle são um suplemento funcional natural que complementa a alimentação diária do seu pet, fornecendo colágeno e nutrientes importantes."
},
{
  question: "Cães e gatos podem consumir?",
  answer: "Sim. A recomendação de consumo varia de acordo com o peso do animal e pode ser calculada através do nosso guia de dose ideal."
},
{
  question: "Como devo oferecer ao meu pet?",
  answer: "As gominhas podem ser oferecidas como snack, congeladas ou levemente aquecidas como topping sobre a refeição."
},
{
  question: "Como conservar o produto?",
  answer: "Mantenha congelado por até 3 meses. Após descongelar, manter refrigerado e consumir em até 48 horas."
},
{
  question: "Os ingredientes são naturais?",
  answer: "Sim. As gominhas são feitas a partir de caldo de ossos concentrado e não contêm conservantes artificiais."
}];


const FAQSection = () =>
<section className="py-14 md:py-20 bg-secondary">
    <div className="container">
      <div
      className="max-w-[800px] mx-auto"}>
      
        <div className="text-center mb-6 max-w-[720px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Tire as principais dúvidas sobre as gominhas funcionais Muzzle.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4 mt-8">
          {faqs.map((faq, index) =>
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-sm [&[data-state=open]>button>svg]:text-accent">
          
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 text-foreground [&>svg]:text-muted-foreground [&>svg]:transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
        )}
        </Accordion>
      </div>
    </div>
  </section>;


export default FAQSection;