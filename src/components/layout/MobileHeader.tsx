import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

interface MobileHeaderProps {
  title: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 768;
  if (!isMobile) return null; // only show on mobile

  return (
    <div className="flex items-center gap-3 mb-4 px-2">
      <button
        onClick={() => navigate("/account")}
        className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
      >
        <ArrowBack className="text-green-600" />
      </button>
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default MobileHeader;
