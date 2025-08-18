const InstitutionLogosSection = () => {
  return (
    <section className="relative py-8 bg-gray-50 overflow-hidden">
      <div className="animate-fade-in">
        <img 
          src="/lovable-uploads/376e059c-60e1-4ee0-a80c-f38ef0d56888.png" 
          alt="Partner Institution Logos - Educational institutions collaborating with Zero's School" 
          className="w-full h-auto hover-scale transition-all duration-500 ease-in-out"
        />
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default InstitutionLogosSection;