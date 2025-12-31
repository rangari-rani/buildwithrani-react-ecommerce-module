
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import CheckoutHeader from "./components/Checkout/CheckoutHeader/CheckoutHeader";
import Footer from "./components/layout/footer/Footer";

import ScrollToTop from "./components/layout/ScrollToTop";
import Wishlist from "./components/Product/ProductDetail/Wishlist";
import { ProductList } from "./components/Product/ProductList";
import SearchPage from "./components/Product/Search/SearchPage";
import Account from "./pages/Account";
import Signup from "./pages/auth/signup";
import { NavbarMain } from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/auth/login";
import Product from "./pages/Product";
import RatingPage from "./components/ratings/RatingPage";

function AppContent() {
  const location = useLocation();

  // Hide Navbar/Footer on checkout, login, signup
  const hideLayout =
    location.pathname.startsWith("/checkout") ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/ratings") ||
    location.pathname.startsWith("/account")

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      {!hideLayout && <NavbarMain />}
      {location.pathname.startsWith("/checkout") && <CheckoutHeader />}

      {/* Main Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/category/*" element={<Product />} /> */}
          <Route path="/product/*" element={<Product />} />
          <Route path="/all-products" element={<ProductList />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/checkout/*" element={<Checkout />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Search + Account */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account/*" element={<Account />} />
            <Route path="/ratings/:orderId" element={<RatingPage />} />
        </Routes>
      </main>

      {/* Footer */}
      {!hideLayout && <Footer />}
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
