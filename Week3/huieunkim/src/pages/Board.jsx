import { useState } from 'react';
import BoardForm from '../components/BoardForm';

function Board() {
  // 💡 실습 1. 여기에 가짜 데이터 상태(useState)를 만들게 됩니다.
  const [posts, setPosts] = useState([
    { id: 1, title: '첫번째 글', content: '안녕하세요! 반갑습니다.' },
    { id: 2, title: '리엑트 라우터', content: '라우팅 실습 중입니다.' }
  ]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 자유 게시판</h2>
      
      {/* 💡 실습 2. 입력 폼 컴포넌트(BoardForm)가 들어갈 자리 */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h3>게시글 작성 영역 (BoardForm)</h3>
        <BoardForm onAddPost={handleAddPost} />
      </div>

      {/* 💡 실습 3. 게시글 목록 컴포넌트(BoardList & BoardItem)가 들어갈 자리 */}
      <div style={{ padding: '10px', border: '1px solid #ccc' }}>
        <h3>게시글 목록 영역 (BoardList)</h3>
        <ul>
        {posts.map((post) => (
            <li key={post.id}>
            <strong>{post.title}</strong>: {post.content}
             </li>
        ))} 
        </ul>
      </div>
    </div>
  );
}

export default Board;