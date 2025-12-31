import { Routes, Route } from "react-router-dom";
import CartPage from "../../pages/Checkout/CartPage";
import AddressPage from "../../pages/Checkout/AddressPage";
import PaymentPage from "../../pages/Checkout/PaymentPage";
import OrderSuccessPage from "../../pages/Checkout/OrderSuccessPage";

export default function Checkout() {
  return (
    <Routes>
      {/* Step 1 — Cart */}
      <Route path="cart" element={<CartPage />} />

      {/* Step 2 — Address */}
      <Route path="address" element={<AddressPage />} />

      {/* Step 3 — Payment */}
      <Route path="payment" element={<PaymentPage />} />

      {/* Step 4 — Success */}
      <Route path="success" element={<OrderSuccessPage />} />

      {/* Optional fallback route (if user directly visits /checkout) */}
      <Route
        index
        element={
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-gray-700">
            <h2 className="text-2xl font-semibold mb-2">Checkout Flow</h2>
            <p className="text-gray-500 mb-4">
              Start your checkout journey from the cart page.
            </p>
            <a
              href="/checkout/cart"
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Go to Cart
            </a>
          </div>
        }
      />
    </Routes>
  );
}
