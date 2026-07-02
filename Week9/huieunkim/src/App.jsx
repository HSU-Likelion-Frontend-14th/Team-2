import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { fetchProducts } from "./data/products";
import useCartStore from "./store/useCartStore";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import CartPanel from "./components/CartPanel";
import "./App.scss";

function App() {
  // useState 대신 zustand store에서 꺼내기
  const cart = useCartStore((state) => state.cart);
  const selectedCategory = useCartStore((state) => state.selectedCategory);
  const setCategory = useCartStore((state) => state.setCategory);
  const addToCart = useCartStore((state) => state.addToCart);

  // useQuery로 상품 목록 조회
  // queryKey: 데이터 이름표 (캐시 키)
  // queryFn: 실제로 데이터 가져오는 함수
  // staleTime: 5분 동안은 fresh 상태
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });

  // useCallback: addToCart를 props로 ProductCard에 넘길 때
  // 이게 없으면 App이 리렌더될 때마다 함수가 새로 생성되어 React.memo로 감싼 ProductCard가 리렌더됨 → memo 무력화;;
  const handleAddToCart = useCallback(
    (product) => addToCart(product),
    [addToCart],
  );

  // 상품 + 카테고리 필터링
  const filteredProducts =
    selectedCategory === "전체"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // 장바구니 아이템에 상품 정보 합치기
  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (isLoading) return <div>상품을 불러오는 중...</div>;

  return (
    <div className="app">
      <Header totalCount={totalCount} totalPrice={totalPrice} />
      <div className="app__body">
        <main className="app__main">
          <CategoryFilter selected={selectedCategory} onSelect={setCategory} />
          <ProductList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </main>
        <CartPanel items={cartItems} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default App;
