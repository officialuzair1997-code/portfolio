import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020817]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]" />
      
      <div className="relative flex flex-col items-center">
        {/* Spinner Outer Ring */}
        <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        
        {/* Inner Pulsing Pulse */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/30 animate-pulse" />
        
        {/* Loading Text */}
        <p className="mt-6 text-indigo-400 font-medium tracking-widest text-xs uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
