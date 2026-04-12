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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input 
        type="text" placeholder="제목을 입력하세요" 
        value={title} onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '5px' }}
      />
      <input 
        type="text" placeholder="내용을 입력하세요" 
        value={content} onChange={(e) => setContent(e.target.value)}
        style={{ padding: '5px' }}
      />
      <button type="submit" style={{ padding: '5px', cursor: 'pointer' }}>추가</button>
    </form>
  );
}

export default BoardForm;