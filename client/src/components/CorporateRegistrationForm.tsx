import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface CorporateRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const CorporateRegistrationForm = ({ isOpen, onClose, onBack }: CorporateRegistrationFormProps) => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: "Your corporate registration has been submitted successfully. We'll contact you soon!",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-2xl mx-auto my-4 max-h-[95vh] overflow-y-auto">
        <DialogHeader className="pb-4 sticky top-0 bg-background z-10">
          <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-primary">
            Corporate Registration Form
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companyName">Company Name *</Label>
              <Input id="companyName" placeholder="Enter company name" required />
            </div>
            <div>
              <Label htmlFor="contactPersonName">Contact Person Name *</Label>
              <Input id="contactPersonName" placeholder="Enter contact person name" required />
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
            <Label htmlFor="companyAddress">Company Address *</Label>
            <Textarea id="companyAddress" placeholder="Enter complete company address" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="industry">Industry Type *</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="companySize">Company Size *</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startup">Startup (1-10)</SelectItem>
                  <SelectItem value="small">Small (11-50)</SelectItem>
                  <SelectItem value="medium">Medium (51-200)</SelectItem>
                  <SelectItem value="large">Large (201-1000)</SelectItem>
                  <SelectItem value="enterprise">Enterprise (1000+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="partnershipType">Partnership Interest *</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select partnership type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mentorship">Mentorship Programs</SelectItem>
                <SelectItem value="internship">Internship Opportunities</SelectItem>
                <SelectItem value="hiring">Hiring Partnerships</SelectItem>
                <SelectItem value="training">Corporate Training</SelectItem>
                <SelectItem value="consulting">Consulting Services</SelectItem>
                <SelectItem value="sponsorship">Event Sponsorship</SelectItem>
                <SelectItem value="other">Other Collaboration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="website">Company Website</Label>
            <Input id="website" type="url" placeholder="Enter company website (optional)" />
          </div>

          <div>
            <Label htmlFor="linkedinProfile">LinkedIn Company Profile</Label>
            <Input id="linkedinProfile" type="url" placeholder="Enter LinkedIn company profile (optional)" />
          </div>

          <div>
            <Label htmlFor="description">Partnership Goals & Description *</Label>
            <Textarea 
              id="description" 
              placeholder="Describe your partnership goals, what you hope to achieve, and how you'd like to collaborate with our community" 
              required 
            />
          </div>

          <div>
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea 
              id="additionalInfo" 
              placeholder="Any additional information you'd like to share about your company or partnership intentions" 
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 pb-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onBack}
              className="flex-1"
            >
              Back to Selection
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
            >
              Submit Registration
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CorporateRegistrationForm;