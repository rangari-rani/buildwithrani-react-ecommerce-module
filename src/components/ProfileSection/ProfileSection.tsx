import React, { useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "./ProfileForm";

const ProfileSection: React.FC = () => {
  const [profile, setProfile] = useState({
    name: "Rani Rangari",
    email: "rani@example.com",
    phone: "+91 9876543210",
    altPhone: "",
    gender: "female",
    birthday: "2025-05-12",
    avatar: "/user-avatar.png",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, avatar: url }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Edit Profile
      </h2>

      <ProfileAvatar
        avatar={profile.avatar}
        onUpload={handleImageUpload}
      />

      <ProfileForm
        profile={profile}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ProfileSection;
