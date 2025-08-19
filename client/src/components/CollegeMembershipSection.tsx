import callBackButton from "@assets/{CD96B002-6945-4258-830A-F268EA34A206}_1755598417780.png";

const CollegeMembershipSection = () => {
  const handleScheduleCall = () => {
    // Add your callback scheduling logic here
    console.log('Schedule a call back clicked - College Membership');
  };

  return (
    <section className="relative">
      <img 
        src="/lovable-uploads/ea5f46b9-426e-4670-88d6-3b2d2a43a5ec.png" 
        alt="Institutional Membership - College Membership with Base, Premium, and Elite plans" 
        className="w-full h-auto"
      />
      
      {/* Schedule a Call back button */}
      <div className="flex justify-center py-8">
        <button 
          onClick={handleScheduleCall}
          className="transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          <img 
            src={callBackButton} 
            alt="Schedule a Call back"
            className="h-auto w-auto max-w-sm cursor-pointer"
          />
        </button>
      </div>
    </section>
  );
};

export default CollegeMembershipSection;