interface NavbarLogoProps {
  onClick: () => void;
}

export const NavbarLogo = ({ onClick }: NavbarLogoProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xl md:text-2xl font-bold text-white tracking-tight cursor-pointer group flex-shrink-0"
    >
      <span className="text-primary-glow group-hover:text-primary transition-colors">M</span>
      <span className="group-hover:text-primary-glow transition-colors">ubeen</span>
    </button>
  );
};
