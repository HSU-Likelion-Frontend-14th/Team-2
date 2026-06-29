import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (productId) => {
    set((state) => {
      const existing = state.cart.find((item) => item.id === productId);

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      console.log(state.cart);
      return {
        cart: [...state.cart, { id: productId, quantity: 1 }],
      };
    });
  },

  increase: (productId) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    }));
  },

  decrease: (productId) => {
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    }));
  },

  removeFromCart: (productId) => {
    set((state) => ({
      ...state,
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  resetCart: () => set({ cart: [] }),
}));
