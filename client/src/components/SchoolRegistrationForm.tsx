import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
              <Label htmlFor="principalName">Principal Name *</Label>
              <Input id="principalName" placeholder="Enter principal name" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="Enter email address" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="Enter phone number" required />
            </div>
          </div>

          <div>
            <Label htmlFor="address">School Address *</Label>
            <Textarea id="address" placeholder="Enter complete school address" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input id="city" placeholder="Enter city" required />
            </div>
            <div>
              <Label htmlFor="state">State *</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="telangana">Telangana</SelectItem>
                  <SelectItem value="kerala">Kerala</SelectItem>
                  {/* Add more states as needed */}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pincode">Pincode *</Label>
              <Input id="pincode" placeholder="Enter pincode" required />
            </div>
            <div>
              <Label htmlFor="affiliation">Board Affiliation</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select board" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cbse">CBSE</SelectItem>
                  <SelectItem value="icse">ICSE</SelectItem>
                  <SelectItem value="state-board">State Board</SelectItem>
                  <SelectItem value="ib">International Baccalaureate</SelectItem>
                  <SelectItem value="cambridge">Cambridge</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="studentCount">Number of Students</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100">0-100</SelectItem>
                  <SelectItem value="101-500">101-500</SelectItem>
                  <SelectItem value="501-1000">501-1000</SelectItem>
                  <SelectItem value="1000+">1000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="established">Year Established</Label>
              <Input id="established" type="number" placeholder="Enter year" />
            </div>
          </div>

          <div>
            <Label htmlFor="requirements">Specific Requirements</Label>
            <Textarea 
              id="requirements" 
              placeholder="Tell us about your specific requirements and how we can help your school"
              rows={3}
            />
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