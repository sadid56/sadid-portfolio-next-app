"use client";

import { useRef } from "react";

const ModernFireFooter = () => {
  const containerRef = useRef(null);

  return (
    <footer className='relative w-full overflow-hidden'>
      <div ref={containerRef} className='relative z-10 flex pt-48 pb-20 items-center justify-center'>
        <div className='w-full'>
          <div className='relative'>
            <div className='relative text-center'>
              <div className='relative inline-block'>
                <div className='absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-2xl' />
                <p className='relative text-2xl md:text-3xl font-light tracking-widest'>
                  <span className='bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-400 bg-clip-text text-transparent'>
                    DEVELOPER & CREATOR
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fire Origin Indicator */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none'>
        <div className='relative w-[52rem] h-4'>
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-3xl opacity-70 animate-pulse' />

          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-2xl opacity-80' />
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-lg' />

          <div className='absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-transparent via-orange-300 to-transparent rounded-full' />
        </div>
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-40px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes fireFlow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fireFlow {
          animation: fireFlow 2s ease-in-out infinite;
        }

        .name-letter {
          transition: transform 0.3s ease;
        }

        .name-letter:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </footer>
  );
};

export default ModernFireFooter;
