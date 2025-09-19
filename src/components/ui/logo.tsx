import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center scale-[1.75]">
      <img 
        src="/zentro-logo.png" 
        alt="Zentro Logo" 
        className="h-16 sm:h-12 lg:h-14 xl:h-16 w-auto object-contain transition-all duration-200"
      />
    </div>
  );
};

export default Logo;
