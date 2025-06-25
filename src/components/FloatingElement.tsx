import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  price?: number;
}

const FloatingElement = ({
  children,
  delay = 0,
  duration = 3,
  price,
}: FloatingElementProps) => {
  return (
    <div className="relative inline-block">
      <div
        className="animate-bounce"
        style={{
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      >
        {children}
      </div>

      {price && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg border-2 border-yellow-300 animate-pulse">
          <span className="flex items-center gap-1">🪙 {price}</span>
        </div>
      )}
    </div>
  );
};

export default FloatingElement;
