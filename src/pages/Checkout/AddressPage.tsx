import { useNavigate } from "react-router-dom";
import AddressForm from "../../components/Checkout/Address/AddressForm";
import { useAddress } from "../../components/Checkout/Address/hooks/useAddress";
import { products } from "../../data/products";


const AddressPage = () => {
  const navigate = useNavigate();
  const { form, handleChange, handleTextareaChange } = useAddress();

  // Mock cart data (UNCHANGED)
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
    <div className="max-w-300 mx-auto px-4 py-6 flex flex-col lg:flex-row gap-8">
      {/* Left */}
      <AddressForm
        form={form}
        handleChange={handleChange}
        handleTextareaChange={handleTextareaChange}
      />

      {/* Right */}
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
          className="w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition"
          onClick={() => navigate("/checkout/payment")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddressPage;
