export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for scalability.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      link: "https://github.com/sahit/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      image: "🛒"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses using OpenAI API. Features include message history, user authentication, and responsive design.",
      technologies: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB", "JWT"],
      link: "https://github.com/sahit/ai-chat-app",
      demo: "https://ai-chat-demo.herokuapp.com",
      image: "🤖"
    },
    {
      title: "Task Management System",
      description: "A comprehensive task management system with team collaboration features, real-time updates, and advanced filtering options.",
      technologies: ["Vue.js", "Express.js", "Redis", "Docker", "AWS", "WebSocket"],
      link: "https://github.com/sahit/task-manager",
      demo: "https://taskmanager-demo.netlify.app",
      image: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization, location-based forecasts, and historical weather data analysis.",
      technologies: ["React", "D3.js", "Weather API", "Chart.js", "Styled Components"],
      link: "https://github.com/sahit/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
      image: "🌤️"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects that I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-sm"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{project.image}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Code</span>
                    <span>↗</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Live Demo</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}