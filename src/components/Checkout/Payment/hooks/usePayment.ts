import { useState } from "react";

export function usePayment() {
  const [method, setMethod] = useState<"card" | "upi" | "online" | "cod">(
    "card"
  );
  const [gateway, setGateway] = useState<"Razorpay" | "Stripe">("Razorpay");

  return {
    method,
    setMethod,
    gateway,
    setGateway,
  };
}
