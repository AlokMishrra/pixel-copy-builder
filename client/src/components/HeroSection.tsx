import React from "react";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";
import heroImage from "@assets/{82FE6947-7422-4E72-85E1-90CC4AF44D66}_1755883619869.png";

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

  const handleHeroClick = () => {
    setShowSchoolForm(true);
  };

  return (
    <section className="relative">
      <div className="relative cursor-pointer" onClick={handleHeroClick}>
        <img 
          src={heroImage} 
          alt="Join India's Largest Institutional Chain - Kickstart Your School Innovation Council with ZERO'S SCHOOL" 
          className="w-full h-auto hover:opacity-95 transition-opacity duration-300"
        />
        <div className="absolute inset-0 hover:bg-black/5 transition-colors duration-300"></div>
      </div>
      
      {/* Registration Dialogs */}
      <RegistrationDialog isOpen={showRegistrationDialog} onClose={closeAllDialogs} onSelectType={handleRegistrationSelect} />
      <SchoolRegistrationForm isOpen={showSchoolForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
      <CollegeRegistrationForm isOpen={showCollegeForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
    </section>
  );
};

export default HeroSection;