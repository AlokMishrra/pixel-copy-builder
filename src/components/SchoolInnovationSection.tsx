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
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/18523eb4-75d5-4440-86f6-6c336f19a0c2.png" 
                alt="School Innovation Council - An initiative of MoE's Innovation Cell" 
                className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain"
              />
            </div>
            
            {/* Register Button Section */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Join the Innovation Revolution
              </h3>
              <p className="text-muted-foreground mb-6 md:mb-8 max-w-md text-sm sm:text-base">
                Be part of India's largest school innovation network and transform education through innovation.
              </p>
              <Button 
                onClick={() => setShowRegistrationDialog(true)}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
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