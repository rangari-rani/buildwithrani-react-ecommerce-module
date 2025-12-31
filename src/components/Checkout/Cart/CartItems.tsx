import CartItemCard from "./CartItemCard";

const CartItems = ({ cartProducts, onRemove, onQtyChange }: any) => {
  return (
    <div className="flex-1 space-y-4">
      {cartProducts.map((p: any) => (
        <CartItemCard
          key={p.id}
          p={p}
          onRemove={onRemove}
          onQtyChange={onQtyChange}
        />
      ))}
    </div>
  );
};

export default CartItems;
