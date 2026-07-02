import { create } from "zustand";

const useCartStore = create((set) => ({
  // 상태
  cart: [],
  selectedCategory: "전체",

  // 카테고리 변경
  setCategory: (category) => set({ selectedCategory: category }),

  // 장바구니에 상품 추가
  addToCart: (product) => // productId 대신 product 전체를 받음
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        // 이미 담긴 수량이 stock 이상이면 추가 안 함
        if (existing.quantity >= product.stock) return state;
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { id: product.id, quantity: 1 }] };
    }),

  // 수량 증가
  increase: (product) =>    // productId 대신 product 전체를 받음
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing && existing.quantity >= product.stock) return state;
      return {
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }),

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