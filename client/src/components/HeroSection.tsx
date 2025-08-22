import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";
import heroImage from "@assets/{82FE6947-7422-4E72-85E1-90CC4AF44D66}_1755883370874.png";

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

  const handleRegisterClick = () => {
    setShowSchoolForm(true);
  };

  return (
    <section className="relative bg-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Join India's Largest{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Institutional Chain
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
            </span>
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
              Making Traditional Institutes
            </h2>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
              Future-Ready
            </h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="flex items-center space-x-3 mt-8">
            <span className="text-gray-400 text-sm">An initiative by</span>
            <div className="bg-white px-3 py-1 rounded text-black font-semibold text-sm">
              ZEROMONK
            </div>
          </div>
        </div>

        {/* Right Content - Character and Card */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Character Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Character illustration" 
              className="w-full max-w-md h-auto"
            />
          </div>
          
          {/* Registration Card */}
          <Card className="absolute top-4 right-0 lg:right-8 w-80 bg-white shadow-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Kickstart Your School Innovation Council with{" "}
                  <span className="text-blue-600 font-bold">ZERO'S SCHOOL</span>
                </h3>
                
                {/* School Innovation Council Logo */}
                <div className="flex items-center justify-center space-x-2 my-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-blue-600 font-bold text-lg">SCHOOL</div>
                    <div className="text-orange-500 font-bold text-sm">INNOVATION</div>
                    <div className="text-orange-500 font-bold text-sm">COUNCIL</div>
                    <div className="text-xs text-gray-500">An Initiative of MOE's Innovation Cell</div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleRegisterClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                  data-testid="button-register-hero"
                >
                  Register Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Registration Dialogs */}
      <RegistrationDialog isOpen={showRegistrationDialog} onClose={closeAllDialogs} onSelectType={handleRegistrationSelect} />
      <SchoolRegistrationForm isOpen={showSchoolForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
      <CollegeRegistrationForm isOpen={showCollegeForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
    </section>
  );
};

export default HeroSection;