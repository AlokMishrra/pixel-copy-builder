import impactCharacter from "@/assets/impact-character.jpg";

const ImpactSection = () => {
  return (
    <section className="bg-zero-green text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-zero-orange">Impact</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white text-black p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-zero-orange rounded-full"></div>
                <span className="text-2xl font-bold">200+</span>
              </div>
              <p className="text-lg">Schools</p>
            </div>
            
            <div className="bg-white text-black p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-zero-orange rounded-full"></div>
                <span className="text-lg font-semibold">150+ Mentors</span>
              </div>
            </div>
            
            <div className="bg-white text-black p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-zero-orange rounded-full"></div>
                <span className="text-lg font-semibold">40+ Colleges</span>
              </div>
            </div>
            
            <div className="bg-white text-black p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-zero-orange rounded-full"></div>
                <span className="text-2xl font-bold">30K</span>
              </div>
              <p className="text-lg">Students</p>
            </div>
            
            <div className="col-span-2 text-center">
              <div className="relative inline-block">
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-zero-orange rounded"></div>
                <span className="text-4xl font-bold text-zero-orange">500+ Sessions</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <img
              src={impactCharacter}
              alt="Student character"
              className="w-32 h-40 object-cover"
            />
            <div className="bg-white text-black p-6 rounded-2xl">
              <div className="absolute -top-2 left-6 w-16 h-1 bg-zero-orange rounded"></div>
              <p className="text-sm leading-relaxed">
                A community learning cum aggregator platform designed to bridge the gap between academia and industry. It partners with traditional institutes and make them future-ready through{" "}
                <span className="text-blue-600 font-semibold">School Innovation Council</span>{" "}
                (SIC) and{" "}
                <span className="text-blue-600 font-semibold">College Innovation Council (CIC)</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;