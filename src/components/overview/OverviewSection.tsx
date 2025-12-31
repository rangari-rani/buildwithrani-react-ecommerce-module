import React from "react";
import ProfileHeader from "./ProfileHeader";
import QuickActions from "./QuickActions";
import RecentOrders from "./RecentOrders";

const OverviewSection: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm space-y-4 -mt-2">
      <ProfileHeader />
      <QuickActions />
      <RecentOrders />
    </div>
  );
};

export default OverviewSection;
