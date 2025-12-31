import { Routes, Route } from "react-router-dom";
import { ProductList } from "../components/Product/ProductList";
import SearchPage from "../components/Product/Search/SearchPage";
import ProductDetail from "../components/Product/ProductDetail/ProductDetail";
import Wishlist from "../components/Product/ProductDetail/Wishlist";


export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <main className="flex-1">
                <Routes>
                    <Route
                        path="/category/:categorySlug"
                        element={<ProductList />}
                    />

                    <Route
                        path="/category/:categorySlug/:typeSlug"
                        element={<ProductList />}
                    />

                    <Route
                        path="/category/:categorySlug/:typeSlug/:subSlug"
                        element={<ProductList />}
                    />

                    <Route path="/search" element={<SearchPage />} />
                    {/* Product Detail Page */}
                    <Route path=":slug" element={<ProductDetail />} />
                    <Route path="wishlist" element={<Wishlist />} />

                </Routes>
            </main>
        </div>
    );
}
