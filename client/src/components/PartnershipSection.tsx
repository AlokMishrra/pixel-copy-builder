import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Rocket, Factory, Users } from "lucide-react";

interface PartnershipSectionProps {
  onSelectPartnership?: (type: 'institute' | 'incubation' | 'industry' | 'mentor') => void;
}

const PartnershipSection = ({ onSelectPartnership }: PartnershipSectionProps) => {
  const handlePartnershipClick = (type: 'institute' | 'incubation' | 'industry' | 'mentor') => {
    if (onSelectPartnership) {
      onSelectPartnership(type);
    } else {
      console.log(`Selected partnership: ${type}`);
    }
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
      </div>
    </section>
  );
};

export default PartnershipSection;