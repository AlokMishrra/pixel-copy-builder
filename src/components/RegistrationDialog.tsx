import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School, Building } from "lucide-react";

interface RegistrationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (type: 'school' | 'college' | 'corporate') => void;
}

const RegistrationDialog = ({ isOpen, onClose, onSelectType }: RegistrationDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-md mx-auto my-8 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-primary">
            Choose Registration Type
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <Card 
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-primary"
            onClick={() => onSelectType('school')}
          >
            <CardHeader className="text-center pb-3">
              <School className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">School Registration</CardTitle>
              <CardDescription>Register your school with Zero's institutional chain</CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-primary"
            onClick={() => onSelectType('college')}
          >
            <CardHeader className="text-center pb-3">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">College Registration</CardTitle>
              <CardDescription>Register your college with Zero's educational network</CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-primary"
            onClick={() => onSelectType('corporate')}
          >
            <CardHeader className="text-center pb-3">
              <Building className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Corporate Registration</CardTitle>
              <CardDescription>Register your organization for corporate partnerships</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="flex justify-center pt-4 pb-2">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="w-full sm:w-auto min-w-[120px]"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;