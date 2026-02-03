import React, { useState, useEffect } from 'react';

interface LogoProps {
  onLoadComplete?: () => void;
  loadingDuration?: number;
}

const Logo: React.FC<LogoProps> = ({ 
  onLoadComplete, 
  loadingDuration = 2500,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete?.();
      }, 800);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, [loadingDuration, onLoadComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-white z-[9999] transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
      
      <div className="flex flex-col items-center gap-8 md:gap-12 animate-[fadeIn_0.6s_ease-out]">
        {/* Logo */}
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
          <img 
            src="https://i.ibb.co/8nVFNhw8/vl.png" 
            alt="V Agency Logo" 
            className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,107,53,0.4)]"
          />
        </div>

        {/* Loading Dots */}
        <div className="flex items-center gap-3 md:gap-4">
          <div 
            className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600"
            style={{
              animation: 'dotPulse 1.4s ease-in-out infinite',
              animationDelay: '0s',
            }}
          />
          <div 
            className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600"
            style={{
              animation: 'dotPulse 1.4s ease-in-out infinite',
              animationDelay: '0.2s',
            }}
          />
          <div 
            className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600"
            style={{
              animation: 'dotPulse 1.4s ease-in-out infinite',
              animationDelay: '0.4s',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;