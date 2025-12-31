import UserMenu from '../UserMenu/UserMenu';

interface UserSectionProps {
  isLoggedIn?: boolean;
  userName?: string;
}

const UserSection = ({ isLoggedIn = false, userName = "Rani" }: UserSectionProps) => (
  <UserMenu isLoggedIn={isLoggedIn} userName={userName} />
);

export default UserSection;
