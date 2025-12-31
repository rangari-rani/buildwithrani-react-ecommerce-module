export interface UserMenuProps {
  isLoggedIn?: boolean;
  userName?: string;
}

export interface AvatarButtonProps {
  userName: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface UserMenuListProps {
  anchorEl: HTMLElement | null;
  menuOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}
