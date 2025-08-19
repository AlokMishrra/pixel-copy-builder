import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Rocket, Factory, Users } from "lucide-react";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";
import sicBannerImage from "@assets/{F5585F70-DAFD-4317-B654-C636743F6000}_1755609005086.png";

const PartnershipSection = () => {
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
    // Corporate and other types can be handled when forms are available
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

  const handlePartnershipClick = (type: 'institute' | 'incubation' | 'industry' | 'mentor') => {
    // Open registration dialog for all partnership types
    setShowRegistrationDialog(true);
  };

  return (
    <section className="relative bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
          Join As Our Education Partner
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Card 
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-blue-500 bg-white/10 backdrop-blur-sm border-gray-600"
            onClick={() => handlePartnershipClick('institute')}
          >
            <CardHeader className="text-center py-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg text-white font-semibold">Institute</CardTitle>
            </CardHeader>
          </Card>

          <Card 
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-blue-500 bg-white/10 backdrop-blur-sm border-gray-600"
            onClick={() => handlePartnershipClick('incubation')}
          >
            <CardHeader className="text-center py-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg text-white font-semibold">Incubation</CardTitle>
            </CardHeader>
          </Card>

          <Card 
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-blue-500 bg-white/10 backdrop-blur-sm border-gray-600"
            onClick={() => handlePartnershipClick('industry')}
          >
            <CardHeader className="text-center py-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg text-white font-semibold">Industry</CardTitle>
            </CardHeader>
          </Card>

          <Card 
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-blue-500 bg-white/10 backdrop-blur-sm border-gray-600"
            onClick={() => handlePartnershipClick('mentor')}
          >
            <CardHeader className="text-center py-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg text-white font-semibold">Mentor</CardTitle>
            </CardHeader>
          </Card>
        </div>
        
        {/* School Innovation Council Banner */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div 
            className="cursor-pointer transition-all hover:scale-105 duration-300"
            onClick={() => setShowSchoolForm(true)}
          >
            <img 
              src={sicBannerImage} 
              alt="Kickstart Your School Innovation Council with ZERO'S SCHOOL" 
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>
      </div>
      
      {/* Registration Dialogs */}
      <RegistrationDialog isOpen={showRegistrationDialog} onClose={closeAllDialogs} onSelectType={handleRegistrationSelect} />
      
      <SchoolRegistrationForm isOpen={showSchoolForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
      
      <CollegeRegistrationForm isOpen={showCollegeForm} onClose={closeAllDialogs} onBack={handleBackToSelection} />
    </section>
  );
};

export default PartnershipSection;