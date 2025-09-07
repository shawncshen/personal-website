import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ProjectsSection from './components/ProjectsSection';
import TravelSection from './components/TravelSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <TravelSection />
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2024 Shawn Shen. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
