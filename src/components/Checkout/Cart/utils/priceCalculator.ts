import type { Coupon } from "../coupon";

export function priceCalculator(
  cartProducts: any[],
  appliedCoupon: Coupon  | null
) {
  const subtotal = cartProducts.reduce(
    (acc, p) => acc + p.price * p.quantity,
    0
  );

let discount = 0;

if (appliedCoupon) {
  discount = (subtotal * appliedCoupon.discountPercent) / 100;
}


  const platformFee = 10;
  const gst = Math.round(subtotal * 0.18);
  const shippingFee = subtotal > 499 ? 0 : 50;

  const total = subtotal - discount + platformFee;

  return {
    subtotal,
    discount,
    platformFee,
    gst,
    shippingFee,
    total,
    rewardPoints: Math.floor((subtotal - discount) / 10),
    estimatedDelivery: "22 Oct - 27 Oct",
  };
}
