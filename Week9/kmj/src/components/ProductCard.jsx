import React from 'react';

const ProductCard = React.memo(function ProductCard({ product, onAddToCart }) {
  console.log(`${product.name} 카드 렌더링됨`);

  return (
    <div className="product-card">
      <div className="product-card__thumb">{product.emoji}</div>
      <span className="product-card__category">{product.category}</span>
      <h3>{product.name}</h3>
      <p className="product-card__price">{product.price.toLocaleString()}원</p>
      <button onClick={() => onAddToCart(product.id)}>담기</button>
    </div>
  );
});

export default ProductCard;
