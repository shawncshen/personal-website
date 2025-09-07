export default function WorkSection() {
  const experiences = [
    {
      company: "Microsoft",
      position: "Software Engineer II",
      duration: "2022 - Present",
      location: "Seattle, WA",
      description: [
        "Led development of cloud-native applications serving 10M+ users",
        "Architected microservices using Azure Service Fabric and Docker",
        "Mentored 3 junior engineers and contributed to engineering best practices",
        "Reduced system latency by 40% through performance optimizations"
      ],
      technologies: ["C#", "Azure", "React", "TypeScript", "Docker", "Kubernetes"]
    },
    {
      company: "Amazon",
      position: "Software Development Engineer",
      duration: "2020 - 2022",
      location: "Seattle, WA",
      description: [
        "Built scalable backend services for Amazon Prime Video",
        "Implemented real-time data processing pipelines handling 1TB+ daily",
        "Collaborated with cross-functional teams to deliver high-impact features",
        "Improved deployment efficiency by 60% through CI/CD automation"
      ],
      technologies: ["Java", "AWS", "DynamoDB", "Lambda", "React", "Python"]
    },
    {
      company: "Google",
      position: "Software Engineer Intern",
      duration: "Summer 2019",
      location: "Mountain View, CA",
      description: [
        "Developed machine learning models for ad targeting optimization",
        "Created data visualization tools for internal analytics dashboard",
        "Participated in code reviews and contributed to open-source projects"
      ],
      technologies: ["Python", "TensorFlow", "GCP", "BigQuery", "JavaScript"]
    }
  ];

  return (
    <section id="work" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My journey through different companies and the impact I've made along the way
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {exp.position}
                  </h3>
                  <h4 className="text-xl text-blue-600 font-medium mb-2">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-medium">{exp.duration}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-3 mt-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors duration-200"
                  >
                    {tech}
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