import { motion } from "framer-motion";
import { Stethoscope, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const VeterinarySection = () =>
<section className="py-14 md:py-20 bg-background">
    <div className="container">
      <motion.div
      className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}>
      
        {/* Left side - Text content */}
        <motion.div variants={fadeUp} className="flex-1 max-w-[720px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Desenvolvido com orientação veterinária
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            As gominhas Muzzle foram formuladas com base em princípios de nutrição funcional para pets.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-8">
            O colágeno natural presente no caldo de ossos é uma fonte rica em aminoácidos importantes para pele, articulações e tecidos conjuntivos. Estudos em nutrição animal mostram que proteínas estruturais como o colágeno podem contribuir para a manutenção da mobilidade, da saúde da pele e do bem-estar geral de cães e gatos.
          </p>
        </motion.div>

        {/* Right side - Credibility card */}
        <motion.div
        variants={fadeUp}
        className="w-full lg:w-auto lg:min-w-[320px]">
        
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="w-12 h-12 rounded-full bg-accent/20 mb-4 flex-row flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-accent" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <p className="text-foreground font-semibold text-sm">
                Receita desenvolvida com orientação de nutricionista veterinária
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Todas as formulações passam por análise criteriosa para garantir segurança, equilíbrio nutricional e benefícios reais para a saúde do seu pet.
            </p>
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground italic">
                Supervisão técnica: Nutricionista Veterinária
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>;


export default VeterinarySection;