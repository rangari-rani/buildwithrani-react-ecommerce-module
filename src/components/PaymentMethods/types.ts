export interface PaymentCard {
  id: number;
  type: "Razorpay" | "Stripe";
  last4: string;
  expiry: string;
  isDefault: boolean;
}
