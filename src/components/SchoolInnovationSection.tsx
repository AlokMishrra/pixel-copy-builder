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
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          {/* School Innovation Council Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/1c038812-dd98-4f2f-a3bd-947a30915ec5.png" 
              alt="School Innovation Council - An Initiative of MoE's Innovation Cell" 
              className="mx-auto h-32 w-auto"
            />
          </div>
          
          {/* Register Now Button */}
          <div className="mb-6">
            <Button 
              onClick={() => setShowRegistrationDialog(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 text-xl rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fade-in"
            >
              Register Now
            </Button>
          </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join the School Innovation Council initiative and be part of India's educational transformation
          </p>
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