import { Button } from "@/components/ui/button";

const CorporateMembershipSection = () => {
  return (
    <section className="relative">
      <img 
        src="/lovable-uploads/37c64941-56ed-4847-9dbd-5f7c6c31d1ee.png" 
        alt="Corporate Membership - Elevating corporates by optimizing hiring efficiency, training costs, and fostering seamless academic-industry interaction" 
        className="w-full h-auto"
      />
      
      {/* Call back button overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
        <Button 
          className="bg-muted/90 hover:bg-muted text-foreground font-semibold px-8 py-3 rounded-lg shadow-lg backdrop-blur-sm border border-border/20 transition-all duration-300 hover:scale-105"
          onClick={() => {
            // Add your callback scheduling logic here
            console.log("Schedule a call back clicked");
          }}
        >
          Schedule a Call back
        </Button>
      </div>
    </section>
  );
};

export default CorporateMembershipSection;