const OrderSummaryCard = ({ order }: any) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md text-left mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-700">
        Order Summary
      </h2>

      <div className="flex justify-between mb-2">
        <span>Order ID:</span>
        <span className="font-medium">{order.id}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Estimated Delivery:</span>
        <span className="font-medium">{order.deliveryDate}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Payment:</span>
        <span className="text-green-700 font-medium">{order.paymentStatus}</span>
      </div>

      <div className="flex justify-between">
        <span>Total Amount:</span>
        <span className="font-semibold">₹{order.total}</span>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
