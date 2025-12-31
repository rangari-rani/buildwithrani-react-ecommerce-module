import { Home, Edit, Save } from "@mui/icons-material";
import type { Address } from "./types";

interface Props {
  secondaryAddress: Address;
  setSecondaryAddress: React.Dispatch<React.SetStateAction<Address>>;
  isEditingSecondary: boolean;
  setIsEditingSecondary: React.Dispatch<React.SetStateAction<boolean>>;
}

const SecondaryAddress: React.FC<Props> = ({
  secondaryAddress,
  setSecondaryAddress,
  isEditingSecondary,
  setIsEditingSecondary,
}) => {
  const handleSecondaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSecondaryAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSecondarySave = () => {
    setIsEditingSecondary(false);
    alert("Secondary address saved!");
  };

  return (
    <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          <Home className="text-green-600" />
          Secondary Address
        </h3>

        <button
          type="button"
          onClick={() => setIsEditingSecondary(!isEditingSecondary)}
          className="text-green-600 hover:text-green-700 flex items-center gap-1 text-sm font-medium"
        >
          {isEditingSecondary ? <Save fontSize="small" /> : <Edit fontSize="small" />}
          {isEditingSecondary ? "Save" : "Edit"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(secondaryAddress).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm text-gray-600 mb-1 capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </label>

            <input
              type="text"
              name={key}
              value={value}
              disabled={!isEditingSecondary}
              onChange={handleSecondaryChange}
              className={`w-full border rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-green-500 ${
                isEditingSecondary
                  ? "bg-white border-gray-300"
                  : "bg-gray-100 border-gray-200 text-gray-600"
              }`}
            />
          </div>
        ))}
      </div>

      {isEditingSecondary && (
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSecondarySave}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Save Address
          </button>
        </div>
      )}
    </div>
  );
};

export default SecondaryAddress;
