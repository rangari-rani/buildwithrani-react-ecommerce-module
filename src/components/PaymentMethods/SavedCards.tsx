import {
  MdAdd,
  MdDelete,
  MdCreditCard,
  MdStar,
} from "react-icons/md";
import type { PaymentCard } from "./types";


interface Props {
  cards: PaymentCard[];
  deleteCard: (id: number) => void;
  setDefaultCard: (id: number) => void;
  openModal: () => void;
}

const SavedCards: React.FC<Props> = ({
  cards,
  deleteCard,
  setDefaultCard,
  openModal,
}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`rounded-xl p-4 border shadow-sm bg-white transition hover:shadow-md ${
            card.isDefault ? "border-green-500" : "border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <MdCreditCard className="text-green-600" />
              <span className="font-semibold text-gray-800">
                {card.type}
              </span>
            </div>

            <button
              onClick={() => deleteCard(card.id)}
              className="text-gray-500 hover:text-red-500 transition"
            >
              <MdDelete size={18} />
            </button>
          </div>

          <p className="text-gray-700 mb-1">
            **** **** **** {card.last4}
          </p>
          <p className="text-gray-500 text-sm mb-3">
            Expiry: {card.expiry}
          </p>

          <button
            onClick={() => setDefaultCard(card.id)}
            className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full ${
              card.isDefault
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-green-100"
            }`}
          >
            <MdStar size={14} />
            {card.isDefault ? "Default" : "Set as Default"}
          </button>
        </div>
      ))}

      {/* Add New */}
      <div
        onClick={openModal}
        className="rounded-xl border-2 border-dashed flex flex-col items-center justify-center p-6 cursor-pointer hover:border-green-400 hover:bg-green-50 transition"
      >
        <MdAdd className="text-green-600 mb-2" size={28} />
        <p className="font-medium text-green-700">
          Add New Payment Method
        </p>
      </div>
    </div>
  );
};

export default SavedCards;
