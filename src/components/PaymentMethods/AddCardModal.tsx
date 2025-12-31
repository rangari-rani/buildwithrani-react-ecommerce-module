import { Dialog } from "@headlessui/react";

interface NewCard {
  type: string;
  cardNumber: string;
  expiry: string;
}

interface Props {
  isOpen: boolean;
  close: () => void;
  newCard: NewCard;
  setNewCard: React.Dispatch<React.SetStateAction<NewCard>>;
  addNewCard: () => void;
}

const AddCardModal: React.FC<Props> = ({
  isOpen,
  close,
  newCard,
  setNewCard,
  addNewCard,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCard.cardNumber.trim()) return;
    addNewCard();
  };

  return (
    <Dialog open={isOpen} onClose={close}>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
          <h3 className="text-lg font-semibold mb-4">
            Add New Payment Method
          </h3>

          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium mb-1">
              Provider
            </label>
            <select
              className="w-full border rounded-lg px-3 py-2 mb-3"
              value={newCard.type}
              onChange={(e) =>
                setNewCard((p) => ({
                  ...p,
                  type: e.target.value,
                }))
              }
            >
              <option>Razorpay</option>
              <option>Stripe</option>
            </select>

            <label className="block text-sm font-medium mb-1">
              Card Number
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 mb-3"
              placeholder="Enter card number"
              value={newCard.cardNumber}
              onChange={(e) =>
                setNewCard((p) => ({
                  ...p,
                  cardNumber: e.target.value,
                }))
              }
            />

            <label className="block text-sm font-medium mb-1">
              Expiry
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 mb-5"
              placeholder="MM/YY"
              value={newCard.expiry}
              onChange={(e) =>
                setNewCard((p) => ({
                  ...p,
                  expiry: e.target.value,
                }))
              }
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={close}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!newCard.cardNumber.trim()}
                className={`px-4 py-2 rounded-lg text-white ${
                  newCard.cardNumber.trim()
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-300 cursor-not-allowed"
                }`}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default AddCardModal;
