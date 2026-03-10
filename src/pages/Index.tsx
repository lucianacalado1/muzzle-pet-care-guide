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

const Index = () => (
  <Layout>
    <HeroSection />
    <ProblemSection />
    <ProductSection />
    <BenefitsSection />
    <VeterinarySection />
    <HowToUseSection />
    
    <AuthoritySection />
    <SocialProofSection />
    <OurStorySection />
    
    <FAQSection />
    <FinalCTASection />
  </Layout>
);

export default Index;
