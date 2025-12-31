import { IconButton, Badge } from "@mui/material";
import { FavoriteBorder, AddShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

interface CartWishlistButtonsProps {
  wishlistCount: number;
  cartCount: number;
  textColor: string;
}

const CartWishlistButtons = ({
  wishlistCount,
  cartCount,
  textColor,
}: CartWishlistButtonsProps) => {
  return (
    <div className="flex items-center gap-3 min-w-fit">
      <SearchBar />

      <IconButton component={Link} to="/wishlist">
        <Badge
          badgeContent={wishlistCount}
            invisible={wishlistCount === 0}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#10B981",
              color: "white",
            },
          }}
        >
          <FavoriteBorder sx={{ fontSize: 24, color: textColor }} />
        </Badge>
      </IconButton>

      <IconButton component={Link} to="/checkout/cart">
        <Badge
          badgeContent={cartCount}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#10B981",
              color: "white",
            },
          }}
        >
          <AddShoppingCart sx={{ fontSize: 24, color: textColor }} />
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWishlistButtons;
