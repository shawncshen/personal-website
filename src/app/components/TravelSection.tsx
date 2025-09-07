export default function TravelSection() {
  const travelStats = [
    { label: "Countries Visited", value: "23", icon: "🌍" },
    { label: "Cities Explored", value: "87", icon: "🏙️" },
    { label: "Continents", value: "5", icon: "🗺️" },
    { label: "Miles Traveled", value: "150K+", icon: "✈️" }
  ];

  const bucketList = [
    { country: "Japan", activity: "Cherry Blossom Season", emoji: "🌸", priority: "high" },
    { country: "Iceland", activity: "Northern Lights", emoji: "🌌", priority: "high" },
    { country: "New Zealand", activity: "Bungee Jumping", emoji: "🪂", priority: "medium" },
    { country: "Morocco", activity: "Sahara Desert", emoji: "🐪", priority: "medium" },
    { country: "Norway", activity: "Fjord Cruise", emoji: "🛥️", priority: "medium" },
    { country: "Peru", activity: "Machu Picchu", emoji: "⛰️", priority: "high" },
    { country: "Thailand", activity: "Street Food Tour", emoji: "🍜", priority: "low" },
    { country: "Egypt", activity: "Pyramids of Giza", emoji: "🔺", priority: "medium" }
  ];

  const recentTrips = [
    {
      destination: "Santorini, Greece",
      date: "Summer 2023",
      image: "🏖️",
      highlight: "Watched the most beautiful sunset over the Aegean Sea"
    },
    {
      destination: "Tokyo, Japan",
      date: "Spring 2023",
      image: "🏯",
      highlight: "Experienced the incredible blend of tradition and technology"
    },
    {
      destination: "Swiss Alps",
      date: "Winter 2022",
      image: "🏔️",
      highlight: "Skiing in the pristine powder snow of the Alps"
    }
  ];

  return (
    <section id="travel" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Adventures
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Exploring the world one destination at a time, collecting memories and experiences
          </p>
        </div>

        {/* Travel Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {travelStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Trips */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Recent Adventures</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentTrips.map((trip, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{trip.image}</div>
                <h4 className="text-xl font-bold text-white mb-2">{trip.destination}</h4>
                <p className="text-blue-400 mb-3 font-medium">{trip.date}</p>
                <p className="text-gray-300 text-sm">{trip.highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bucket List */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Bucket List Destinations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bucketList.map((item, index) => (
              <div 
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:transform hover:scale-105 ${
                  item.priority === 'high' 
                    ? 'border-red-500/50 hover:border-red-400' 
                    : item.priority === 'medium'
                    ? 'border-yellow-500/50 hover:border-yellow-400'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="text-3xl mb-3 text-center">{item.emoji}</div>
                <h4 className="text-lg font-bold text-white mb-1 text-center">{item.country}</h4>
                <p className="text-gray-400 text-sm text-center">{item.activity}</p>
                <div className="flex justify-center mt-3">
                  <span 
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.priority === 'high' 
                        ? 'bg-red-900/50 text-red-300' 
                        : item.priority === 'medium'
                        ? 'bg-yellow-900/50 text-yellow-300'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {item.priority} priority
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}