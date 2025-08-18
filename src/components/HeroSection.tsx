import heroCharacter from "@/assets/hero-character.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-zero-dark text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Join India's Largest
              <br />
              <span className="relative">
                Institutional Chain
                <div className="absolute -bottom-2 left-0 w-3/4 h-2 bg-zero-orange rounded"></div>
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Making Traditional Institutes
              <br />
              Future-Ready
            </p>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-sm text-gray-400">An initiative by</span>
              <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                🐵 ZEROMONK
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-black mb-2">
                  Kickstart Your School Innovation
                </h3>
                <p className="text-black">
                  Council with <span className="font-bold">ZERO'S SCHOOL</span>
                </p>
              </div>
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <img
                    src="/placeholder.svg"
                    alt="School Innovation Council"
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <p className="text-center text-blue-600 text-sm mb-6">
                SCHOOL INNOVATION COUNCIL
                <br />
                <span className="text-xs text-gray-600">An initiative of MoE's Innovation Cell</span>
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                Register Now
              </Button>
            </div>
            <img
              src={heroCharacter}
              alt="Student character"
              className="absolute -left-8 bottom-0 w-32 h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;