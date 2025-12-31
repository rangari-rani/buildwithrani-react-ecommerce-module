import { Avatar, IconButton, Tooltip } from "@mui/material";
import type { AvatarButtonProps } from "./types";

const AvatarButton = ({ userName, onClick }: AvatarButtonProps) => {
  const avatarInitial = userName.charAt(0).toUpperCase();

  return (
    <Tooltip title="User Menu">
      <IconButton
        onClick={onClick}
        aria-label="Open user menu"
        size="small"
        sx={{
          p: 0,
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: "white",
            color: "#10B981",
            border: "2px solid #10B981",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          {avatarInitial}
        </Avatar>
      </IconButton>
    </Tooltip>
  );
};

export default AvatarButton;
