export default function VyomaSideLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 hidden md:flex justify-center overflow-hidden">
      <div className="w-full max-w-[1480px] h-full relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left vertical framing hairline */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-6 lg:left-8 w-px bg-gradient-to-b from-white/10 via-[#2A2A2D]/60 to-white/5" />
        
        {/* Right vertical framing hairline */}
        <div className="absolute top-0 bottom-0 right-4 sm:right-6 lg:right-8 w-px bg-gradient-to-b from-white/10 via-[#2A2A2D]/60 to-white/5" />
      </div>
    </div>
  );
}
