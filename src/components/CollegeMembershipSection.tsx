import collegeCharacter from "@/assets/college-character.jpg";
import { GraduationCap } from "lucide-react";

const CollegeMembershipSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black">Institutional Membership</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-gray-500 text-sm mb-2">01</div>
              <h3 className="text-xl font-bold mb-2 text-black">Admission Support</h3>
              <p className="text-gray-600">
                Comprehensive school connection services to enhance admissions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-gray-500 text-sm mb-2">02</div>
              <h3 className="text-xl font-bold mb-2 text-black">Placement Support</h3>
              <p className="text-gray-600">
                Exclusive exposure and support for industry-specific internships and placements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-gray-500 text-sm mb-2">03</div>
              <h3 className="text-xl font-bold mb-2 text-black">Incubation Support</h3>
              <p className="text-gray-600">
                Mentoring & Funding connections for improving entrepreneurial initiatives.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl relative">
            <img
              src={collegeCharacter}
              alt="Student character"
              className="absolute -top-8 -right-4 w-24 h-32 object-cover"
            />
            
            <h3 className="text-2xl font-bold mb-6 text-black">College Membership</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-black">Base Membership-</span>
                    <span className="font-bold text-blue-600">30k/year + tax</span>
                  </div>
                  <ul className="text-sm text-gray-600 mt-2">
                    <li className="text-orange-500">• 18 yearly session</li>
                    <li className="text-cyan-500">• 15+ Colleges connected</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-semibold text-black">Premium Membership -</span>
                  <span className="font-bold text-orange-500">30k/Month+Tax</span>
                </div>
                <ul className="text-sm text-orange-500 space-y-1">
                  <li>• 18 yearly session</li>
                  <li>• Incubation Support (Startups Mentoring)</li>
                  <li>• Placement Support (NIIT Free)</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-semibold text-black">Elite Membership -</span>
                  <span className="font-bold text-purple-500">Customizable</span>
                </div>
                <ul className="text-sm text-orange-500 space-y-1">
                  <li>• Premium Membership</li>
                  <li>• Admission Support</li>
                  <li>• Placement Support</li>
                  <li>• Branding Support, Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeMembershipSection;