export default function FriendsSection() {
  const people = [
    {
      name: "Sarah Johnson",
      relationship: "Best Friend",
      description: "My college roommate who became my lifelong best friend. Always there for adventures and deep conversations.",
      image: "👩‍💼",
      memories: ["College Adventures", "Road Trips", "Career Support"]
    },
    {
      name: "The Shen Family",
      relationship: "Family",
      description: "My amazing family who has always supported my dreams and aspirations. The foundation of who I am today.",
      image: "👨‍👩‍👧‍👦",
      memories: ["Family Dinners", "Holiday Traditions", "Unconditional Love"]
    },
    {
      name: "Marcus Chen",
      relationship: "College Friend",
      description: "My study buddy turned lifelong friend. We've been through coding bootcamps and career changes together.",
      image: "👨‍💻",
      memories: ["Late Night Coding", "Tech Conferences", "Career Growth"]
    },
    {
      name: "Emma Rodriguez",
      relationship: "Work Colleague",
      description: "Started as a colleague, became a great friend. We share a passion for technology and personal growth.",
      image: "👩‍🔬",
      memories: ["Team Projects", "Coffee Chats", "Professional Growth"]
    },
    {
      name: "The Squad",
      relationship: "Friend Group",
      description: "My core group of friends from various walks of life. We meet regularly for games, food, and good times.",
      image: "👥",
      memories: ["Game Nights", "Group Travels", "Life Celebrations"]
    },
    {
      name: "Mentor Mike",
      relationship: "Mentor",
      description: "My professional mentor who guided me through career transitions and personal development.",
      image: "👨‍🏫",
      memories: ["Career Guidance", "Life Lessons", "Professional Growth"]
    }
  ];

  return (
    <section id="friends" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Friends & Family
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The amazing people who make life meaningful and inspire me every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map((person, index) => (
            <div 
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{person.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {person.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm">
                  {person.relationship}
                </p>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed text-center">
                {person.description}
              </p>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-800 text-center">Shared Memories:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {person.memories.map((memory, i) => (
                    <span 
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {memory}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Grateful for Every Connection
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              These relationships have shaped who I am today. From family who provided the foundation, 
              to friends who share adventures, to mentors who guide my growth - each connection is precious 
              and has contributed to my journey in meaningful ways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}