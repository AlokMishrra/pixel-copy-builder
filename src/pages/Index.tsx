import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import PartnershipSection from "@/components/PartnershipSection";
import MembershipSection from "@/components/MembershipSection";
import CollegeMembershipSection from "@/components/CollegeMembershipSection";
import LogoShowcase from "@/components/LogoShowcase";
import StudentSuccessSection from "@/components/StudentSuccessSection";
import CorporateMembershipSection from "@/components/CorporateMembershipSection";
import MentorSection from "@/components/MentorSection";
import MentorProfilesSection from "@/components/MentorProfilesSection";
import GlimpsesSection from "@/components/GlimpsesSection";
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
      <StudentSuccessSection />
      <CorporateMembershipSection />
      <MentorSection />
      <MentorProfilesSection />
      <GlimpsesSection />
      <PartnershipsSection />
      <AchievementsSection />
    </div>
  );
};

export default Index;
