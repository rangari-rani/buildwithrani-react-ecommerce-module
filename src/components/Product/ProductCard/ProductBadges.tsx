type Props = {
  isTrending?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  discount?: number;
};

export default function ProductBadges({
  isTrending,
  isBestSeller,
  isNew,
  discount,
}: Props) {
  return (
    <>
      <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
        {isTrending && <Badge color="orange" text="TRENDING" />}
        {isBestSeller && <Badge color="purple" text="BESTSELLER" />}
        {isNew && <Badge color="green" text="NEW" />}
      </div>

      {discount && discount > 0 && (
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-0.5 shadow z-10">
          {discount}% OFF
        </span>
      )}
    </>
  );
}

function Badge({
  color,
  text,
}: {
  color: "orange" | "purple" | "green";
  text: string;
}) {
  const styles = {
    orange: {
      bg: "bg-orange-400",
      arrow: "border-t-orange-500",
    },
    purple: {
      bg: "bg-purple-500",
      arrow: "border-t-purple-600",
    },
    green: {
      bg: "bg-green-400",
      arrow: "border-t-green-500",
    },
  };

  const current = styles[color];

  return (
    <span
      className={`relative ${current.bg} text-white text-[10px] font-semibold px-2 py-0.5 shadow rounded-sm`}
    >
      {text}
      <span
        className={`absolute left-0 right-0 mx-auto -bottom-1 w-0 h-0
        border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent
        ${current.arrow}`}
      />
    </span>
  );
}

