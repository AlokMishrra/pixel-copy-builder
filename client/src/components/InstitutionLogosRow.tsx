import logoImage from "@assets/{DBEC4599-C991-4008-8C09-51C6E688CA63}_1755597685863.png";

const InstitutionLogosRow = () => {
  // Array of individual institution logos
  const logos = [
    { src: logoImage, alt: "Partner Institution 1" },
    { src: "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png", alt: "Partner Institution 2" },
    { src: "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png", alt: "Partner Institution 3" },
    { src: "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png", alt: "Partner Institution 4" },
    { src: "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png", alt: "Partner Institution 5" },
    { src: "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png", alt: "Partner Institution 6" },
    { src: "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png", alt: "Partner Institution 7" },
    { src: "/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png", alt: "Partner Institution 8" }
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
                  src={logo.src} 
                  alt={logo.alt}
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