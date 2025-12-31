import type { Product } from "../../../data/products";

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  return (
    <div className="flex flex-col rounded-lg gap-6 bg-white p-2">
      <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">
        {product.category}
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
        {product.name}
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-1 mt-0">
          <div className="flex items-center gap-2">
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
              -25%
            </span>
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
          </div>

          <div className="text-sm text-gray-500">
            M.R.P.: <span className="line-through">₹799</span>
          </div>
          <p className="text-xs text-gray-500">Inclusive of all taxes</p>
        </div>

        <div className="flex flex-col gap-2 mt-0 w-full md:w-1/2 items-start md:items-end">

          <div className="flex flex-col gap-1 text-sm w-full md:text-right">
            <p className="text-green-600 font-semibold">In stock</p>
            <p className="text-gray-700">
              Delivery by <span className="font-medium">Tomorrow, 10 AM</span>
            </p>
            <p className="text-gray-500 text-xs">Order within 2 hrs 15 mins</p>
          </div>

   
          <div className="flex items-center gap-3 text-sm w-full md:justify-end">
            <span className="text-gray-700">Quantity:</span>
            <select className="border rounded px-2 py-1 text-sm">
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

        </div>

      </div>
      {/* Rating */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="text-yellow-500">⭐ {product.rating?.toFixed(1) ?? "4.5"}</span>
        <span>|</span>
        <span className="text-blue-600 cursor-pointer hover:underline">
          120 ratings
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* --- NEW SECTION STARTS HERE --- */}

      {/* Offers Box */}
      <div className="mt-3 p-3 rounded-lg border  bg-orange-50 text-sm">
        <p className="font-semibold text-orange-600">Available Offers</p>
        <ul className="text-gray-700 mt-2 space-y-1">
          <li>• Get 5% Instant Discount with Cards</li>
          <li>• ₹50 off on first order</li>
          <li>• Buy 2 & Get Extra 10% Off</li>
        </ul>
      </div>

      {/* Trust Badges */}
      <div className="flex gap-6 mt-3 text-xs text-gray-700 justify-start">
        <div className="flex flex-col items-center">
          🔒
          <span>Secure Payment</span>
        </div>
        <div className="flex flex-col items-center">
          ↩️
          <span>Easy Returns</span>
        </div>
        <div className="flex flex-col items-center">
          🚚
          <span>Fast Delivery</span>
        </div>
      </div>

      {/* --- ORIGINAL CONTENT CONTINUES BELOW --- */}

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed">
        Experience premium quality and reliable performance with{" "}
        <span className="font-medium text-gray-900">{product.name}</span>.
        Designed to improve everyday performance, durability, and user comfort.
      </p>

      {/* Highlights */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-sm text-gray-600">
        <li>✅ Zero sugar formula</li>
        <li>✅ Supports immunity</li>
        <li>✅ Improves energy & stamina</li>
        <li>✅ Vegetarian tablets</li>
        <li>✅ No trans fats</li>
        <li>✅ Safe for daily use</li>
      </ul>
    </div>
  );
}
