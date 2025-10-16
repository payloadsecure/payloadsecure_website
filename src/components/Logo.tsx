interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = "", showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 48, text: "text-3xl" }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon - Shield with Payload/Code Symbol */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Shield Outline */}
        <path
          d="M24 4L8 10V20C8 30 14 38 24 44C34 38 40 30 40 20V10L24 4Z"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="url(#logoGradientFill)"
          style={{ filter: 'drop-shadow(0 0 8px rgba(0, 217, 255, 0.6))' }}
        />
        
        {/* Code/Payload Symbol Inside */}
        <path
          d="M18 20L14 24L18 28M30 20L34 24L30 28"
          stroke="#00d9ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="26"
          y1="18"
          x2="22"
          y2="30"
          stroke="#ff0088"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Accent Dots */}
        <circle cx="24" cy="12" r="1.5" fill="#00ff88" opacity="0.8" />
        <circle cx="14" cy="16" r="1" fill="#00d9ff" opacity="0.6" />
        <circle cx="34" cy="16" r="1" fill="#00d9ff" opacity="0.6" />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00d9ff" />
            <stop offset="50%" stopColor="#00ff88" />
            <stop offset="100%" stopColor="#ff0088" />
          </linearGradient>
          <linearGradient id="logoGradientFill" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00ff88" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ff0088" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Logo Text */}
      {showText && (
        <span className={`${currentSize.text} font-semibold bg-gradient-to-r from-[#00d9ff] to-[#ff0088] bg-clip-text text-transparent`}>
          PayloadSecure
        </span>
      )}
    </div>
  );
}
