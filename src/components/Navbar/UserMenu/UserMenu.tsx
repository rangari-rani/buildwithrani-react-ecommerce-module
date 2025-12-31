import React, { useState, type FC } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { AvatarButton, LoginButton, UserMenuList } from "./";
import type { UserMenuProps } from "./types";

const UserMenu: FC<UserMenuProps> = ({ isLoggedIn = false, userName = "Rani" }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleNavigate = (path: string) => {
    handleMenuClose();
    navigate(path);
  };

  return (
    <Box className="flex items-center gap-3 relative z-50">
      {!isLoggedIn ? (
        <LoginButton />
      ) : (
        <>
          <AvatarButton userName={userName} onClick={handleAvatarClick} />
          <UserMenuList
            anchorEl={anchorEl}
            menuOpen={menuOpen}
            onClose={handleMenuClose}
            onNavigate={handleNavigate}
          />
        </>
      )}
    </Box>
  );
};

export default UserMenu;

