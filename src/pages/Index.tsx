import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import PartnershipSection from "@/components/PartnershipSection";
import MembershipSection from "@/components/MembershipSection";
import InstitutionLogosRow from "@/components/InstitutionLogosRow";

import CollegeMembershipSection from "@/components/CollegeMembershipSection";
import CollegeLogosRow from "@/components/CollegeLogosRow";

import StudentSuccessSection from "@/components/StudentSuccessSection";

import MentorSection from "@/components/MentorSection";
import MentorProfilesSection from "@/components/MentorProfilesSection";
import GlimpsesSection from "@/components/GlimpsesSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ImpactSection />
      <PartnershipSection />
      <MembershipSection />
      <InstitutionLogosRow />
      
      <CollegeMembershipSection />
      <CollegeLogosRow />
      
      <StudentSuccessSection />
      
      <MentorSection />
      <MentorProfilesSection />
      <GlimpsesSection />
      <PartnershipsSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
};

export default Index;
