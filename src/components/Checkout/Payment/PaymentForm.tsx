import GatewaySelector from "./GatewaySelector";

const PaymentForm = ({ method, gateway, onGatewayChange }: any) => {
  return (
    <div className="mt-4">
      {method === "card" && (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Card Number"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="text"
            placeholder="Name on Card"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-20 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>
      )}

      {method === "upi" && (
        <input
          type="text"
          placeholder="Enter UPI ID (e.g. rani@okaxis)"
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
        />
      )}

      {method === "online" && (
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-gray-800">
            Choose Payment Gateway
          </h3>
          <GatewaySelector
            selected={gateway}
            onChange={onGatewayChange}
          />
        </div>
      )}

      {method === "cod" && (
        <p className="text-gray-600 mt-2">
          You will pay the total amount to the delivery partner at your doorstep.
        </p>
      )}
    </div>
  );
};

export default PaymentForm;
