import { useState } from "react";
import products from "./data/products";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import CartPanel from "./components/CartPanel";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const addToCart = (productId) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const increase = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrease = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // 장바구니 항목 + 상품 정보를 합쳐서 화면에 보여 줄 형태로 가공
  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const filteredProducts =
    selectedCategory === "전체"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="app">
      <Header totalCount={totalCount} totalPrice={totalPrice} />

      <div className="app__body">
        <main className="app__main">
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <ProductList products={filteredProducts} onAddToCart={addToCart} />
        </main>

        <CartPanel
          items={cartItems}
          totalPrice={totalPrice}
          onIncrease={increase}
          onDecrease={decrease}
          onRemove={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
