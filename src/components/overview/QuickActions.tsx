import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  LocalOffer,
  Home,
  Payment,
} from "@mui/icons-material";

const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: <ShoppingBag fontSize="large" />,
      title: "Orders",
      subtitle: "Check your order status",
      path: "/account/orders",
    },
    {
      icon: <LocalOffer fontSize="large" />,
      title: "Coupons",
      subtitle: "See available offers",
      path: "/account/coupons",
    },
    {
      icon: <Home fontSize="large" />,
      title: "Address",
      subtitle: "View or edit addresses",
      path: "/account/address",
    },
    {
      icon: <Payment fontSize="large" />,
      title: "Payments",
      subtitle: "Manage saved cards",
      path: "/account/savedcards",
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {quickActions.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <div className="text-green-600 mb-2">{item.icon}</div>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-500 text-center">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
