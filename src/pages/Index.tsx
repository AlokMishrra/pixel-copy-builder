import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import PartnershipSection from "@/components/PartnershipSection";
import MembershipSection from "@/components/MembershipSection";
import CollegeMembershipSection from "@/components/CollegeMembershipSection";
import LogoShowcase from "@/components/LogoShowcase";
import PartnershipsSection from "@/components/PartnershipsSection";
import AchievementsSection from "@/components/AchievementsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ImpactSection />
      <PartnershipSection />
      <MembershipSection />
      <CollegeMembershipSection />
      <LogoShowcase />
      <PartnershipsSection />
      <AchievementsSection />
    </div>
  );
};

export default Index;
