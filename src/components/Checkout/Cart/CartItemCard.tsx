import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CartItemCard = ({ p, onRemove, onQtyChange }: any) => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <button
        onClick={() => onRemove(p.slug)}
        className="absolute top-4 right-4 text-gray-400"
      >
        <AiOutlineClose size={18} />
      </button>

      <img
        src={p.image}
        alt={p.name}
        className="w-20 h-20 object-contain rounded-lg cursor-pointer"
        onClick={() => navigate(`/product/${p.slug}`)}
      />

      <div className="flex-1 px-4">
        <h3
          className="font-semibold cursor-pointer"
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          {p.name}
        </h3>

        <p className="text-gray-500 text-sm">{p.category}</p>

        <p className="text-green-600 font-semibold">
          ₹{p.price * p.quantity}
        </p>

        <p className="text-sm">
          <span className="font-bold">7 days</span> return available
        </p>

        <p className="text-sm">
          Delivery by <span className="font-bold">22 oct - 27 oct</span>
        </p>

        <p className="text-red-500 text-sm">Stock: 50</p>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onQtyChange(p.slug, -1)}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            -
          </button>

          <input
            type="number"
            min={1}
            max={100}
            value={p.quantity}
            onChange={(e) =>
              onQtyChange(p.slug, +e.target.value - p.quantity)
            }
            className="w-12 text-center border rounded"
          />

          <button
            onClick={() => onQtyChange(p.slug, 1)}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
