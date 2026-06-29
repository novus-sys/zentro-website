import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onFinished: () => void;
}

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // We want the progress to hit 100% in exactly 2000ms (2.0 seconds)
    const startTime = Date.now();
    const duration = 2000; 

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      
      setProgress(calculatedProgress);

      if (calculatedProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 16); // ~60fps updates for butter-smooth progress

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Hold 100% progress for exactly 500ms to reach total loading duration of 2.5 seconds
      const timeout = setTimeout(() => {
        setIsFadingOut(true);
        // Wait for slide-up transition to finish (700ms) before unmounting
        const fadeTimeout = setTimeout(() => {
          onFinished();
        }, 700);
        return () => clearTimeout(fadeTimeout);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#FAFBFD] flex flex-col items-center justify-center select-none overflow-hidden transition-transform duration-700 ease-in-out transform ${
        isFadingOut ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#5048E4] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-500 opacity-[0.03] blur-[130px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative flex flex-col items-center text-center max-w-2xl px-6">
        
        {/* Zentro Black Logo */}
        <div className="mb-4 h-16 md:h-20 flex items-center justify-center">
          <img
            src="/zentro_black_logo-removebg-preview.png"
            alt="Zentro Logo"
            className="h-14 md:h-16 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(80,72,228,0.08)]"
            onError={(e) => {
              // Fallback brand text if logo image is not found/loaded
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.parentElement?.querySelector('.fallback-text');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          {/* Fallback elegant brand text */}
          <div className="fallback-text hidden text-3xl font-bold tracking-tight text-slate-900 font-display">
            ZENTRO
          </div>
        </div>

        {/* Headline matching the Hero font-style */}
        <h2 className="font-serif-display font-normal text-3xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-8 leading-tight max-w-xl">
          Your <span className="text-[#5048E4] italic font-normal">Workmark</span> Speaks Louder
        </h2>

        {/* Progress Track (Without text or counter label) */}
        <div className="w-72 md:w-96">
          <div className="relative w-full h-[4px] bg-slate-200/70 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#5048E4] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
