import { Home, Edit, Delete, Save } from "@mui/icons-material";
import { useState } from "react";
import type { Address } from "./types";

interface Props {
  primaryAddress: Address;
  setPrimaryAddress: React.Dispatch<React.SetStateAction<Address>>;
}

const PrimaryAddress: React.FC<Props> = ({
  primaryAddress,
  setPrimaryAddress,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrimaryAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemove = () => {
    const confirmed = window.confirm("Remove primary address?");
    if (!confirmed) return;

    setPrimaryAddress({
      fullName: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
    });
  };

  return (
    <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          <Home className="text-green-600" />
          Primary Address
        </h3>

        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium"
          >
            {isEditing ? <Save fontSize="small" /> : <Edit fontSize="small" />}
            {isEditing ? "Save" : "Edit"}
          </button>

          <button
            onClick={handleRemove}
            className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm font-medium"
          >
            <Delete fontSize="small" /> Remove
          </button>
        </div>
      </div>

      {/* Display / Edit */}
      {!isEditing ? (
        <div className="text-gray-700 space-y-1">
          <p><strong>{primaryAddress.fullName}</strong></p>
          <p>{primaryAddress.phone}</p>
          <p>{primaryAddress.addressLine1}</p>
          {primaryAddress.addressLine2 && <p>{primaryAddress.addressLine2}</p>}
          <p>
            {primaryAddress.city}, {primaryAddress.state} - {primaryAddress.pincode}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(primaryAddress).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm text-gray-600 mb-1 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>

              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                className="w-full border rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrimaryAddress;
