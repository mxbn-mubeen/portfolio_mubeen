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

// AI Virtual Mouse Hand Tracking Logo Component
export const AIVirtualMouseLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Coordinate grid / scanner boundary */}
    <rect x="15" y="15" width="70" height="70" rx="14" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
    
    {/* Virtual mouse cursor target */}
    <path d="M68 25 L55 35 L59 38 L54 47 L58 49 L63 40 L67 43 Z" fill="#38BDF8" opacity="0.9" />
    <circle cx="68" cy="25" r="4" fill="#38BDF8" opacity="0.4" />
    
    {/* Optical tracking ray connecting fingertip to cursor */}
    <line x1="42" y1="36" x2="68" y2="25" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.8" />

    {/* Hand Landmark Skeleton (MediaPipe style) */}
    {/* Wrist */}
    <circle cx="50" cy="78" r="3" fill="#0284C7" />
    {/* Palm base */}
    <circle cx="42" cy="65" r="2.5" fill="#38BDF8" />
    <circle cx="58" cy="65" r="2.5" fill="#38BDF8" />
    <line x1="50" y1="78" x2="42" y2="65" stroke="#0284C7" strokeWidth="1.5" opacity="0.6" />
    <line x1="50" y1="78" x2="58" y2="65" stroke="#0284C7" strokeWidth="1.5" opacity="0.6" />

    {/* Index finger extended (Pointer mode) */}
    <line x1="42" y1="65" x2="42" y2="50" stroke="#38BDF8" strokeWidth="2" opacity="0.8" />
    <circle cx="42" cy="50" r="2.5" fill="#38BDF8" />
    <line x1="42" y1="50" x2="42" y2="36" stroke="#38BDF8" strokeWidth="2" />
    <circle cx="42" cy="36" r="3.5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />

    {/* Middle finger slightly bent / gesture */}
    <line x1="50" y1="63" x2="51" y2="48" stroke="#0284C7" strokeWidth="1.5" opacity="0.6" />
    <circle cx="51" cy="48" r="2" fill="#38BDF8" />
    <line x1="51" y1="48" x2="53" y2="40" stroke="#0284C7" strokeWidth="1.5" opacity="0.6" />
    <circle cx="53" cy="40" r="2.5" fill="#38BDF8" />

    {/* Ring and Pinky folded */}
    <circle cx="59" cy="55" r="2" fill="#0284C7" opacity="0.6" />
    <circle cx="65" cy="58" r="2" fill="#0284C7" opacity="0.6" />
    
    {/* Thumb */}
    <line x1="36" y1="70" x2="30" y2="62" stroke="#0284C7" strokeWidth="1.5" opacity="0.6" />
    <circle cx="30" cy="62" r="2.5" fill="#38BDF8" />
  </svg>
);
