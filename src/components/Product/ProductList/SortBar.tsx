interface Props {
  setSortOption: (val: string) => void;
  title: string;
}

export default function SortBar({ setSortOption, title }: Props) {
  return (
<div className="flex flex-wrap items-center gap-3 mb-6 md:flex-nowrap md:justify-between">


      <h2 className="text-2xl font-bold">{title}</h2>

      <select
        onChange={(e) => setSortOption(e.target.value)}
        className="border px-3 py-1 rounded-md text-sm"
      >
        <option value="">Sort by</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="rating">Rating</option>
        <option value="newest">Newest</option>
        <option value="az">A to Z</option>
      </select>
    </div>
  );
}
