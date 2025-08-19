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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: "Your school registration has been submitted successfully. We'll contact you soon!",
    });
    onClose();
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

          <div className="flex items-center space-x-2">
            <Checkbox id="schoolInnovationCouncil" />
            <Label 
              htmlFor="schoolInnovationCouncil" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Want to register your school for School Innovation Council?
            </Label>
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