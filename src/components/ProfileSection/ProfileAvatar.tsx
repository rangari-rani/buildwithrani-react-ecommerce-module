import { CameraAlt } from "@mui/icons-material";

interface Props {
  avatar: string;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileAvatar: React.FC<Props> = ({ avatar, onUpload }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative">
        <img
          src={avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border border-gray-200"
        />
        <label
          htmlFor="avatar-upload"
          className="absolute bottom-0 right-0 bg-green-600 text-white rounded-full p-1.5 cursor-pointer shadow-md hover:bg-green-700 transition"
        >
          <CameraAlt fontSize="small" />
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onUpload}
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
