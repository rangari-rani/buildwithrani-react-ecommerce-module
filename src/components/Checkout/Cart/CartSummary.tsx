import { FiTag } from "react-icons/fi";
import { priceCalculator } from "./utils/priceCalculator";
import type { CartProduct } from "./cart";
import type { Coupon } from "./coupon";

type CartSummaryProps = {
  cartProducts: CartProduct[];
  appliedCoupon: Coupon | null;
  showCouponInput: boolean;
  setShowCouponInput: (show: boolean) => void;
  handleCouponApply: (coupon: Coupon | null) => void;
  navigate: (path: string) => void;
};


const CartSummary = ({
  cartProducts,
  appliedCoupon,
  showCouponInput,
  setShowCouponInput,
  handleCouponApply,
  navigate,
}: CartSummaryProps) => {
  const price = priceCalculator(cartProducts, appliedCoupon);

  return (
    <div className="lg:w-1/3 bg-white p-6 rounded-xl flex flex-col">

      {/* Coupons Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Coupons</h2>

        <div className="flex items-center gap-2">
          <FiTag className="text-green-600" size={20} />
          <span className="text-gray-700 font-medium">Apply Coupon</span>

          <button
            className="ml-auto bg-green-600 text-white px-4 py-1 rounded-lg"
            onClick={() => setShowCouponInput(!showCouponInput)}
          >
            Apply
          </button>
        </div>

        {showCouponInput && (
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
            />

            <button
              onClick={() =>
                handleCouponApply({
                  code: "WELCOME10",
                  discountPercent: 10,
                })
              }
              className="bg-green-600 text-white px-4 py-1 rounded-lg"
            >
              Apply
            </button>
          </div>
        )}

        {appliedCoupon && (
          <div className="border border-dotted border-gray-300 p-3 rounded-lg mt-2">
            <span className="font-semibold text-green-700">
              {appliedCoupon.code}
            </span>
            <p className="text-sm text-gray-500 mt-1">
              Save {appliedCoupon.discountPercent}% on this order
            </p>
          </div>
        )}
      </div>

      {/* Price Details */}
      <div className="flex flex-col gap-3 mt-4">
        <h2 className="text-xl font-semibold">Price Details</h2>

        <p className="flex justify-between">
          <span>Subtotal:</span>
          <span className="font-semibold">₹{price.subtotal}</span>
        </p>

        {price.discount > 0 && (
          <p className="flex justify-between text-green-600">
            <span>Coupon Discount:</span>
            <span>-₹{price.discount}</span>
          </p>
        )}

        <p className="flex justify-between">
          <span>Platform Fee:</span>
          <span>₹{price.platformFee}</span>
        </p>

        <p className="flex justify-between text-gray-600 text-sm">
          <span>GST (18%):</span>
          <span>₹{price.gst}</span>
        </p>

        <p className="flex justify-between text-gray-600 text-sm">
          <span>Shipping Fee:</span>
          <span>
            {price.shippingFee === 0 ? "Free" : `₹${price.shippingFee}`}
          </span>
        </p>

        <hr />

        <p className="flex justify-between text-lg font-semibold">
          <span>Total Amount:</span>
          <span>
            ₹{price.total + price.gst + price.shippingFee}
          </span>
        </p>
      </div>

      <button
        className="w-full bg-green-600 text-white py-2 rounded-lg mt-4"
        onClick={() => navigate("/checkout/address")}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;

