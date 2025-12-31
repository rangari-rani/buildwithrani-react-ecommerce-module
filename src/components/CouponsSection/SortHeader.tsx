interface Props {
  activeSort: string;
  setActiveSort: (sort: string) => void;
  sorts: string[];
}

const SortHeader: React.FC<Props> = ({
  activeSort,
  setActiveSort,
  sorts,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      <h2 className="text-2xl font-bold">Coupons & Offers</h2>

      <div className="flex flex-wrap gap-2 mt-3 sm:mt-0">
        <span className="text-gray-600 font-medium mr-2">Sort by:</span>
        {sorts.map((sort) => (
          <button
            key={sort}
            onClick={() => setActiveSort(sort)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              activeSort === sort
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-green-100"
            }`}
          >
            {sort}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortHeader;
