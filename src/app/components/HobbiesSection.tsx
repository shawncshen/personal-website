export default function HobbiesSection() {
  const hobbies = [
    {
      title: "Photography",
      description: "Capturing moments and exploring the world through the lens. Love landscape and street photography.",
      icon: "📸",
      tags: ["Portrait", "Landscape", "Street"]
    },
    {
      title: "Cooking",
      description: "Experimenting with different cuisines and creating delicious meals for friends and family.",
      icon: "👨‍🍳",
      tags: ["Italian", "Asian", "Fusion"]
    },
    {
      title: "Fitness",
      description: "Staying active through various workouts and outdoor activities. Always pushing for new personal records.",
      icon: "💪",
      tags: ["Weightlifting", "Running", "Hiking"]
    },
    {
      title: "Music",
      description: "Playing instruments and discovering new artists across different genres.",
      icon: "🎵",
      tags: ["Guitar", "Piano", "Jazz"]
    },
    {
      title: "Reading",
      description: "Diving into books about technology, personal development, and fiction novels.",
      icon: "📚",
      tags: ["Tech", "Sci-Fi", "Biography"]
    },
    {
      title: "Gaming",
      description: "Enjoying both competitive and casual gaming experiences across different platforms.",
      icon: "🎮",
      tags: ["Strategy", "RPG", "Multiplayer"]
    }
  ];

  return (
    <section id="hobbies" className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Things I'm passionate about outside of work that keep me inspired and balanced
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {hobby.title}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {hobby.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {hobby.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}