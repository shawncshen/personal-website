export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Shawn
                </span>
              </h1>
              <p className="text-xl text-gray-700">
                Software Engineer & Full-Stack Developer
              </p>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a passionate software engineer who loves building products that make a difference. 
              Currently working at Microsoft, I specialize in full-stack development and have a keen 
              interest in distributed systems and cloud technologies.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sahit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/sahit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:sahit@example.com"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                Email
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}