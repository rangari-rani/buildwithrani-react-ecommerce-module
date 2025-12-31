export default function ProductGallerySkeleton() {
  return (
    <div className="md:w-1/3 flex flex-col items-center gap-4 animate-pulse">

 
      <div className="flex justify-center items-center bg-gray-200 rounded-xl p-4 shadow-md w-full">
        <div className="w-full h-72 bg-gray-300 rounded-lg" />
      </div>

 
      <div className="flex md:hidden gap-3 overflow-x-auto w-full pb-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="w-20 h-20 bg-gray-300 rounded-md shrink-0"
          />
        ))}
      </div>

  
      <div className="hidden md:flex flex-row gap-3 w-full items-start">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="w-20 h-20 bg-gray-300 rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
