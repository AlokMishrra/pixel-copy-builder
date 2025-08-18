import { Building, Search, TrendingUp, Users } from "lucide-react";

const PartnershipSection = () => {
  const partnershipTypes = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Institute",
      bgColor: "bg-white"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Incubation",
      bgColor: "bg-white"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Industry",
      bgColor: "bg-white"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentor",
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="bg-zero-dark text-white py-20 px-6 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-zero-green rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-zero-purple rounded-full opacity-20"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Join As Our Education Partner</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {partnershipTypes.map((type, index) => (
            <div key={index} className={`${type.bgColor} text-black p-8 rounded-2xl text-center`}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold">{type.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;