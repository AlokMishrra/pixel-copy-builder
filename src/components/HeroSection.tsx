import React from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";
const HeroSection = () => {
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
    // Corporate registration can be handled later if needed
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
  return <section className="relative">
      <img src="/lovable-uploads/9548370a-7e49-45f9-b100-0ddff731964d.png" alt="Join India's Largest Institutional Chain - Zero's School Hero Section" className="w-full h-auto" />
      
      {/* Register Now Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6">
          <Button onClick={() => setShowRegistrationDialog(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 text-xl rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fade-in ml-[450px] mt-24">
            Register Now
          </Button>
        </div>
      </div>

      {/* Registration Dialogs */}
      <RegistrationDialog isOpen={showRegistrationDialog} onClose={closeAllDialogs} onSelectType={handleRegistrationSelect} />
      
      <SchoolRegistrationForm isOpen={showSchoolForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
      
      <CollegeRegistrationForm isOpen={showCollegeForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
    </section>;
};
export default HeroSection;