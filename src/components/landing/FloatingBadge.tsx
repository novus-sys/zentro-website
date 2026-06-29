interface FloatingBadgeProps {
  className?: string;
  children: React.ReactNode;
  animationClass?: string;
}

export default function FloatingBadge({ className = "", children, animationClass = "animate-float" }: FloatingBadgeProps) {
  return (
    <div
      className={`hidden lg:block absolute backdrop-blur-xl p-4 border border-primary/20 rounded-xl shadow-xl bg-card/95 ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
}
