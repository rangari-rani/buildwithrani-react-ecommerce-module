import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import OverviewSection from "../components/overview/OverviewSection";
import OrderSection from "../components/order/OrderSection";
import AddressSection from "../components/AddressSection/AddressSection";
import PaymentMethods from "../components/PaymentMethods/PaymentMethods";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import CouponsSection from "../components/CouponsSection/CouponsSection";


const Account: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ✅ Listen for resize to update layout dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Overview", path: "overview" },
    { name: "Orders", path: "orders" },
      { name: "Profile", path: "profile" },
    { name: "Coupons", path: "coupons" },
    { name: "Address", path: "address" },
    { name: "Saved Cards", path: "savedcards" },
  ];

  // ✅ Desktop View
  if (!isMobile) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 space-y-2 bg-white">
          <Link to="/">
            <h2 className="text-xl font-semibold">My Account</h2>
          </Link>
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(`/account/${item.path}`)}
              className={`block w-full text-left px-3 py-2 rounded-md hover:bg-green-100 transition ${
                location.pathname.includes(item.path)
                  ? "bg-green-200 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </aside>

        {/* Right section */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<OverviewSection />} />
            <Route path="overview" element={<OverviewSection />} />
            <Route path="orders" element={<OrderSection />} />
            <Route path="coupons" element={<CouponsSection />} />
            <Route path="profile" element={<ProfileSection />} />
            <Route path="address" element={<AddressSection />} />
            <Route path="savedcards" element={<PaymentMethods/>}/>
          </Routes>
        </main>
      </div>
    );
  }

  // ✅ Mobile View (each section is separate)
  return (
    <div className="min-h-screen bg-gray-50">
      {location.pathname !== "/account" && (
        <div className="flex items-center gap-3 mb-4 px-4 py-2 bg-white sticky top-0 z-40 shadow-sm">
          <button
            onClick={() => navigate("/account")}
            className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
          >
            <ArrowBack className="text-green-600" />
          </button>
          <h2 className="text-base font-semibold capitalize">
            {location.pathname.split("/").pop()}
          </h2>
        </div>
      )}

      <Routes>
        <Route path="/" element={<OverviewSection />} />
        <Route path="overview" element={<OverviewSection />} />
        <Route path="orders" element={<OrderSection />} />
        <Route path="coupons" element={<CouponsSection />} />
        <Route path="profile" element={<ProfileSection />} />
        <Route path="address" element={<AddressSection />} />
        <Route path="savedcards" element={<PaymentMethods />} />
      </Routes>
    </div>
  );
};

export default Account;
