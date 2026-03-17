import Layout from "@/components/Layout";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ProductSection from "@/components/landing/ProductSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import VeterinarySection from "@/components/landing/VeterinarySection";
import HowToUseSection from "@/components/landing/HowToUseSection";

import AuthoritySection from "@/components/landing/AuthoritySection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import OurStorySection from "@/components/landing/OurStorySection";

import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import CTABlock from "@/components/landing/CTABlock";

const Index = () => (
  <Layout>
    <HeroSection />
    <ProblemSection />
    <ProductSection />
    <BenefitsSection />
    <CTABlock
      title="Descubra a dose ideal para o seu pet"
      text="Cada pet tem necessidades diferentes. Receba uma recomendação personalizada em menos de 1 minuto."
    />
    <VeterinarySection />
    <HowToUseSection />
    <CTABlock
      text="Descubra quantas gominhas oferecer ao seu pet."
      compact
    />
    <AuthoritySection />
    <SocialProofSection />
    <CTABlock
      title="Descubra a recomendação ideal para o seu pet"
      text="Responda algumas perguntas rápidas e receba a dose recomendada."
    />
    <OurStorySection />
    
    <FAQSection />
    <FinalCTASection />
  </Layout>
);

export default Index;
