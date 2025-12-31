import { FiCreditCard, FiSmartphone } from "react-icons/fi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const methods = [
  { id: "card", label: "Credit / Debit Card", icon: <FiCreditCard size={20} /> },
  { id: "upi", label: "UPI", icon: <FiSmartphone size={20} /> },
  { id: "online", label: "Online Payment", icon: <FiCreditCard size={20} /> },
  { id: "cod", label: "Cash on Delivery", icon: <RiMoneyDollarBoxLine size={20} /> },
];

const PaymentMethods = ({ selected, onSelect }: any) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {methods.map((method) => (
        <div
          key={method.id}
          onClick={() => onSelect(method.id)}
          className={`p-4 rounded-xl border cursor-pointer flex items-center gap-3 transition
            ${
              selected === method.id
                ? "border-green-600 bg-green-50"
                : "border-gray-300"
            }`}
        >
          {method.icon}
          <span className="font-medium">{method.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
