import React from "react";
import callBackButton from "@assets/{281F4828-F1D0-4AD5-9FD8-0C15C9CF6EE7}_1755598624766.png";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";

const MembershipSection = () => {
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

  const handleScheduleCall = () => {
    setShowRegistrationDialog(true);
  };

  return (
    <section className="relative">
      <img 
        src="/lovable-uploads/56a44b08-4548-467a-96d7-20cbc8ebd02e.png" 
        alt="Institutional Membership - School Membership with Base, Premium, and Elite plans" 
        className="w-full h-auto"
      />
      
      {/* Schedule a Call back button */}
      <div className="flex justify-center py-8">
        <button 
          onClick={handleScheduleCall}
          className="transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          <img 
            src={callBackButton} 
            alt="Schedule a Call back"
            className="h-auto w-auto max-w-sm cursor-pointer"
          />
        </button>
      </div>
      
      {/* Registration Dialogs */}
      <RegistrationDialog isOpen={showRegistrationDialog} onClose={closeAllDialogs} onSelectType={handleRegistrationSelect} />
      
      <SchoolRegistrationForm isOpen={showSchoolForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
      
      <CollegeRegistrationForm isOpen={showCollegeForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
    </section>
  );
};

export default MembershipSection;