import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/Checkout/Cart/hooks/useCart";
import EmptyCart from "../../components/Checkout/Cart/EmptyCart";
import CartItems from "../../components/Checkout/Cart/CartItems";
import Recommendations from "../../components/Checkout/Cart/Recommendations";
import CartSummary from "../../components/Checkout/Cart/CartSummary";
import { FiHeart, FiArrowRight } from "react-icons/fi";



const CartPage = () => {
  const navigate = useNavigate();
  const cart = useCart();



  if (cart.cartProducts.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-300 mx-auto px-4 p-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <CartItems
            cartProducts={cart.cartProducts}
            onRemove={cart.handleRemove}
            onQtyChange={cart.handleQuantityChange}
          />
   {/* Add More from Wishlist */}
            <div
              className="flex items-center justify-between p-4 bg-green-50 rounded-xl cursor-pointer hover:bg-green-100 transition"
              onClick={() => navigate("/wishlist")}
            >
              <div className="flex items-center gap-2">
                <FiHeart className="text-green-600" size={20} />
                <span className="font-semibold text-green-700">Add more from Wishlist</span>
              </div>
              <FiArrowRight className="text-green-600" size={20} />
            </div>
          <Recommendations />
        </div>

      <CartSummary
  cartProducts={cart.cartProducts}
  appliedCoupon={cart.appliedCoupon}
  showCouponInput={cart.showCouponInput}
  setShowCouponInput={cart.setShowCouponInput}
  handleCouponApply={cart.setAppliedCoupon}
  navigate={navigate}
/>

      </div>
    </div>
  );
};

export default CartPage;
