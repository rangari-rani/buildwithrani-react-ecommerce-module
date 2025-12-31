import { Menu, MenuItem } from "@mui/material";
import { Logout, Person, ShoppingBag } from "@mui/icons-material";
import type { UserMenuListProps } from "./types";

const UserMenuList = ({
  anchorEl,
  menuOpen,
  onClose,
  onNavigate,
}: UserMenuListProps) => {
  return (
    <Menu
      id="user-menu"
      anchorEl={anchorEl}
      open={menuOpen}
      onClose={onClose}
      PaperProps={{ sx: { zIndex: 2000 } }}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >

      <MenuItem onClick={() => onNavigate("/profile")}>
        <Person fontSize="small" className="mr-2" /> Profile
      </MenuItem>

      <MenuItem onClick={() => onNavigate("/orders")}>
        <ShoppingBag fontSize="small" className="mr-2" /> Orders
      </MenuItem>

      <MenuItem onClick={() => onNavigate("/")}>
        <Logout fontSize="small" className="mr-2" /> Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenuList;
