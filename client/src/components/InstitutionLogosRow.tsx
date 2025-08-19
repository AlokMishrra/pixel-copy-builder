const InstitutionLogosRow = () => {
  return (
    <section className="relative py-12 bg-muted/30 overflow-hidden">
      <div className="animate-fade-in">
        <img 
          src="/lovable-uploads/e306fe7d-0ccc-4d5e-a206-6324b88b67a0.png" 
          alt="Partner Educational Institutions - Leading schools and universities collaborating with Zero's School" 
          className="w-full h-auto hover-scale transition-all duration-500 ease-in-out"
        />
      </div>
      
      {/* Subtle gradient overlay for better visual integration */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none"></div>
    </section>
  );
};

export default InstitutionLogosRow;