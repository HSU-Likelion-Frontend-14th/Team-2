import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { BoardPage } from './pages/board/BoardPage';
import { SignUpPage } from './pages/signup/SignUpPage';
import { Header } from './components/Header';
import { LoginPage } from './pages/login/LoginPage';

function App() {
  return (
    <BrowserRouter>
      {/* Header는 Routes 바깥에 두어 모든 페이지에서 공통으로 보이게 합니다 */}
      <Header />

      {/* 실제 페이지가 갈아끼워지는 영역입니다 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
