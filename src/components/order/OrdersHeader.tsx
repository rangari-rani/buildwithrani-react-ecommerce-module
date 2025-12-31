import React from "react";
import { Search, FilterList } from "@mui/icons-material";

interface Props {
  filterOpen: boolean;
  setFilterOpen: (v: boolean) => void;
  handleFilterSelect: (v: string) => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
}

const OrdersHeader: React.FC<Props> = ({
  filterOpen,
  setFilterOpen,
  handleFilterSelect,
  searchQuery,
  setSearchQuery
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h2 className="text-2xl font-semibold">All Orders</h2>
        <p className="text-gray-500 text-sm">From Anytime</p>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="relative flex-1 sm:w-64">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
        </div>

        <div className="relative">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-1 border border-gray-300 rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
          >
            <FilterList fontSize="small" />
            <span>Filter</span>
          </button>

          {filterOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-2 text-sm text-gray-600">
                <p className="font-medium mb-1">Status</p>
                {["All", "Delivered", "Pending", "Shipped"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleFilterSelect(opt)}
                    className="block w-full text-left px-3 py-1.5 rounded hover:bg-gray-100"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersHeader;
