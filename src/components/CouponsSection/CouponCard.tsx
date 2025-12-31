import { LocalOffer, AccessTime } from "@mui/icons-material";
import type { Coupon } from "./types";

interface Props {
  coupon: Coupon;
}

const CouponCard: React.FC<Props> = ({ coupon }) => {


  return (
    <div className="p-4 rounded-xl shadow-sm bg-white flex flex-col justify-between transition hover:shadow-md hover:-translate-y-1">
      <div className="flex flex-col gap-3">
        <img
          src={coupon.image}
          alt={coupon.name}
          className="w-full h-32 object-contain rounded-md"
        />
        <h3 className="text-lg font-semibold">{coupon.name}</h3>
        <p className="text-green-700 font-medium">{coupon.offer}</p>

        <div className="flex items-center text-sm text-gray-700 gap-2">
          <LocalOffer fontSize="small" />
          <span>
            Code: <strong>{coupon.code}</strong>
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-500 gap-1">
          <AccessTime fontSize="small" />
          <span>{coupon.expiry}</span>
        </div>
      </div>

      <button
        
        className="mt-4 bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
      >
        View Products
      </button>
    </div>
  );
};

export default CouponCard;
