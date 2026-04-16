import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Auth.scss';

function Signup() {
  const navigate = useNavigate();

  // useState로 입력값 관리 
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  
  // 선택 조건: 비밀번호 숨기기/보이기 상태 관리
  const [showPassword, setShowPassword] = useState(false);

  // 실시간 유효성 검사 로직
  const isUserIdValid = /^[a-zA-Z0-9]{4,20}$/.test(userId);
  const isEmailValid = email.includes('@');
  const isPasswordValid = 
  password.length >= 8 && 
    /[a-zA-Z]/.test(password) && 
    /[0-9]/.test(password);
  const isPasswordMatch = password === passwordConfirm;

  // 전체 통과 여부 (버튼 활성화용)
  const isAllValid = isUserIdValid && isEmailValid && isPasswordValid && isPasswordMatch;

  // 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAllValid) return;

    // 4. 제출 시 데이터 출력 및 페이지 이동
    console.log('[회원가입 제출]', { userId, email, password });
    alert('회원가입이 완료되었습니다!');
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>👤 회원가입</h2>
      <form onSubmit={handleSubmit}>
        
        {/* 아이디 입력 */}
        <div className="input-group">
          <label>아이디</label>
          <div className="input-wrapper">
            <input 
              type="text" 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)} 
              placeholder="아이디를 입력해주세요" 
            />
          </div>
          {/* 아이디 에러 메시지 */}
          {userId.length > 0 && !isUserIdValid && (
            <p className="error-msg">영문과 숫자만 사용하여 4~20자로 입력해주세요.</p>
          )}
        </div>

        {/* 이메일 입력 */}
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
          {/* 3. 에러 메시지 조건부 렌더링 (입력값 존재 but 형식 틀림) */}
          {email.length > 0 && !isEmailValid && (
            <p className="error-msg">이메일 형식(@ 포함)에 맞게 입력해주세요.</p>
          )}
        </div>

        {/* 비밀번호 입력 */}
        <div className="input-group">
          <label>비밀번호</label>
          <div className="input-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="비밀번호를 입력해주세요" 
            />
            {/* 눈 아이콘 토글 버튼 */}
            <button 
              type="button" 
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
          {password.length > 0 && !isPasswordValid && (
            <p className="error-msg">비밀번호는 영문과 숫자를 모두 포함하여 8자 이상이어야 합니다.</p>
          )}
        </div>

        {/* 비밀번호 확인 입력 */}
        <div className="input-group">
          <label>비밀번호 확인</label>
          <div className="input-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              value={passwordConfirm} 
              onChange={(e) => setPasswordConfirm(e.target.value)} 
              placeholder="비밀번호를 다시 입력해주세요" 
            />
          </div>
          {passwordConfirm.length > 0 && !isPasswordMatch && (
            <p className="error-msg">비밀번호가 일치하지 않습니다.</p>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={!isAllValid}>
          가입하기
        </button>

        {/* 로그인 이동 링크 */}
        <p className="auth-nav-text">
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;