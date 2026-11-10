import { BrandLogo } from "@/shared/components/BrandLogo";

interface NavbarLogoProps {
  onClick: () => void;
}

export const NavbarLogo = ({ onClick }: NavbarLogoProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer group flex-shrink-0 flex items-center justify-center p-1 rounded-xl hover:scale-105 transition-transform duration-200"
      aria-label="Mohamed Mubeen Portfolio Home"
    >
      <BrandLogo size="md" showWordmark={false} />
    </button>
  );
};
