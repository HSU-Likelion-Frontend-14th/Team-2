function Board() {
  // 💡 실습 1. 여기에 가짜 데이터 상태(useState)를 만들게 됩니다.

  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 자유 게시판</h2>
      
      {/* 💡 실습 2. 입력 폼 컴포넌트(BoardForm)가 들어갈 자리 */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h3>게시글 작성 영역 (BoardForm)</h3>
        <input type="text" placeholder="제목을 입력하세요" />
        <input type="text" placeholder="내용을 입력하세요" />
        <button>추가</button>
      </div>

      {/* 💡 실습 3. 게시글 목록 컴포넌트(BoardList & BoardItem)가 들어갈 자리 */}
      <div style={{ padding: '10px', border: '1px solid #ccc' }}>
        <h3>게시글 목록 영역 (BoardList)</h3>
        <ul>
          <li>아직 작성된 글이 없습니다.</li>
        </ul>
      </div>
    </div>
  );
}

export default Board;