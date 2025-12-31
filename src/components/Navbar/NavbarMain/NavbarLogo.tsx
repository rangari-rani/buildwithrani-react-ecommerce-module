import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface NavbarLogoProps {
  isLarge: boolean;
  textColor: string;
  onMenuClick: () => void;
}

const NavbarLogo = ({ isLarge, textColor, onMenuClick }: NavbarLogoProps) => {
  return (
    <div className="flex items-center gap-2 min-w-fit">
      {!isLarge && (
        <IconButton
          onClick={onMenuClick}
          aria-label="Open menu"
          size="large"
          sx={{ color: textColor }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <h1
        className="cursor-pointer text-lg md:text-2xl font-bold select-none"
        style={{ color: "#10B981" }}
        onClick={() => (window.location.href = "/")}
      >
        Wellness Cart🌿
      </h1>
    </div>
  );
};

export default NavbarLogo;
