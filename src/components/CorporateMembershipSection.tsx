import { Button } from "@/components/ui/button";

const CorporateMembershipSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Corporate Membership</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Elevating corporates by optimizing hiring efficiency, training costs, and 
            fostering seamless academic-industry interaction. Join us in shaping a 
            workforce that meets industry needs effectively.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Benefits Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span className="text-orange-400 italic">Demonstrate Commitment to Academic Excellence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
                  <span className="text-cyan-400 italic">Campus Recruitment Facilitation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                  <span className="text-purple-400 italic">Collaborative Research with Academia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
                  <span className="text-pink-400 italic">Participation in Seminars and Conferences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                  <span className="text-green-400 italic">Skill Building Exercise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-lime-500 mt-2 flex-shrink-0"></span>
                  <span className="text-lime-400 italic">Access to Zero-School Member Institutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span className="text-blue-400 italic">Speaker Opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-gray-500 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-400 italic">Corporate Social Responsibility Through Zero-School</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                  <span className="text-teal-400 italic">Special Tariffs on Advertising</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                  <span className="text-indigo-400 italic">Industry-Institute Interaction Initiative</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/523d455f-888a-4121-babb-a960fe0dd798.png" 
                alt="Professional representative pointing to benefits" 
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Key Benefits Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-4xl font-bold text-gray-400">01</span>
                <h4 className="text-xl font-semibold">Optimizing Hiring efficiency</h4>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-4xl font-bold text-gray-400">02</span>
                <h4 className="text-xl font-semibold">Reduceing Training Cost</h4>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-4xl font-bold text-gray-400">03</span>
                <h4 className="text-xl font-semibold">Academic -Institute Interaction</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              // Add your callback scheduling logic here
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