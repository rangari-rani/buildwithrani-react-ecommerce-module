import { useLocation } from "react-router-dom";

const steps = [
  { id: 1, name: "Cart", path: "/checkout/cart" },
  { id: 2, name: "Address", path: "/checkout/address" },
  { id: 3, name: "Payment", path: "/checkout/payment" },
];

export function useCheckoutSteps() {
  const location = useLocation();

  const isSuccessPage =
    location.pathname.includes("/checkout/success") ||
    location.pathname.includes("/order-success");

  const currentStep =
    location.pathname.includes("/checkout/payment")
      ? 3
      : location.pathname.includes("/checkout/address")
      ? 2
      : 1;

  return {
    steps,
    currentStep,
    isSuccessPage,
  };
}
