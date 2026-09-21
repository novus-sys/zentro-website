import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Outer circle spring config for smooth trailing inertia
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch devices
    const checkTouchDevice = () => {
      const hasTouch = 
        "ontouchstart" in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(hasTouch);
    };

    checkTouchDevice();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer") ||
        target.getAttribute("role") === "button" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT";

      setIsHovering(Boolean(isInteractive));
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Inject styles to hide default cursor
    const style = document.createElement("style");
    style.id = "custom-cursor-hide-default";
    style.innerHTML = `
      @media (pointer: fine) {
        html, body, a, button, input, select, textarea, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      
      const styleElement = document.getElementById("custom-cursor-hide-default");
      if (styleElement) styleElement.remove();
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Smooth Circle (Vibrant Purple) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovering ? 1.6 : 1,
          borderColor: isHovering ? "rgba(80, 72, 228, 0.85)" : "rgba(80, 72, 228, 0.4)",
          backgroundColor: isHovering ? "rgba(80, 72, 228, 0.05)" : "rgba(80, 72, 228, 0)",
          borderWidth: isHovering ? "2px" : "1px",
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 28,
          borderColor: { duration: 0.15 },
          borderWidth: { duration: 0.15 },
          backgroundColor: { duration: 0.15 }
        }}
      />

      {/* Inner Target Center Dot (Primary Blue) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#0B25A1] z-[10000] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 1.8 : isHovering ? 0.5 : 1,
          backgroundColor: isHovering ? "#2563EB" : "#0B25A1",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      />
    </>
  );
}
