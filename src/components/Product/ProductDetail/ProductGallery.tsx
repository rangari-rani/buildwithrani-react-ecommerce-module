import { useState } from "react";
import type { Product } from "../../../data/products";

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  const images = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="md:w-1/3 flex flex-col items-center gap-4">

 
      <div className="flex justify-center items-center bg-linear-to-br from-gray-50 to-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition w-full">
        <img
          src={activeImage}
          alt={product.name}
          className="w-full max-h-80 object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>


      <div className="flex md:hidden gap-3 overflow-x-auto w-full pb-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            onClick={() => setActiveImage(img)}
            className={`w-20 h-20 shrink-0 object-cover rounded-md cursor-pointer border transition
              ${activeImage === img ? "border-black shadow-md" : "border-gray-300"}`}
          />
        ))}
      </div>


      <div className="hidden md:flex flex-row gap-3 w-full items-start">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            onMouseEnter={() => setActiveImage(img)}
            onClick={() => setActiveImage(img)}
            className={`w-20 h-20 object-cover rounded-md cursor-pointer border transition
              ${activeImage === img ? "border-black shadow-md" : "border-gray-300"}`}
          />
        ))}
      </div>

    </div>
  );
}
