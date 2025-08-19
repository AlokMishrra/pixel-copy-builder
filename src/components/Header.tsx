import React from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";

const Header = () => {
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

  return (
    <>
      <header className="bg-white py-3 sm:py-4 px-4 sm:px-6 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <img 
            src="/lovable-uploads/61014383-cb06-488a-a631-d0d2acf3e5cc.png" 
            alt="Zero's School Logo" 
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
          
          <Button 
            onClick={() => setShowRegistrationDialog(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base md:px-6 md:py-3 md:text-lg whitespace-nowrap"
          >
            <span className="hidden sm:inline">Register Now</span>
            <span className="sm:hidden">Register</span>
          </Button>
        </div>
      </header>

      {/* Registration Dialogs */}
      <RegistrationDialog 
        isOpen={showRegistrationDialog}
        onClose={closeAllDialogs}
        onSelectType={handleRegistrationSelect}
      />
      
      <SchoolRegistrationForm 
        isOpen={showSchoolForm}
        onClose={closeAllDialogs}
        onBack={handleBackToSelection}
      />
      
      <CollegeRegistrationForm 
        isOpen={showCollegeForm}
        onClose={closeAllDialogs}
        onBack={handleBackToSelection}
      />
    </>
  );
};

export default Header;