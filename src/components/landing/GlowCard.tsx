import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: string;
  glowDisabled?: boolean;
  /** Classes applied to the outer wrapper (e.g. grid span classes) */
  wrapperClassName?: string;
}

export default function GlowCard({
  className,
  accent,
  children,
  glowDisabled = false,
  wrapperClassName,
  ...props
}: GlowCardProps) {
  return (
    <div className={cn("relative rounded-2xl", accent, wrapperClassName)} {...props}>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={glowDisabled}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className={cn("zentro-card h-full", className)}>
        {children}
      </div>
    </div>
  );
}
