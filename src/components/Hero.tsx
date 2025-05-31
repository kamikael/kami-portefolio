import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.4) 0%, transparent 70%),
          linear-gradient(to right, #0A1A2E, #0A1A2E)
        `,
      }}
    >
      <div className="text-left z-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
         Hey, I am <span className="text-white">Kami !</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-md">
          Passionate developer creating high-performance web applications and expert in AI automation
        </p>
        <a
          href="#projects"
          className="bg-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition duration-300"
        >
          See my projects
        </a>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-full pointer-events-none">
        <div
          className="absolute top-1/4 -left-4 w-12 h-12 bg-blue-300 rounded-full opacity-70 animate-drop"
          style={{
            animationDelay: '0s',
            animationDuration: '2s',
          }}
        ></div>
        <div
          className="absolute top-1/2 -left-8 w-10 h-10 bg-blue-300 rounded-full opacity-60 animate-drop"
          style={{
            animationDelay: '0.5s',
            animationDuration: '2.2s',
          }}
        ></div>
        <div
          className="absolute top-3/4 -left-2 w-14 h-14 bg-blue-300 rounded-full opacity-50 animate-drop"
          style={{
            animationDelay: '1s',
            animationDuration: '2.4s',
          }}
        ></div>
      </div>
      <style>
        {`
          @keyframes drop {
            0% {
              transform: translateY(-100%) scale(1);
              opacity: 0.7;
            }
            70% {
              transform: translateY(0) scale(1);
              opacity: 0.7;
            }
            100% {
              transform: translateY(0) scale(2);
              opacity: 0;
              border-radius: 50% 50% 50% 0;
            }
          }
          .animate-drop {
            animation: drop infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;