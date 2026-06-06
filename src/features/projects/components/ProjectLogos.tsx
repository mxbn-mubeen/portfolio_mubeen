// Marine Debris Logo Component
export const MarineDebrisLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ocean waves */}
    <path
      d="M10 60 Q 25 50, 40 60 T 70 60 T 100 60"
      stroke="#3B82F6"
      strokeWidth="3"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M10 70 Q 25 60, 40 70 T 70 70 T 100 70"
      stroke="#60A5FA"
      strokeWidth="3"
      fill="none"
      opacity="0.4"
    />
    
    {/* Camera/Detection lens */}
    <circle cx="50" cy="35" r="20" fill="#10B981" opacity="0.2" />
    <circle cx="50" cy="35" r="15" stroke="#10B981" strokeWidth="2" fill="none" />
    <circle cx="50" cy="35" r="8" fill="#10B981" />
    
    {/* Scanning lines */}
    <line x1="50" y1="20" x2="50" y2="10" stroke="#10B981" strokeWidth="2" opacity="0.6" />
    <line x1="65" y1="27" x2="72" y2="20" stroke="#10B981" strokeWidth="2" opacity="0.6" />
    <line x1="35" y1="27" x2="28" y2="20" stroke="#10B981" strokeWidth="2" opacity="0.6" />
  </svg>
);

// AI Projects Suite Logo Component
export const AIProjectsSuiteLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Neural network nodes */}
    <circle cx="30" cy="25" r="8" fill="#8B5CF6" opacity="0.8" />
    <circle cx="70" cy="25" r="8" fill="#8B5CF6" opacity="0.8" />
    <circle cx="30" cy="75" r="8" fill="#8B5CF6" opacity="0.8" />
    <circle cx="70" cy="75" r="8" fill="#8B5CF6" opacity="0.8" />
    <circle cx="50" cy="50" r="12" fill="#A78BFA" opacity="0.9" />
    
    {/* Connection lines */}
    <line x1="30" y1="25" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
    <line x1="70" y1="25" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
    <line x1="30" y1="75" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
    <line x1="70" y1="75" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
    
    {/* Outer glow */}
    <circle cx="50" cy="50" r="35" stroke="#A78BFA" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="5 5">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="20s"
        repeatCount="indefinite"
      />
    </circle>
    
    {/* AI Spark */}
    <path d="M50 10 L52 18 L60 16 L54 22 L58 30 L50 26 L42 30 L46 22 L40 16 L48 18 Z" fill="#C4B5FD" opacity="0.6" />
  </svg>
);
