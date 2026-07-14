import { create } from 'zustand';
import products from '../data/products';

const getProductById = (productId) =>
  products.find((product) => product.id === productId);

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (productId) => {
    const product = getProductById(productId);

    if (!product || product.stock <= 0) {
      return false;
    }

    set((state) => {
      const existing = state.cart.find((item) => item.id === productId);

      if (existing) {
        if (existing.quantity >= product.stock) {
          return state;
        }

        return {
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        cart: [...state.cart, { id: productId, quantity: 1 }],
      };
    });

    return true;
  },

  increase: (productId) => {
    const product = getProductById(productId);

    if (!product) {
      return false;
    }

    set((state) => {
      const existing = state.cart.find((item) => item.id === productId);

      if (!existing || existing.quantity >= product.stock) {
        return state;
      }

      return {
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };
    });

    return true;
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
