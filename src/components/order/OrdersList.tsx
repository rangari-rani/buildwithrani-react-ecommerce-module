import React from "react";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";

interface Props {
  filteredOrders: any[];
  highlightId: number;
  setTrackingOrderId: (v: number) => void;
  setInvoiceOrderId: (v: number) => void;
}


const OrdersList: React.FC<Props> = ({
  filteredOrders,
  highlightId,
  setTrackingOrderId,
  setInvoiceOrderId,
}) => {

  const navigate = useNavigate();
  const isHighlighted = (orderId: number) => orderId === highlightId;

  return (
    <div className="space-y-6">
      {filteredOrders.map((order) => {
        const product = products.find((p) => p.id === order.id)!;

        return (
          <div
            key={order.id}
            className={`border border-gray-200 rounded-lg p-4 flex items-center justify-between transition ${isHighlighted(order.id)
              ? "ring-2 ring-green-500 bg-green-50"
              : ""
              }`}
          >
            <div className="flex items-center gap-4">
              <img

                src={product.image}
                alt={product.name}
                className="w-20 h-20 rounded-md border object-cover transition-transform duration-200 hover:scale-105"
              />
              <div className="flex-1">
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-gray-500 text-sm">
                  Category: {product.category}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-md font-medium mt-1 inline-block ${order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                    }`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              {order.status === "Shipped" && (
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
                  onClick={() => setTrackingOrderId(order.id)}
                >
                  Track
                </button>

              )}

 {order.status === "Delivered" && (
  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
    {/* View Invoice — always button */}
    <button
      className="
      w-full sm:w-auto
      text-blue-500 sm:text-white
      bg-transparent sm:bg-blue-500
      px-0 sm:px-4
      py-1 sm:py-2
      rounded-none sm:rounded-lg
      text-sm font-medium
      hover:underline sm:hover:no-underline
      sm:hover:bg-blue-700
      transition
      "
      onClick={() => setInvoiceOrderId(order.id)}
    >
      View Invoice
    </button>

    {/* Rate Product — text on mobile, button on desktop */}
    <button
      className="
      w-full sm:w-auto
      text-red-500 sm:text-white
      bg-transparent sm:bg-red-400
      px-0 sm:px-4
      py-1 sm:py-2
      rounded-none sm:rounded-lg
      text-sm font-medium
      hover:underline sm:hover:no-underline
      sm:hover:bg-red-500
      transition
      "
      onClick={() => navigate(`/ratings/${order.id}`)}
    >
      Rate Product
    </button>
  </div>
)}


              {order.status === "Pending" && (
                <button
                  className="px-4 py-2 border border-gray-300 text-gray-400 rounded-lg text-sm cursor-not-allowed"
                  disabled
                >
                  Pending
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersList;
