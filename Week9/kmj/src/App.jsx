import products from './data/products';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import CartPanel from './components/CartPanel';
import { useQuery, useMutation } from '@tanstack/react-query';
import './App.scss';
import { useCategoryStore } from './store/useCategoryStore';
import { useCartStore } from './store/useCartStore';
import { useMemo } from 'react';

function App() {
  const { cart, addToCart, increase, decrease, removeFromCart, resetCart } =
    useCartStore();
  const { selectedCategory } = useCategoryStore();

  const { data: fetchedproducts = [] } = useQuery({
    queryKey: ['products'],
    queryFn: () => Promise.resolve(products),
    staleTime: 1000 * 60,
  });

  const mutate = useMutation({
    mutationFn: async () => {
      resetCart();
    },

    onSuccess: () => {
      console.log('주문 완료');
    },
  });

  // 장바구니 항목 + 상품 정보를 합쳐서 화면에 보여 줄 형태로 가공
  const cartItems = cart.map((item) => {
    const product = fetchedproducts.find((p) => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const categoryPrice = useMemo(() => {
    return Object.entries(
      cartItems.reduce((sum, item) => {
        sum[item.category] =
          (sum[item.category] || 0) + item.price * item.quantity;

        return sum;
      }, {}),
    ).map(([category, price]) => ({
      category,
      price,
    }));
  }, [cartItems]);

  const filteredProducts =
    selectedCategory === '전체'
      ? fetchedproducts
      : fetchedproducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="app">
      <Header totalCount={totalCount} totalPrice={totalPrice} />

      <div className="app__body">
        <main className="app__main">
          <CategoryFilter />
          <ProductList products={filteredProducts} onAddToCart={addToCart} />
        </main>

        <CartPanel
          items={cartItems}
          totalPrice={totalPrice}
          categoryPrice={categoryPrice}
          onIncrease={increase}
          onDecrease={decrease}
          onRemove={removeFromCart}
          onCheckout={mutate.mutate}
        />
      </div>
    </div>
  );
}

export default App;
