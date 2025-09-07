import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import HobbiesSection from './components/HobbiesSection';
import TravelSection from './components/TravelSection';
import FriendsSection from './components/FriendsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <HobbiesSection />
        <TravelSection />
        <FriendsSection />
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
