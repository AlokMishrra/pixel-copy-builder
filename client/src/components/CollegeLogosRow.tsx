const CollegeLogosRow = () => {
  // Array of individual college logos
  const logos = [
    { src: "/lovable-uploads/40220d2d-e7fd-4668-96c3-18a688c5195c.png", alt: "Partner College 1" },
    { src: "/lovable-uploads/40220d2d-e7fd-4668-96c3-18a688c5195c.png", alt: "Partner College 2" },
    { src: "/lovable-uploads/40220d2d-e7fd-4668-96c3-18a688c5195c.png", alt: "Partner College 3" },
    { src: "/lovable-uploads/40220d2d-e7fd-4668-96c3-18a688c5195c.png", alt: "Partner College 4" },
    { src: "/lovable-uploads/40220d2d-e7fd-4668-96c3-18a688c5195c.png", alt: "Partner College 5" },
    { src: "/lovable-uploads/40220d2d-e7fd-4668-96c3-18a688c5195c.png", alt: "Partner College 6" },
    { src: "/lovable-uploads/40220d2d-e7fd-4668-96c3-18a688c5195c.png", alt: "Partner College 7" },
    { src: "/lovable-uploads/40220d2d-e7fd-4668-96c3-18a688c5195c.png", alt: "Partner College 8" }
  ];

  return (
    <section className="relative py-12 bg-background/50 overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none"></div>
    </section>
  );
};

export default CollegeLogosRow;