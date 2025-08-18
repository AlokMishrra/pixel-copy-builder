const CollegeLogosRow = () => {
  return (
    <section className="relative py-12 bg-background/50 overflow-hidden">
      <div className="animate-fade-in">
        <img 
          src="/lovable-uploads/40220d2d-e7fd-4668-96c3-18a688c5195c.png" 
          alt="Partner College Logos - Universities and higher education institutions partnering with Zero's School" 
          className="w-full h-auto hover-scale transition-all duration-500 ease-in-out"
        />
      </div>
      
      {/* Subtle gradient overlay for better visual integration */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none"></div>
    </section>
  );
};

export default CollegeLogosRow;