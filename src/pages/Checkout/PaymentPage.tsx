import { useNavigate } from "react-router-dom";
import { usePayment } from "../../components/Checkout/Payment/hooks/usePayment";
import PaymentForm from "../../components/Checkout/Payment/PaymentForm";
import PaymentMethods from "../../components/Checkout/Payment/PaymentMethods";
import { products } from "../../data/products";

const PaymentPage = () => {
  const navigate = useNavigate();
  const payment = usePayment();

  const buttonText =
    payment.method === "online"
      ? `Pay via ${payment.gateway}`
      : payment.method === "upi"
      ? "Pay via UPI"
      : payment.method === "cod"
      ? "Place Order (COD)"
      : "Pay via Card";

  const cartProducts = products.slice(0, 2).map((p) => ({
    ...p,
    quantity: 1,
  }));

  const subtotal = cartProducts.reduce(
    (acc, p) => acc + p.price * p.quantity,
    0
  );

  const platformFee = 10;
  const gst = subtotal * 0.18;
  const shippingFee = subtotal > 499 ? 0 : 50;
  const total = subtotal + platformFee + gst + shippingFee;

  return (
    <div className="max-w-300 mx-auto px-4 p-6">
      <h1 className="text-3xl font-bold mb-8">Payment</h1>

      {/* ✅ ONE flex container — SAME AS ORIGINAL */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Select Payment Method</h2>

          <PaymentMethods
            selected={payment.method}
            onSelect={payment.setMethod}
          />

          <PaymentForm
            method={payment.method}
            gateway={payment.gateway}
            onGatewayChange={payment.setGateway}
          />
        </div>

        {/* RIGHT — PRICE DETAILS (SAME AS ORIGINAL) */}
        <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Price Details</h2>

          <p className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </p>

          <p className="flex justify-between">
            <span>Platform Fee:</span>
            <span>₹{platformFee}</span>
          </p>

          <p className="flex justify-between text-gray-600 text-sm">
            <span>GST (18%):</span>
            <span>₹{Math.round(gst)}</span>
          </p>

          <p className="flex justify-between text-gray-600 text-sm">
            <span>Shipping Fee:</span>
            <span>{shippingFee === 0 ? "Free" : `₹${shippingFee}`}</span>
          </p>

          <hr className="border-t border-gray-300 my-1" />

          <p className="flex justify-between text-lg font-semibold">
            <span>Total Amount:</span>
            <span>₹{Math.round(total)}</span>
          </p>

          <button
            className="w-full bg-green-600 text-white py-2 rounded"
            onClick={() => navigate("/checkout/success")}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
