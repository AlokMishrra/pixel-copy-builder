const InstitutionLogosRow = () => {
  // Array of logos (you can replace these with your actual logo URLs)
  const logos = [
    "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png",
    "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png",
    "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png",
    "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png",
    "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png"
  ];

  return (
    <section className="relative py-12 bg-muted/30 overflow-hidden">
      <div className="scroll-container">
        <div className="scroll-animation">
          {/* Create seamless loop with duplicated logos */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="w-24 h-24 bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Partner Institution ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle gradient overlay for better visual integration */}
      <div className="absolute inset-0 bg-gradient-to-r from-muted/50 via-transparent to-muted/50 pointer-events-none"></div>
    </section>
  );
};

export default InstitutionLogosRow;