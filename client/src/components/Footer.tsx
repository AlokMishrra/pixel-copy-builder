import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import RegistrationDialog from "./RegistrationDialog";
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import CollegeRegistrationForm from "./CollegeRegistrationForm";

const Footer = () => {
  const [showRegistrationDialog, setShowRegistrationDialog] = React.useState(false);
  const [showSchoolForm, setShowSchoolForm] = React.useState(false);
  const [showCollegeForm, setShowCollegeForm] = React.useState(false);

  const handleRegistrationSelect = (type: 'school' | 'college' | 'corporate') => {
    setShowRegistrationDialog(false);
    if (type === 'school') {
      setShowSchoolForm(true);
    } else if (type === 'college') {
      setShowCollegeForm(true);
    }
  };

  const handleBackToSelection = () => {
    setShowSchoolForm(false);
    setShowCollegeForm(false);
    setShowRegistrationDialog(true);
  };

  const closeAllDialogs = () => {
    setShowRegistrationDialog(false);
    setShowSchoolForm(false);
    setShowCollegeForm(false);
  };

  return (
    <>
      <footer className="bg-black text-white">
      {/* Connect Us Section */}
      <section className="py-8 sm:py-12 from-black to-gray-900 bg-[#573c3ceb]">
        <div className="container mx-auto">
          <h2 className="responsive-subheading font-bold text-center mb-8 sm:mb-12">Connect Us</h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Instagram Links */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <a 
                  href="https://instagram.com/soumyadeep_zeromonk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-semibold hover:text-primary transition-colors story-link break-all"
                >
                  soumyadeep_zeromonk
                </a>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <a 
                  href="https://instagram.com/zeromonkdiary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-semibold hover:text-primary transition-colors story-link break-all"
                >
                  zeromonkdiary
                </a>
              </div>
            </div>
            
            {/* LinkedIn Links */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <a 
                  href="https://linkedin.com/in/soumyadeep-pramanik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-semibold hover:text-primary transition-colors story-link break-all"
                >
                  Soumyadeep Pramanik
                </a>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <a 
                  href="https://linkedin.com/company/zeromonk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-semibold hover:text-primary transition-colors story-link break-all"
                >
                  zeromonk (zero's school)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <h3 className="text-2xl font-bold">ZEROMONK</h3>
              </div>
              
              <h4 className="text-xl font-semibold mb-4 text-primary">Be 10 times better</h4>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Zeromonk builds technologies that help students connect, find communities, and grow.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Zero's School is not just a program; it's a community learning platform designed to bridge the gap between academia(schools & colleges) and industry.
              </p>
            </div>

            {/* Education Partner */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-primary">Education partner</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors story-link">Institute</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors story-link">Incubation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors story-link">Industry</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors story-link">Mentor</a></li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-primary">Address</h4>
              <div className="space-y-4">
                <p className="text-gray-300">HQ. Dehradun</p>
                <div>
                  <p className="text-gray-400 text-sm">Ph no</p>
                  <a href="tel:7001255277" className="text-gray-300 hover:text-white transition-colors story-link">
                    7001255277
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-primary">follow us</h4>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Button 
              onClick={() => setShowRegistrationDialog(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold responsive-btn rounded-lg hover-scale transition-all duration-300 w-full sm:w-auto"
            >
              Register Now
            </Button>
            
            <Button 
              className="bg-white text-black hover:bg-gray-100 font-semibold responsive-btn rounded-lg flex items-center justify-center space-x-3 hover-scale transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                // Add download logic here
                console.log("Download ZERO clicked");
              }}
            >
              <span>Download ZERO</span>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="py-4 sm:py-6 bg-black border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-2 text-sm sm:text-base">© 2024 Copyright: Zeromonk Pvt. Ltd.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Privacy Policy</a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors story-link">Terms & Condition</a>
          </div>
        </div>
      </section>
      
      {/* Registration Dialogs */}
      <RegistrationDialog 
        isOpen={showRegistrationDialog}
        onClose={closeAllDialogs}
        onSelectType={handleRegistrationSelect}
      />
      
      <SchoolRegistrationForm 
        isOpen={showSchoolForm}
        onClose={closeAllDialogs}
        onBack={handleBackToSelection}
      />
      
      <CollegeRegistrationForm 
        isOpen={showCollegeForm}
        onClose={closeAllDialogs}
        onBack={handleBackToSelection}
      />
    </footer>
    </>
  );
};

export default Footer;