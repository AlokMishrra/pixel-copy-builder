import membershipCharacter from "@/assets/membership-character.jpg";
import { Users } from "lucide-react";

const MembershipSection = () => {
  return (
    <section className="bg-zero-coral text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Institutional Membership</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white text-black p-8 rounded-3xl relative">
            <img
              src={membershipCharacter}
              alt="Student character"
              className="absolute -top-8 -left-4 w-24 h-32 object-cover"
            />
            
            <div className="ml-16">
              <h3 className="text-2xl font-bold mb-6">School Membership</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">Base Membership-</span>
                      <span className="text-red-500 line-through">12k/year</span>
                      <span className="font-bold text-green-600">No Cost</span>
                    </div>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li className="text-orange-500">• 18 yearly session</li>
                      <li className="text-cyan-500">• 40+ schools connected</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-semibold">Premium Membership -</span>
                    <span className="font-bold text-orange-500">12k/Month</span>
                  </div>
                  <ul className="text-sm text-orange-500 space-y-1">
                    <li>• 18 yearly session + industry exposure</li>
                    <li>• Future Skill (Gen.AI, Robotics, Coding, Graphic designing etc.)</li>
                    <li>• Critical thinking(Chess), Creative Arts</li>
                    <li>• School Innovation Council (Startups) Support</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-semibold">Elite Membership -</span>
                    <span className="font-bold text-purple-500">Customizable</span>
                  </div>
                  <ul className="text-sm text-orange-500 space-y-1">
                    <li>• Premium Membership</li>
                    <li>• Branding Support, Marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white text-black p-6 rounded-2xl">
              <div className="text-gray-500 text-sm mb-2">01</div>
              <h3 className="text-xl font-bold mb-2">Future Skill training</h3>
              <p className="text-gray-600">
                Covering essential areas such as AI, Robotics, Finance, Graphic designing and Ethical Tech.
              </p>
            </div>
            
            <div className="bg-white text-black p-6 rounded-2xl">
              <div className="text-gray-500 text-sm mb-2">02</div>
              <h3 className="text-xl font-bold mb-2">Career Exposure</h3>
              <p className="text-gray-600">
                Providing students with valuable insights into different industries and personalized career counselling.
              </p>
            </div>
            
            <div className="bg-white text-black p-6 rounded-2xl">
              <div className="text-gray-500 text-sm mb-2">03</div>
              <h3 className="text-xl font-bold mb-2">SIC</h3>
              <p className="text-gray-600">
                Assisting in fostering innovation within the school through various initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;