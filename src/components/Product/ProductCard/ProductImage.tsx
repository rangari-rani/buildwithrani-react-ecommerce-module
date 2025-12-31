import clsx from "clsx";

export default function ProductImage({
  image,
  name,
  gradient,
}: {
  image: string;
  name: string;
  gradient: string;
}) {
  return (
    <div
      className={clsx(
        "relative w-full h-44 flex items-center justify-center overflow-hidden",
        "bg-linear-to-br",
        gradient
      )}
    >
      <img
        src={image}
        alt={name}
        className="w-3/4 h-3/4 object-contain mix-blend-multiply transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
}
