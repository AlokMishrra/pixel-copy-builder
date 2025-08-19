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
  return <>
      <header className="bg-white py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center max-w-full">
          <Button onClick={() => setShowRegistrationDialog(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base lg:px-6 lg:py-3 lg:text-lg whitespace-nowrap flex-shrink-0">
            <span className="hidden sm:inline">Register Now</span>
            <span className="sm:hidden">Register</span>
          </Button>
          
          <div className="flex-1 flex justify-center ml-2 sm:ml-48 ">
            <img src="/lovable-uploads/61014383-cb06-488a-a631-d0d2acf3e5cc.png" alt="Zero's School Logo" className="h-7 sm:h-9 md:h-11 lg:h-14 xl:h-16 w-auto max-w-[50vw] sm:max-w-[45vw] md:max-w-[40vw] lg:max-w-none object-contain" />
          </div>
        </div>
      </header>

      {/* Registration Dialogs */}
      <RegistrationDialog isOpen={showRegistrationDialog} onClose={closeAllDialogs} onSelectType={handleRegistrationSelect} />
      
      <SchoolRegistrationForm isOpen={showSchoolForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
      
      <CollegeRegistrationForm isOpen={showCollegeForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
    </>;
};
export default Header;