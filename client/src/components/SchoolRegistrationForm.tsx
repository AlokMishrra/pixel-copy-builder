import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface SchoolRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const SchoolRegistrationForm = ({ isOpen, onClose, onBack }: SchoolRegistrationFormProps) => {
  const { toast } = useToast();
  const [sicRegistration, setSicRegistration] = React.useState(false);
  const [hasViewedPdf, setHasViewedPdf] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (sicRegistration && !hasViewedPdf) {
      toast({
        title: "PDF Required",
        description: "Please view the MoU PDF before submitting your registration for School Innovation Council.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration Submitted",
      description: "Your school registration has been submitted successfully. We'll contact you soon!",
    });
    onClose();
  };

  const handlePdfClick = () => {
    // Open PDF in new tab
    const pdfUrl = "/attached_assets/MEMORANDUM%20OF%20UNDERSTANDING%20(MoU%20ZeroSchool)_1755602106189.pdf";
    window.open(pdfUrl, '_blank');
    setHasViewedPdf(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-2xl mx-auto my-4 max-h-[95vh] overflow-y-auto">
        <DialogHeader className="pb-4 sticky top-0 bg-background z-10">
          <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-primary">
            School Registration Form
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="schoolName">School Name *</Label>
              <Input id="schoolName" placeholder="Enter school name" required />
            </div>
            <div>
              <Label htmlFor="authorizedPersonName">Authorized Person Name *</Label>
              <Input id="authorizedPersonName" placeholder="Enter authorized person name" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactNumber">Contact Number *</Label>
              <Input id="contactNumber" type="tel" placeholder="Enter contact number" required />
            </div>
            <div>
              <Label htmlFor="designation">Designation *</Label>
              <Input id="designation" placeholder="Enter designation (e.g., Principal, Director)" required />
            </div>
          </div>

          <div>
            <Label htmlFor="schoolAddress">School Address *</Label>
            <Textarea id="schoolAddress" placeholder="Enter complete school address" required />
          </div>

          <div>
            <Label htmlFor="emailAddress">Email Address *</Label>
            <Input id="emailAddress" type="email" placeholder="Enter email address" required />
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="schoolInnovationCouncil" 
                checked={sicRegistration}
                onCheckedChange={(checked) => setSicRegistration(checked as boolean)}
              />
              <Label 
                htmlFor="schoolInnovationCouncil" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Want to register your school for School Innovation Council?
              </Label>
            </div>
            
            {sicRegistration && (
              <div className="ml-6 text-sm">
                <p className="text-gray-600 mb-2">
                  Please review the Memorandum of Understanding (MoU) before proceeding:
                </p>
                <button
                  type="button"
                  onClick={handlePdfClick}
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  View MoU PDF Document
                </button>
                {hasViewedPdf && (
                  <p className="text-green-600 text-xs mt-1">✓ PDF viewed successfully</p>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 pb-4 sticky bottom-0 bg-background border-t">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onBack}
              className="w-full sm:w-auto min-w-[100px]"
            >
              Back
            </Button>
            <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="w-full sm:w-auto min-w-[100px]"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto min-w-[150px]"
              >
                Submit Registration
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SchoolRegistrationForm;