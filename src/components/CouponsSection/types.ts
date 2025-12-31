export interface Coupon {
  name: string;
  slug: string;
  offer: string;
  code: string;
  expiry: string;
  expiryDate: Date;
  image: string;
  discountValue: number;
}
