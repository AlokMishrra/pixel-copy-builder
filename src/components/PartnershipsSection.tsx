const PartnershipsSection = () => {
  const celebrities = [
    "/placeholder.svg",
    "/placeholder.svg", 
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  const corporateLogos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <section className="bg-zero-blue text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Key Partnerships</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Celebrities Section */}
          <div className="bg-white text-black p-8 rounded-3xl">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {celebrities.map((celebrity, index) => (
                <div key={index} className="w-16 h-16 bg-gray-200 rounded-full"></div>
              ))}
            </div>
            <p className="text-center text-purple-600 font-semibold">
              (5,000+ Celebrities &<br />25,000+ Influencers)
            </p>
          </div>
          
          {/* Corporate Logos Section */}
          <div className="bg-white text-black p-8 rounded-3xl">
            <div className="grid grid-cols-6 gap-3 mb-6">
              {corporateLogos.map((logo, index) => (
                <div key={index} className="w-8 h-8 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
          
          {/* Incubation Partners Section */}
          <div className="space-y-6">
            <div className="bg-white text-black p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Incubation Partner</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full"></div>
              </div>
              <p className="text-cyan-500 font-semibold">• 10+ startup Groomed</p>
            </div>
            
            <div className="bg-white text-black p-6 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full"></div>
                <span className="font-bold">gyaanirudhaa</span>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              </div>
              <p className="text-cyan-500 font-semibold">• 15+ Mentor Connected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;