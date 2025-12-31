import { useEffect, useState } from "react";
import { products } from "../../../../data/products";
import type { CartProduct } from "../cart";
import type { Coupon } from "../coupon";


export type CartItemType = {
  id: number;
  productSlug: string;
  quantity: number;
};

type CartState = {
  cartProducts: CartProduct[];
  cartCount: number;

  appliedCoupon: Coupon | null;
  showCouponInput: boolean;

  setAppliedCoupon: (coupon: Coupon | null) => void;
  setShowCouponInput: (show: boolean) => void;

  addToCart: (slug: string) => void;
  handleRemove: (slug: string) => void;
  handleQuantityChange: (slug: string, delta: number) => void;
};


const STORAGE_KEY = "cart";
const CART_EVENT = "cart-updated";

export function useCart(): CartState {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
const [showCouponInput, setShowCouponInput] = useState(false);

  /* 🔑 hydrate on mount */
  useEffect(() => {
    const syncCart = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      setCartItems(saved ? JSON.parse(saved) : []);
    };

    syncCart();

    // same-tab updates
    window.addEventListener(CART_EVENT, syncCart);

    // other tabs
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener(CART_EVENT, syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  const saveCart = (items: CartItemType[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

    // 🔔 notify all cart listeners in this tab
    window.dispatchEvent(new Event(CART_EVENT));
  };

  const addToCart = (productSlug: string) => {
    const saved: CartItemType[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    const existing = saved.find(
      (item) => item.productSlug === productSlug
    );

    let updated: CartItemType[];

    if (existing) {
      updated = saved.map((item) =>
        item.productSlug === productSlug
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updated = [
        ...saved,
        {
          id: Date.now(),
          productSlug,
          quantity: 1,
        },
      ];
    }

    saveCart(updated);
  };

  const handleRemove = (slug: string) => {
    const saved: CartItemType[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
    saveCart(saved.filter((item) => item.productSlug !== slug));
  };

  const handleQuantityChange = (slug: string, delta: number) => {
    const saved: CartItemType[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    saveCart(
      saved.map((item) =>
        item.productSlug === slug
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const cartProducts = cartItems.map((item) => {
    const product = products.find((p) => p.slug === item.productSlug)!;
    return { ...product, quantity: item.quantity };
  });

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

return {
  cartProducts,
  cartCount,

  appliedCoupon,
  showCouponInput,
  setAppliedCoupon,
  setShowCouponInput,

  handleRemove,
  handleQuantityChange,
  addToCart,
};

}
