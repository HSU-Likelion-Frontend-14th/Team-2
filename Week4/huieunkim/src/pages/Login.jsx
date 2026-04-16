import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Auth.scss';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 8;
  const isAllValid = isEmailValid && isPasswordValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAllValid) return;

    console.log('[로그인 제출]', { email, password });
    alert('로그인 성공!');
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>🔑 로그인</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="input-group">
          <label>이메일</label>
          <div className="input-wrapper">
            <input 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="이메일을 입력해주세요" 
            />
          </div>
          {email.length > 0 && !isEmailValid && (
            <p className="error-msg">이메일 형식이 올바르지 않습니다.</p>
          )}
        </div>

        <div className="input-group">
          <label>비밀번호</label>
          <div className="input-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="비밀번호를 입력해주세요" 
            />
            <button 
              type="button" 
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
          {password.length > 0 && !isPasswordValid && (
            <p className="error-msg">비밀번호는 8자 이상입니다.</p>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={!isAllValid}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;