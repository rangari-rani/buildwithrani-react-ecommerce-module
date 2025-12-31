const GatewaySelector = ({ selected, onChange }: any) => {
  return (
    <div className="flex gap-4">
      {["Razorpay", "Stripe"].map((provider) => (
        <button
          key={provider}
          onClick={() => onChange(provider)}
          className={`flex-1 border rounded-lg py-2 font-medium transition ${
            selected === provider
              ? "border-green-600 bg-green-50 text-green-700"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {provider}
        </button>
      ))}
    </div>
  );
};

export default GatewaySelector;
