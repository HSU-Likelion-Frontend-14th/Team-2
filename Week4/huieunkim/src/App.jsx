import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Board from './pages/Board';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      {/* Header는 Routes 바깥에 두어 모든 페이지에서 공통으로 보이게 합니다 */}
      <Header />
      
      {/* 실제 페이지가 갈아끼워지는 영역입니다 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;