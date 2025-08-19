import React from "react";
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
          className="bg-black px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          <span className="text-white font-semibold text-lg">
            Schedule a Call back
          </span>
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