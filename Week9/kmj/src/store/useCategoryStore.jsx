import { create } from 'zustand';

export const useCategoryStore = create((set) => ({
  selectedCategory: '전체',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
