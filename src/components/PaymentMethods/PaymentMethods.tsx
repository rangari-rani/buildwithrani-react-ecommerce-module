import React, { useState } from "react";
import SavedCards from "./SavedCards";
import UpiWalletSection from "./UpiWalletSection";
import AddCardModal from "./AddCardModal";
import type { PaymentCard } from "./types";

const PaymentMethods: React.FC = () => {
  const [cards, setCards] = useState<PaymentCard[]>([
    { id: 1, type: "Razorpay", last4: "2345", expiry: "08/27", isDefault: true },
    { id: 2, type: "Stripe", last4: "6721", expiry: "03/26", isDefault: false },
  ]);

  const [upiList, setUpiList] = useState<string[]>(["rani@okaxis"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCard, setNewCard] = useState({
    type: "Razorpay",
    cardNumber: "",
    expiry: "",
  });

  const addNewCard = () => {
    if (!newCard.cardNumber) return;

    const last4 = newCard.cardNumber.slice(-4);

    setCards([
      ...cards,
      {
        id: Date.now(),
        type: newCard.type as "Razorpay" | "Stripe",
        last4,
        expiry: newCard.expiry || "01/30",
        isDefault: false,
      },
    ]);

    setNewCard({ type: "Razorpay", cardNumber: "", expiry: "" });
    setIsModalOpen(false);
  };

  const deleteCard = (id: number) =>
    setCards(cards.filter((c) => c.id !== id));

  const setDefaultCard = (id: number) =>
    setCards(cards.map((c) => ({ ...c, isDefault: c.id === id })));

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">
        💳 Payment Methods
      </h2>

      <SavedCards
        cards={cards}
        deleteCard={deleteCard}
        setDefaultCard={setDefaultCard}
        openModal={() => setIsModalOpen(true)}
      />

      <UpiWalletSection
        upiList={upiList}
        setUpiList={setUpiList}
      />

      <AddCardModal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        newCard={newCard}
        setNewCard={setNewCard}
        addNewCard={addNewCard}
      />
    </div>
  );
};

export default PaymentMethods;
