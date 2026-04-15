import { useState } from 'react';

function BoardForm({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('제목과 내용을 모두 입력해주세요!');
      return;
    }


    onAddPost({ id: Date.now(), title: title, content: content });
    
    setTitle('');
    setContent('');
  };

  return (
    <form className="board-form" onSubmit={handleSubmit}>
      <input 
        type="text" placeholder="제목을 입력하세요" 
        value={title} onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        type="text" placeholder="내용을 입력하세요" 
        value={content} onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default BoardForm;