import React from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";
import CorporateRegistrationForm from "./CorporateRegistrationForm";

const MentorSection = () => {
  const [showRegistrationDialog, setShowRegistrationDialog] = React.useState(false);
  const [showSchoolForm, setShowSchoolForm] = React.useState(false);
  const [showCollegeForm, setShowCollegeForm] = React.useState(false);
  const [showCorporateForm, setShowCorporateForm] = React.useState(false);

  const handleRegistrationSelect = (type: 'school' | 'college' | 'corporate') => {
    setShowRegistrationDialog(false);
    if (type === 'school') {
      setShowSchoolForm(true);
    } else if (type === 'college') {
      setShowCollegeForm(true);
    } else if (type === 'corporate') {
      setShowCorporateForm(true);
    }
  };

  const handleBackToSelection = () => {
    setShowSchoolForm(false);
    setShowCollegeForm(false);
    setShowCorporateForm(false);
    setShowRegistrationDialog(true);
  };

  const closeAllDialogs = () => {
    setShowRegistrationDialog(false);
    setShowSchoolForm(false);
    setShowCollegeForm(false);
    setShowCorporateForm(false);
  };

  const handleCallbackClick = () => {
    window.open('https://forms.gle/cgJ6PQxrgS3j3HYr5', '_blank');
  };

  return (
    <>
      {/* Schedule a Call back button above mentor section */}
      <div className="flex justify-center py-8 bg-[#0d0e0f]">
        <Button 
          className="bg-muted/90 hover:bg-muted text-foreground font-semibold px-8 py-3 rounded-lg shadow-lg backdrop-blur-sm border border-border/20 transition-all duration-300 hover:scale-105"
          onClick={handleCallbackClick}
        >
          Schedule a Call back
        </Button>
      </div>
      <section className="relative cursor-pointer" onClick={handleCallbackClick}>
        <img 
          src="/lovable-uploads/fff8712a-6060-44d9-b86d-e178b298bd92.png" 
          alt="Join As Mentor - Join our mentorship community to share your expertise, empower students, and contribute to shaping the future workforce" 
          className="w-full h-auto hover:opacity-90 transition-opacity duration-300"
        />
        <div className="absolute inset-0 hover:bg-black/10 transition-colors duration-300"></div>
      </section>
      {/* Registration Dialogs */}
      <RegistrationDialog isOpen={showRegistrationDialog} onClose={closeAllDialogs} onSelectType={handleRegistrationSelect} />
      <SchoolRegistrationForm isOpen={showSchoolForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
      <CollegeRegistrationForm isOpen={showCollegeForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
      <CorporateRegistrationForm isOpen={showCorporateForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
    </>
  );
};

export default MentorSection;