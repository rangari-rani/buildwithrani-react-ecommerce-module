import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";

const RecentOrders: React.FC = () => {
  const navigate = useNavigate();

  const recentOrders = products
    .slice(0, 4)
    .reverse()
    .map((product, index) => ({
      id: product.id,
      product,
      status:
        index === 0
          ? "Pending"
          : index === 1
          ? "Shipped"
          : "Delivered",
    }));

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">
                Order #{order.id}
              </span>

              <span
                className={`text-xs px-2 py-1 rounded-md font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {order.status}
              </span>
            </div>

            <button
              onClick={() =>
                navigate("/account/orders", {
                  state: { highlightId: order.id },
                })
              }
              className="mt-3 text-green-600 text-sm font-medium hover:underline self-start"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
