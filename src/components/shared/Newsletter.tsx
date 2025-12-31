import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="relative max-w-[1400px] mx-auto px-6 py-2 mb-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Text */}
        <p className="text-gray-700 font-medium flex-1">
          Join Our Community — Subscribe to get updates on our new products
        </p>

        {/* Email input + Subscribe button */}
        <div className="flex w-full max-w-md">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="flex-1 p-3 rounded-l-lg border border-gray-300 outline-none"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 rounded-r-lg hover:bg-blue-600 transition cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
