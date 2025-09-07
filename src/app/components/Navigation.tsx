'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work Exp' },
    { href: '#projects', label: 'Projects' },
    { href: '#travel', label: 'Travel' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-gray-900 ${
                activeSection === item.href.substring(1)
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}