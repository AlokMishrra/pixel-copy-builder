import { Button } from "@/components/ui/button";

const CorporateMembershipSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Corporate Membership</h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Elevating corporates by optimizing hiring efficiency, training costs, and 
            fostering seamless academic-industry interaction. Join us in shaping a 
            workforce that meets industry needs effectively.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
          {/* Benefits Section */}
          <div className="bg-gray-200 rounded-3xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-6">Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-orange-500 font-medium">Demonstrate Commitment to Academic Excellence</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                <span className="text-cyan-500 font-medium">Campus Recruitment Facilitation</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-purple-500 font-medium">Collaborative Research with Academia</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                <span className="text-pink-500 font-medium">Participation in Seminars and Conferences</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-green-500 font-medium">Skill Building Exercise</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-3"></span>
                <span className="text-lime-500 font-medium">Access to Zero-School Member Institutions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-orange-500 font-medium">Speaker Opportunities</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                <span className="text-gray-500 font-medium">Corporate Social Responsibility Through Zero-School</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                <span className="text-cyan-500 font-medium">Special Tariffs on Advertising</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-purple-500 font-medium">Industry-Institute Interaction Initiative</span>
              </li>
            </ul>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/c5bc52fe-0f8d-40f4-b66f-56ccebe07003.png" 
              alt="Professional woman pointing" 
              className="max-w-full h-auto"
            />
          </div>

          {/* Numbered Benefits */}
          <div className="space-y-6">
            <div className="bg-gray-200 rounded-3xl p-6 text-black">
              <div className="flex items-center mb-2">
                <span className="text-3xl font-bold text-gray-400 mr-4">01</span>
                <h4 className="text-xl font-bold">Optimizing Hiring efficiency</h4>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-3xl p-6 text-black">
              <div className="flex items-center mb-2">
                <span className="text-3xl font-bold text-gray-400 mr-4">02</span>
                <h4 className="text-xl font-bold">Reducing Training Cost</h4>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-3xl p-6 text-black">
              <div className="flex items-center mb-2">
                <span className="text-3xl font-bold text-gray-400 mr-4">03</span>
                <h4 className="text-xl font-bold">Academic -Institute Interaction</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <Button 
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-12 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              console.log("Schedule a call back clicked");
            }}
          >
            Schedule a Call back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CorporateMembershipSection;