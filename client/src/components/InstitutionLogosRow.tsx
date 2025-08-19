import logo1 from "@assets/{1DBD2033-F101-40B0-8BE5-09EBE1F43EA8}_1755597948806.png";
import logo2 from "@assets/image_1755597951310.png";
import logo3 from "@assets/image_1755597953875.png";
import logo4 from "@assets/image_1755597956949.png";
import logo5 from "@assets/image_1755597966248.png";

const InstitutionLogosRow = () => {
  // Array of individual institution logos
  const logos = [
    { src: logo1, alt: "Partner Institution 1" },
    { src: logo2, alt: "Partner Institution 2" },
    { src: logo3, alt: "Partner Institution 3" },
    { src: logo4, alt: "Partner Institution 4" },
    { src: logo5, alt: "Partner Institution 5" },
    { src: logo1, alt: "Partner Institution 6" },
    { src: logo2, alt: "Partner Institution 7" },
    { src: logo3, alt: "Partner Institution 8" }
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