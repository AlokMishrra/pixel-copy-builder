import { useState } from "react";
import { Button } from "@/components/ui/button";
import CallbackDialog from "./CallbackDialog";

interface CorporateMembershipSectionProps {
  onCallbackClick?: () => void;
}

const CorporateMembershipSection = ({ onCallbackClick }: CorporateMembershipSectionProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCallbackClick = () => {
    setIsDialogOpen(true);
    onCallbackClick?.();
  };

  return (
    <>
      <section className="relative">
        <img 
          src="/lovable-uploads/37c64941-56ed-4847-9dbd-5f7c6c31d1ee.png" 
          alt="Corporate Membership - Elevating corporates by optimizing hiring efficiency, training costs, and fostering seamless academic-industry interaction" 
          className="w-full h-auto"
        />

      </section>

      <CallbackDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </>
  );
};

export default CorporateMembershipSection;