import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import NavbarTop from "../NavbarTop/NavbarTop";
import { categories } from "../../../data/categories";
import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import CartWishlistButtons from "./CartWishlistButtons";
import { useWishlist } from "../../Product/ProductDetail/hooks/useWishlist";
import { useCart } from "../../Checkout/Cart/hooks/useCart";

const NavbarMain = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [menuLeft, setMenuLeft] = useState(0);
  const textColor = "#111827";
const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();


  return (
    <Box>
      <NavbarTop />
      <div className="flex items-center justify-between px-2 lg:px-16 h-20 relative">
        <NavbarLogo
          isLarge={isLarge}
          textColor={textColor}
          onMenuClick={() => setDrawerOpen(true)}
        />
        {isLarge && (
          <DesktopNav
            categories={categories}
            hoveredCategory={hoveredCategory}
            setHoveredCategory={setHoveredCategory}
            menuLeft={menuLeft}
            setMenuLeft={setMenuLeft}
            textColor={textColor}
          />
        )}
        <CartWishlistButtons
          wishlistCount={wishlistCount}
          cartCount={cartCount}
          textColor={textColor}
        />
      </div>
      {!isLarge && (
        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          categories={categories}
        />
      )}
    </Box>
  );
};

export default NavbarMain;
