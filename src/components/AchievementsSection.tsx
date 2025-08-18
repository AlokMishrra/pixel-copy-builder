const AchievementsSection = () => {
  const achievements = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black">Achievements</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;