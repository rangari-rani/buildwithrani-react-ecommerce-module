import { useEffect } from "react";
import confetti from "canvas-confetti";

type Order = {
  id: string;
  total: number;
  paymentStatus: string;
  deliveryDate: string;
};

export function useOrderSuccess(): { order: Order } {
  const order: Order = {
    id: "#WC" + Math.floor(100000 + Math.random() * 900000),
    total: 4376,
    paymentStatus: "Received",
    deliveryDate: "25 Oct 2025",
  };

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, []);

  return { order };
}
