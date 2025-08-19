import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import PartnershipSection from "@/components/PartnershipSection";
import MembershipSection from "@/components/MembershipSection";
import InstitutionLogosRow from "@/components/InstitutionLogosRow";
import SchoolInnovationSection from "@/components/SchoolInnovationSection";

import CollegeMembershipSection from "@/components/CollegeMembershipSection";
import CollegeLogosRow from "@/components/CollegeLogosRow";

import StudentSuccessSection from "@/components/StudentSuccessSection";
import CorporateMembershipSection from "@/components/CorporateMembershipSection";
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
      <div className="animate-fade-in">
        <HeroSection />
      </div>
      <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
        <ImpactSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <PartnershipSection />
      </div>
      <div className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
        <MembershipSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <InstitutionLogosRow />
      </div>
      <div className="animate-slide-in-up" style={{ animationDelay: '1.0s' }}>
        <SchoolInnovationSection />
      </div>
      
      <div className="animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
        <CollegeMembershipSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '1.4s' }}>
        <CollegeLogosRow />
      </div>
      
      <div className="animate-slide-in-up" style={{ animationDelay: '1.6s' }}>
        <StudentSuccessSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '1.8s' }}>
        <CorporateMembershipSection />
      </div>
      <div className="animate-slide-in-up" style={{ animationDelay: '2.0s' }}>
        <MentorSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '2.2s' }}>
        <MentorProfilesSection />
      </div>
      <div className="animate-slide-in-up" style={{ animationDelay: '2.4s' }}>
        <GlimpsesSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '2.6s' }}>
        <PartnershipsSection />
      </div>
      <div className="animate-slide-in-up" style={{ animationDelay: '2.8s' }}>
        <AchievementsSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '3.0s' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
