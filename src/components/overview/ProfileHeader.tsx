import React from "react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4">
        <Avatar
          sx={{
            width: 72,
            height: 72,
            bgcolor: "#16a34a",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          R
        </Avatar>

        <div>
          <h2 className="text-2xl font-semibold">Hi Rani! 👋</h2>
          <p className="text-gray-500">Welcome back to your account</p>
        </div>
      </div>

      <button
        onClick={() => navigate("/account/profile")}
        className="mt-4 sm:mt-0 px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileHeader;
