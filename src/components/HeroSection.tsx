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
        <div className="relative w-full h-full">
          <Button 
            onClick={() => setShowRegistrationDialog(true)} 
            className="absolute bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fade-in
              /* Mobile */
              text-sm py-2 px-4 top-[60%] left-[60%] 
              /* Tablet */
              sm:text-base sm:py-3 sm:px-6 sm:top-[65%] sm:left-[65%]
              /* Small Desktop */
              md:text-lg md:py-4 md:px-8 md:top-[58%] md:left-[68%]
              /* Large Desktop */
              lg:text-xl lg:py-5 lg:px-10 lg:top-[56%] lg:left-[70%]
              /* Extra Large Desktop */
              xl:text-2xl xl:py-6 xl:px-12 xl:top-[54%] xl:left-[72%]"
          >
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