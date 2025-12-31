import React, { useMemo } from "react";
import Slider from "react-slick";
import type { Product } from "../../data/products";
import GymCard from "../cards/GymCard";

type Props = {
sliderRef: React.RefObject<Slider | null>
  products: Product[];
  slidesToShow?: number;
};

const GymCarousel: React.FC<Props> = ({
  sliderRef,
  products,
  slidesToShow = 6,
}) => {
  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: Math.min(4, slidesToShow) } },
        { breakpoint: 768, settings: { slidesToShow: Math.min(3, slidesToShow) } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    }),
    [slidesToShow]
  );

  return (
    <div className="overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <GymCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GymCarousel;
