import { products } from "../../../data/products";
import { useNavigate } from "react-router-dom";

const Recommendations = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h4 className="font-semibold mb-4">You may also like</h4>
      <div className="flex gap-4 overflow-x-auto">
        {products.slice(2, 7).map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.slug}`)}
            className="min-w-30 bg-white p-2 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-20 object-contain rounded"
            />
            <p className="text-sm mt-1">{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
