const LogoShowcase = () => {
  const schoolLogos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  const collegeLogos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <>
      {/* School Logos Section */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {schoolLogos.map((logo, index) => (
              <div key={index} className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Logos Section */}
      <section className="bg-gray-100 py-12 px-6 border-t-2 border-zero-coral">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {collegeLogos.map((logo, index) => (
              <div key={index} className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="w-24 h-12 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoShowcase;