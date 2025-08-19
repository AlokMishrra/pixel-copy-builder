import logo1 from "@assets/{1DBD2033-F101-40B0-8BE5-09EBE1F43EA8}_1755597948806.png";
import logo2 from "@assets/image_1755597951310.png";
import logo3 from "@assets/image_1755597953875.png";
import logo4 from "@assets/image_1755597956949.png";
import logo5 from "@assets/image_1755597966248.png";

const CollegeLogosRow = () => {
  // Array of individual college logos
  const logos = [
    { src: logo1, alt: "Partner College 1" },
    { src: logo2, alt: "Partner College 2" },
    { src: logo3, alt: "Partner College 3" },
    { src: logo4, alt: "Partner College 4" },
    { src: logo5, alt: "Partner College 5" },
    { src: logo4, alt: "Partner College 6" },
    { src: logo3, alt: "Partner College 7" },
    { src: logo2, alt: "Partner College 8" }
  ];

  return (
    <section className="relative py-12 bg-background/50 overflow-hidden">
      <div className="scroll-container">
        <div className="scroll-animation">
          {/* Create seamless loop with duplicated logos */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="w-32 h-32 bg-white rounded-lg shadow-lg p-3 flex items-center justify-center border border-gray-200">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="w-full h-full object-contain filter brightness-100 contrast-110"
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