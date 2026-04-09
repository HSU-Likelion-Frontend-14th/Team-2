import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '20px', display: 'flex', gap: '15px' }}>
      <Link to="/">홈</Link>
      <Link to="/board">게시판</Link>
      <Link to="/signup">회원가입</Link>
    </header>
  );
}

export default Header;