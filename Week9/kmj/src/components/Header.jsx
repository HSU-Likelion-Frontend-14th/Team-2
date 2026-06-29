function Header({ totalCount, totalPrice }) {
  return (
    <header className="header">
      <h1>🦁 멋사 14기 🦁</h1>
      <div className="header__summary">
        <span>담긴 상품 {totalCount}개</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </div>
    </header>
  );
}

export default Header;
