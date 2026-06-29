import CartItem from './CartItem';

function CartPanel({
  items,
  totalPrice,
  categoryPrice,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  console.log('장바구니 렌더링');
  return (
    <aside className="cart-panel">
      <h2>장바구니</h2>

      {items.length === 0 ? (
        <p className="empty">장바구니가 비어 있어요.</p>
      ) : (
        <ul className="cart-list">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}

      {categoryPrice.length > 0 && (
        <div className="cart-panel__category">
          <span>카테고리별 합계</span>
          <div className="cart-panel__category-list">
            {categoryPrice.map((item) => (
              <div key={item.category} className="cart-panel__category-item">
                <span>{item.category}</span>
                <span>{item.price.toLocaleString()}원</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="cart-panel__total">
        <span>총 합계</span>
        <strong>{totalPrice.toLocaleString()}원</strong>
      </div>

      <button
        onClick={onCheckout}
        className="checkout-btn"
        disabled={items.length === 0}
      >
        주문하기
      </button>
    </aside>
  );
}

export default CartPanel;
