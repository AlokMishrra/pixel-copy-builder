import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface CollegeRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const CollegeRegistrationForm = ({ isOpen, onClose, onBack }: CollegeRegistrationFormProps) => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: "Your college registration has been submitted successfully. We'll contact you soon!",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-primary">
            College Registration Form
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="collegeName">College Name *</Label>
              <Input id="collegeName" placeholder="Enter college name" required />
            </div>
            <div>
              <Label htmlFor="principalName">Principal/Director Name *</Label>
              <Input id="principalName" placeholder="Enter principal/director name" required />
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
            <Label htmlFor="address">College Address *</Label>
            <Textarea id="address" placeholder="Enter complete college address" required />
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
              <Label htmlFor="affiliation">University Affiliation</Label>
              <Input id="affiliation" placeholder="Enter university affiliation" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="collegeType">College Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arts">Arts & Science</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="management">Management</SelectItem>
                  <SelectItem value="pharmacy">Pharmacy</SelectItem>
                  <SelectItem value="law">Law</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="studentCount">Number of Students</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500">0-500</SelectItem>
                  <SelectItem value="501-1000">501-1000</SelectItem>
                  <SelectItem value="1001-3000">1001-3000</SelectItem>
                  <SelectItem value="3000+">3000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="established">Year Established</Label>
              <Input id="established" type="number" placeholder="Enter year" />
            </div>
            <div>
              <Label htmlFor="accreditation">Accreditation</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select accreditation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="naac-a++">NAAC A++</SelectItem>
                  <SelectItem value="naac-a+">NAAC A+</SelectItem>
                  <SelectItem value="naac-a">NAAC A</SelectItem>
                  <SelectItem value="naac-b">NAAC B</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="not-accredited">Not Accredited</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="programs">Programs Offered</Label>
            <Textarea 
              id="programs" 
              placeholder="List the main programs/courses offered by your college"
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="requirements">Specific Requirements</Label>
            <Textarea 
              id="requirements" 
              placeholder="Tell us about your specific requirements and how we can help your college"
              rows={3}
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
            <div className="space-x-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Submit Registration
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeRegistrationForm;