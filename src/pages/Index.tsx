import Layout from "@/components/Layout";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ProductSection from "@/components/landing/ProductSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import HowToUseSection from "@/components/landing/HowToUseSection";
import TargetPetsSection from "@/components/landing/TargetPetsSection";
import StorageSection from "@/components/landing/StorageSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <ProblemSection />
    <ProductSection />
    <BenefitsSection />
    <HowToUseSection />
    <TargetPetsSection />
    <StorageSection />
    <AuthoritySection />
    <SocialProofSection />
    <FinalCTASection />
  </Layout>
);

export default Index;
