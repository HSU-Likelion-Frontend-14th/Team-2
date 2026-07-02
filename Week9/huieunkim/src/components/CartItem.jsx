function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <li className="cart-item">
      <span className="cart-item__emoji">{item.emoji}</span>
      <div className="cart-item__info">
        <p>{item.name}</p>
        <span>{item.price.toLocaleString()}원</span>
      </div>
      <div className="cart-item__qty">
        <button onClick={() => onDecrease(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)}>+</button>
      </div>
      <button className="cart-item__remove" onClick={() => onRemove(item.id)}>
        ✕
      </button>
    </li>
  );
}

export default CartItem;
