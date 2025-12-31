interface Props {
  product: {
    name: string;
    image: string;
    category: string;
  };
}

const ProductSummary: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 rounded-lg object-cover border"
      />

      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500">
          Category: {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductSummary;
