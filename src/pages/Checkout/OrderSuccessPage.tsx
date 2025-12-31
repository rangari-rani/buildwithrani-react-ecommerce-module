import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import OrderSummaryCard from "../../components/Checkout/OrderSuccess/OrderSummaryCard";
import { useOrderSuccess } from "../../components/Checkout/OrderSuccess/hooks/useOrderSuccess";

const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const { order } = useOrderSuccess();

  return (
       <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-10 text-center bg-linear-to-b from-white to-green-50">
        {/* Success Icon */}
            <div className="bg-green-100 p-6 rounded-full mb-4 shadow-md">
              <FiCheckCircle className="text-green-600" size={70} />
            </div>

        {/* Headline */}
      <h1 className="text-3xl font-semibold text-green-700 mb-2">
        Order Placed Successfully!
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Thank you for shopping with <span className="font-medium">WellnessCart</span>.
        Your order has been confirmed and is being processed.
      </p>

      <OrderSummaryCard order={order} />

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => navigate("/account/orders")}
          className="border border-green-600 text-green-700 px-6 py-2 rounded-lg hover:bg-green-50 transition"
        >
          View My Orders
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
