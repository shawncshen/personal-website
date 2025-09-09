'use client';
import { useEffect, useState } from 'react';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    console.log('HeroSection useEffect starting!');
    const text = 'SHAWN SHEN';
    let i = 0;
    let cancelled = false;

    const type = () => {
      if (cancelled) return;

      if (i <= text.length) {
        setCurrentText(text.slice(0, i));
        i += 1;
        setTimeout(type, 250);          // typing speed
      } else {
        setTimeout(() => {              // pause full text for 5s
          i = 0;
          setCurrentText('');
          type();                       // restart
        }, 5000);
      }
    };

    type();
    return () => { cancelled = true; };
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
      style={{
        backgroundImage: `url('/aws_2.png')`,
        backgroundPosition: '0px center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/20" />

      <div className="text-center relative z-10">
        <h1 
          className={`${bebas.className} text-white text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight mb-8`}
          style={{
            WebkitTextStroke: '2px rgba(0,0,0,0.25)',
            textShadow: '0 12px 40px rgba(0,0,0,.55), 0 2px 6px rgba(0,0,0,.9)',
          }}
        >
          {currentText}
        </h1>

        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide drop-shadow-lg">
            MY PERSONAL PORTFOLIO!
          </p>
          <p className="text-lg md:text-xl text-white/80 drop-shadow-lg">
            About Me, Work Experiences, Hobbies, Travel, Friends & Family
          </p>
        </div>

        <div className="mt-12">
          <a
            href="#about"
            className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            Explore My Journey
          </a>
        </div>
      </div>
    </section>
  );
}