import { FiTag } from "react-icons/fi";

const CouponSection = ({
  show,
  setShow,
  onApply,
}: any) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Coupons</h2>

      <div className="flex items-center gap-2">
        <FiTag className="text-green-600" size={20} />
        <span className="font-medium">Apply Coupon</span>

        <button
          className="ml-auto bg-green-600 text-white px-4 py-1 rounded-lg"
          onClick={() => setShow((prev: boolean) => !prev)}
        >
          Apply
        </button>
      </div>

      {show && (
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="flex-1 border rounded-lg px-3 py-2"
          />
          <button
            onClick={() => onApply("WELCOME10")}
            className="bg-green-600 text-white px-4 py-1 rounded-lg"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default CouponSection;
