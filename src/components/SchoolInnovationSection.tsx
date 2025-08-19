import React from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";

const SchoolInnovationSection = () => {
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
      <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* School Innovation Council Logo/Image */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/ee10b7fb-3014-44c6-a0fc-49d3564f7c5d.png" 
                alt="School Innovation Council - An Initiative of MeU's Innovation Cell" 
                className="max-w-full h-auto object-contain"
              />
            </div>
            
            {/* Register Button */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <Button 
                onClick={() => setShowRegistrationDialog(true)} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </section>

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

export default SchoolInnovationSection;