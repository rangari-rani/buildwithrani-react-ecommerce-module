import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../../data/products";

import OrdersHeader from "./OrdersHeader";
import OrdersList from "./OrdersList";
import TrackingModal from "./TrackingModal";
import InvoiceModal from "./InvoiceModal";

const OrderSection: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [trackingOrderId, setTrackingOrderId] = useState<number | null>(null);
  const [invoiceOrderId, setInvoiceOrderId] = useState<number | null>(null);

  const location = useLocation();
  const highlightId = Number(location.state?.highlightId);

  const handleFilterSelect = (option: string) => {
    setSelectedFilter(option);
    setFilterOpen(false);
  };

  const orders = products
    .slice(0, 4)
    .reverse()
    .map((product, index) => ({
      id: product.id,
      status:
        index === 0
          ? "Pending"
          : index === 1
            ? "Shipped"
            : "Delivered",
    }));

const [searchQuery, setSearchQuery] = useState("");

const filteredOrders = orders.filter((order) => {
  const product = products.find((p) => p.id === order.id);

  if (selectedFilter !== "All" && order.status !== selectedFilter) {
    return false;
  }

  if (
    searchQuery &&
    !product?.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) {
    return false;
  }

  return true;
});


  return (
    <div className="p-4 bg-white rounded-xl shadow-sm space-y-4 -mt-2">
      <OrdersHeader
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        handleFilterSelect={handleFilterSelect}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <OrdersList
        filteredOrders={filteredOrders}
        highlightId={highlightId}
        setTrackingOrderId={setTrackingOrderId}
        setInvoiceOrderId={setInvoiceOrderId}
      />

      <TrackingModal
        trackingOrderId={trackingOrderId}
        setTrackingOrderId={setTrackingOrderId}
      />

      <InvoiceModal
        invoiceOrderId={invoiceOrderId}
        setInvoiceOrderId={setInvoiceOrderId}
      />
    </div>
  );
};

export default OrderSection;
