import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Lightbulb, Factory, Users } from "lucide-react";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";

const PartnershipSection = () => {
  const [registrationDialogOpen, setRegistrationDialogOpen] = useState(false);
  const [selectedPartnerType, setSelectedPartnerType] = useState<string | null>(null);
  const [registrationType, setRegistrationType] = useState<'school' | 'college' | 'corporate' | null>(null);

  const partnershipTypes = [
    {
      id: 'institute',
      title: 'Institute',
      description: 'Partner with us as an educational institute',
      icon: Building,
      color: 'bg-blue-500'
    },
    {
      id: 'incubation',
      title: 'Incubation',
      description: 'Join our incubation network',
      icon: Lightbulb,
      color: 'bg-blue-500'
    },
    {
      id: 'industry',
      title: 'Industry',
      description: 'Corporate industry partnerships',
      icon: Factory,
      color: 'bg-blue-500'
    },
    {
      id: 'mentor',
      title: 'Mentor',
      description: 'Become a mentor in our network',
      icon: Users,
      color: 'bg-blue-500'
    }
  ];

  const handlePartnershipClick = (partnerType: string) => {
    setSelectedPartnerType(partnerType);
    setRegistrationDialogOpen(true);
  };

  const handleRegistrationTypeSelect = (type: 'school' | 'college' | 'corporate') => {
    setRegistrationType(type);
    setRegistrationDialogOpen(false);
  };

  const handleCloseRegistration = () => {
    setRegistrationType(null);
    setSelectedPartnerType(null);
  };

  const handleBackToTypeSelection = () => {
    setRegistrationType(null);
    setRegistrationDialogOpen(true);
  };

  return (
    <>
      <section className="relative py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join As Our Education Partner
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your partnership type and become part of India's largest institutional chain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partnershipTypes.map((partner) => {
              const IconComponent = partner.icon;
              return (
                <Card 
                  key={partner.id}
                  className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-blue-500 bg-white"
                  onClick={() => handlePartnershipClick(partner.id)}
                >
                  <CardHeader className="text-center p-6">
                    <div className={`w-16 h-16 ${partner.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{partner.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {partner.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <RegistrationDialog
        isOpen={registrationDialogOpen}
        onClose={() => setRegistrationDialogOpen(false)}
        onSelectType={handleRegistrationTypeSelect}
      />

      <SchoolRegistrationForm
        isOpen={registrationType === 'school'}
        onClose={handleCloseRegistration}
        onBack={handleBackToTypeSelection}
      />

      <CollegeRegistrationForm
        isOpen={registrationType === 'college'}
        onClose={handleCloseRegistration}
        onBack={handleBackToTypeSelection}
      />

      {registrationType === 'corporate' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md mx-4">
            <h3 className="text-xl font-bold mb-4">Corporate Registration</h3>
            <p className="text-gray-600 mb-6">Corporate registration coming soon! Please contact us directly for corporate partnerships.</p>
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={handleBackToTypeSelection}>
                Back
              </Button>
              <Button onClick={handleCloseRegistration}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PartnershipSection;