import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert('가입이 완료되었습니다!');
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>👤 회원가입</h2>
      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
        <input type="text" placeholder="아이디" required />
        <input type="password" placeholder="비밀번호" required />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default Signup;