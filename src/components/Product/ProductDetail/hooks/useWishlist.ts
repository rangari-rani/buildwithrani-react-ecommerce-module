import { useEffect, useState } from "react";

const STORAGE_KEY = "wishlist";
const WISHLIST_EVENT = "wishlist-updated";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load + sync
  useEffect(() => {
    const syncWishlist = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      setWishlist(saved ? JSON.parse(saved) : []);
    };

    // Initial load
    syncWishlist();

    // Listen to custom event (same tab)
    window.addEventListener(WISHLIST_EVENT, syncWishlist);

    // Listen to storage event (other tabs)
    window.addEventListener("storage", syncWishlist);

    return () => {
      window.removeEventListener(WISHLIST_EVENT, syncWishlist);
      window.removeEventListener("storage", syncWishlist);
    };
  }, []);

  const save = (items: number[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));



    // 🔔 notify all listeners in this tab
    window.dispatchEvent(new Event(WISHLIST_EVENT));
  };

const toggleWishlist = (productId: number) => {
  const updated = wishlist.includes(productId)
    ? wishlist.filter((id) => id !== productId)
    : Array.from(new Set([...wishlist, productId]));

  save(updated);
};


  return {
    wishlist,
    wishlistCount: wishlist.length,
    toggleWishlist,
    isWishlisted: (id: number) => wishlist.includes(id),
  };
};
