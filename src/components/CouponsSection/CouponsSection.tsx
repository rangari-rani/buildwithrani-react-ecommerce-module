import React, { useState, useMemo } from "react";

import {
  sampleImages,
  offerSamples,
  expirySamples,
  randomItem,
  mainCategories,
} from "./data";
import SortHeader from "./SortHeader";
import CouponCard from "./CouponCard";
import type { Coupon } from "./types";

const CouponsSection: React.FC = () => {
  const [activeSort, setActiveSort] = useState("Trending");
  const sorts = ["Trending", "Discount", "Expiring Soon", "All"];

  const allCoupons: Coupon[] = useMemo(() => {
    return mainCategories.map((cat, idx) => {
      const offer = randomItem(offerSamples);
      const expiry = randomItem(expirySamples);
      return {
        name: cat.name,
        slug: cat.slug,
        offer: offer.text,
        discountValue: offer.value,
        code: `${cat.slug.toUpperCase().slice(0, 4)}${100 + idx}`,
        expiry: expiry.text,
        expiryDate: expiry.date,
        image: sampleImages[cat.slug] || "/landing-page/default.png",
      };
    });
  }, []);

  const filteredCoupons: Coupon[] = useMemo(() => {
    let sorted = [...allCoupons];
    if (activeSort === "Discount") {
      sorted.sort((a, b) => b.discountValue - a.discountValue);
    } else if (activeSort === "Expiring Soon") {
      sorted.sort(
        (a, b) => a.expiryDate.getTime() - b.expiryDate.getTime()
      );
    } else if (activeSort === "Trending") {
      sorted = sorted.slice(0, 6);
    }
    return sorted;
  }, [activeSort, allCoupons]);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <SortHeader
        activeSort={activeSort}
        setActiveSort={setActiveSort}
        sorts={sorts}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredCoupons.map((coupon) => (
          <CouponCard key={coupon.code} coupon={coupon} />
        ))}
      </div>
    </div>
  );
};

export default CouponsSection;
