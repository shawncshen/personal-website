'use client';

// components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 min-h-screen flex flex-col items-start justify-start px-6 pb-24"
      style={{ paddingTop: '100px' }}
    >
       {/* About Me Title - Separate Container */}
       <div className="w-full flex justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 text-center">
          About Me
        </h2>
       </div>

       {/* Text Content - Separate Container */}
       <div className="max-w-4xl w-full text-left" style={{ marginLeft: '80px', marginTop: '50px', paddingRight: '40px' }}>
        <div className="mt-8 space-y-5 text-lg md:text-xl leading-8 text-zinc-700 text-left pl-16">
          <p className="font-semibold">Dear Reader,</p>

          <p>
            My name is Shawn and I am from Taiwan. I study computer science at
            Georgia Tech. I moved to the US when I was in 3rd grade and I am
            currently living in Georgia Tech&rsquo;s first-ever Hacker House!
          </p>

          <p>
            Growing up, I have participated in countless competitions—from
            representing my school in swimming tournaments to delivering a TEDx
            talk on my journey to 1.6 million TikTok followers. I have failed a
            lot. But one thing that has stuck with me is to never give up and
            keep doing what I love. That is me.
          </p>
        </div>

        <figure className="mt-12" style={{ marginTop: '20px' }}>
          <blockquote 
            className="block rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-4 text-base md:text-lg italic text-zinc-900 font-semibold shadow-lg ring-2 ring-blue-200 transform hover:scale-105 transition-all duration-300 w-fit max-w-full"
            style={{ 
              animation: 'pulse-glow 3s ease-in-out infinite',
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.15)'
            }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              "to never give up on my goals and fight for them every way possible."
            </span>
          </blockquote>
        </figure>
        
        <style jsx>{`
          @keyframes pulse-glow {
            0%, 100% { 
              box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15), 0 0 0 rgba(59, 130, 246, 0.3);
            }
            50% { 
              box-shadow: 0 15px 35px rgba(59, 130, 246, 0.25), 0 0 20px rgba(59, 130, 246, 0.4);
            }
          }
        `}</style>
       </div>
    </section>
  );
}
