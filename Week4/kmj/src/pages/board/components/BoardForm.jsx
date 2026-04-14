import { useState } from 'react';
import styles from './BoardForm.module.scss';

export const BoardForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <form
      className={styles.boardFormWrapper}
      onSubmit={(e) => {
        e.preventDefault();
        addPost({ title, content });
        setTitle('');
        setContent('');
      }}
    >
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        type="text"
        placeholder="제목을 입력하세요"
      />
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
        type="text"
        placeholder="내용을 입력하세요"
      />
      <button type="submit" className={styles.boardFormAddButton}>
        게시글 추가
      </button>
    </form>
  );
};
