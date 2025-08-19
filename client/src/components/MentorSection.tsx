import React from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";

const MentorSection = () => {
  const [showRegistrationDialog, setShowRegistrationDialog] = React.useState(false);
  const [showSchoolForm, setShowSchoolForm] = React.useState(false);
  const [showCollegeForm, setShowCollegeForm] = React.useState(false);

  const handleRegistrationSelect = (type: 'school' | 'college' | 'corporate') => {
    setShowRegistrationDialog(false);
    if (type === 'school') {
      setShowSchoolForm(true);
    } else if (type === 'college') {
      setShowCollegeForm(true);
    }
  };

  const handleBackToSelection = () => {
    setShowSchoolForm(false);
    setShowCollegeForm(false);
    setShowRegistrationDialog(true);
  };

  const closeAllDialogs = () => {
    setShowRegistrationDialog(false);
    setShowSchoolForm(false);
    setShowCollegeForm(false);
  };

  const handleCallbackClick = () => {
    setShowRegistrationDialog(true);
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
      <section className="relative">
        <img 
          src="/lovable-uploads/fff8712a-6060-44d9-b86d-e178b298bd92.png" 
          alt="Join As Mentor - Join our mentorship community to share your expertise, empower students, and contribute to shaping the future workforce" 
          className="w-full h-auto"
        />
      </section>
      {/* Registration Dialogs */}
      <RegistrationDialog isOpen={showRegistrationDialog} onClose={closeAllDialogs} onSelectType={handleRegistrationSelect} />
      <SchoolRegistrationForm isOpen={showSchoolForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
      <CollegeRegistrationForm isOpen={showCollegeForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
    </>
  );
};

export default MentorSection;