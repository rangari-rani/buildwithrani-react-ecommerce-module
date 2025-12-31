import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const EmptyCart = () => (
  <div className="text-center py-16 text-gray-500">
           <FiShoppingCart
             size={42}
             className="mx-auto mb-4 text-green-300 animate-pulse"
           />
           <p className="mb-3 text-lg">Your cart is empty</p>
           <Link
             to="/all-products"
             className="inline-flex items-center gap-1 text-green-600 hover:underline"
           >
             Start exploring products →
           </Link>
         </div>
);


export default EmptyCart;
