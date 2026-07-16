import { useMemo } from "react";
import { useMutation } from "@tanstack/react-query";
import useCartStore from "../store/useCartStore";
import CartItem from "./CartItem";

// 주문 처리 함수 (mock)
const submitOrder = (items) =>
  new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));

function CartPanel({ items, totalPrice }) {
  // store에서 액션 꺼내기
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  // useMutation: 주문하기 버튼 처리
  // mutationFn: 실제 요청 함수
  // onSuccess: 성공했을 때 장바구니 비우기
  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: () => {
      clearCart();
      alert("주문이 완료되었습니다!");
    },
  });

  // useMemo: cart가 바뀔 때만 카테고리별 합계 재계산
  // cart나 items가 안 바뀌면 이전에 계산한 값을 그대로 씀 → 불필요한 연산 방지
  const categoryStats = useMemo(() => {
    const stats = {};
    items.forEach((item) => {
      if (!item.category) return;
      if (!stats[item.category]) {
        stats[item.category] = { count: 0, total: 0 };
      }
      stats[item.category].count += item.quantity;
      stats[item.category].total += item.price * item.quantity;
    });
    return stats;
  }, [items]); // items가 바뀔 때만 재계산

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
              onIncrease={increase}
              onDecrease={decrease}
              onRemove={removeFromCart}
            />
          ))}
        </ul>
      )}

      {/* 카테고리별 합계 (useMemo로 계산한 값 사용) */}
      {items.length > 0 && (
        <div className="cart-panel__stats">
          <p className="cart-panel__stats-title">카테고리별 합계</p>
          {Object.entries(categoryStats).map(([category, stat]) => (
            <div key={category} className="cart-panel__stats-row">
              <span>{category}</span>
              <span>
                {stat.count}개 · {stat.total.toLocaleString()}원
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="cart-panel__total">
        <span>총 합계</span>
        <strong>{totalPrice.toLocaleString()}원</strong>
      </div>

      <button
        className="checkout-btn"
        disabled={items.length === 0 || mutation.isPending}
        onClick={() => mutation.mutate(items)}
      >
        {mutation.isPending ? "처리 중..." : "주문하기"}
      </button>
    </aside>
  );
}

export default CartPanel;
