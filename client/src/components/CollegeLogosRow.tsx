import jisGroup from "@assets/{5AC34B60-74C7-4BF4-BAD0-EA81E4489EBA}_1755598194090.png";
import maharishi from "@assets/image_1755598196867.png";
import dbsSchool from "@assets/image_1755598201187.png";
import amityUniversity from "@assets/image_1755598205029.png";
import quantumUniversity from "@assets/image_1755598209136.png";

const CollegeLogosRow = () => {
  // Array of individual college logos
  const logos = [
    { src: jisGroup, alt: "JIS Group" },
    { src: maharishi, alt: "Maharishi Markandeshwar University" },
    { src: dbsSchool, alt: "DBS Business School" },
    { src: amityUniversity, alt: "Amity University" },
    { src: quantumUniversity, alt: "Quantum University" },
    { src: jisGroup, alt: "JIS Group" },
    { src: maharishi, alt: "Maharishi Markandeshwar University" },
    { src: dbsSchool, alt: "DBS Business School" }
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