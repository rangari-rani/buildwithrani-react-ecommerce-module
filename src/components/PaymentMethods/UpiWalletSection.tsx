import { useState } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";

interface Props {
  upiList: string[];
  setUpiList: React.Dispatch<React.SetStateAction<string[]>>;
}

const UpiWalletSection: React.FC<Props> = ({
  upiList,
  setUpiList,
}) => {
  const [newUpi, setNewUpi] = useState("");

  const addUpi = () => {
    if (!newUpi.trim()) return;
    setUpiList([...upiList, newUpi]);
    setNewUpi("");
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <MdAccountBalanceWallet className="text-green-600" />
        <h3 className="font-semibold text-lg">UPI & Wallets</h3>
      </div>

      {upiList.map((upi, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between py-2 border-b last:border-none"
        >
          <p className="text-gray-800">{upi}</p>
          <button
            onClick={() =>
              setUpiList(upiList.filter((_, i) => i !== idx))
            }
            className="text-sm text-gray-500 hover:text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Add new UPI */}
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter UPI ID"
          value={newUpi}
          onChange={(e) => setNewUpi(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={addUpi}
          className="text-green-600 text-sm font-medium hover:underline"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default UpiWalletSection;
