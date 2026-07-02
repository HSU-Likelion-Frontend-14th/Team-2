import { create } from "zustand";

const useCartStore = create((set) => ({
  // 상태
  cart: [],
  selectedCategory: "전체",

  // 카테고리 변경
  setCategory: (category) => set({ selectedCategory: category }),

  // 장바구니에 상품 추가
  addToCart: (productId) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === productId);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { id: productId, quantity: 1 }] };
    }),

  // 수량 증가
  increase: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  // 수량 감소 (0 되면 제거)
  decrease: (productId) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  // 상품 제거
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  // 장바구니 전체 비우기 (주문 완료 시)
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;