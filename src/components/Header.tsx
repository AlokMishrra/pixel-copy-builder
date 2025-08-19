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
      <header className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <img 
            src="/lovable-uploads/61014383-cb06-488a-a631-d0d2acf3e5cc.png" 
            alt="Zero's School Logo" 
            className="h-12"
          />
          
          <Button 
            onClick={() => setShowRegistrationDialog(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Register Now
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