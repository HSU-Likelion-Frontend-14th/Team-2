import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.scss';

function Signup() {
  const navigate = useNavigate();

  // 1. useState로 입력값 관리 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  
  // 선택 조건: 비밀번호 숨기기/보이기 상태 관리
  const [showPassword, setShowPassword] = useState(false);

  // 2. 실시간 유효성 검사 로직
  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 8;
  const isPasswordMatch = password === passwordConfirm;

  // 전체 통과 여부 (버튼 활성화용)
  const isAllValid = isEmailValid && isPasswordValid && isPasswordMatch;

  // 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAllValid) return;

    // 4. 제출 시 데이터 출력 및 페이지 이동
    console.log('[회원가입 제출]', { email, password });
    alert('회원가입이 완료되었습니다!');
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>👤 회원가입</h2>
      <form onSubmit={handleSubmit}>
        
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
              placeholder="비밀번호 (8자 이상)" 
            />
            {/* 눈 아이콘 토글 버튼 */}
            <button 
              type="button" 
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "숨기기" : "보이기"}
            </button>
          </div>
          {password.length > 0 && !isPasswordValid && (
            <p className="error-msg">비밀번호는 8자 이상이어야 합니다.</p>
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
      </form>
    </div>
  );
}

export default Signup;