import { useState } from 'react';
import BoardItem from './components/BoardItem';
import { BoardList } from './components/BoardList';
import { BoardForm } from './components/BoardForm';
import styles from './BoardPage.module.scss';

export const BoardPage = () => {
  // 💡 실습 1. 여기에 가짜 데이터 상태(useState)를 만들게 됩니다.
  const [posts, setPosts] = useState([]);

  const addPost = ({ title, content }) => {
    if (title.length == 0 || content.length == 0) {
      console.log('제목과 내용을 입력해주세요.');
      return;
    }
    setPosts([...posts, { id: posts.length + 1, title, content }]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className={styles.boardContainer}>
      <h2>📝 자유 게시판</h2>

      {/* 💡 실습 2. 입력 폼 컴포넌트(BoardForm)가 들어갈 자리 */}
      <div className={styles.boardFormContainer}>
        <h3 className={styles.boardFormTitle}>게시글 작성 영역 (BoardForm)</h3>
        <BoardForm addPost={addPost} />
      </div>

      {/* 💡 실습 3. 게시글 목록 컴포넌트(BoardList & BoardItem)가 들어갈 자리 */}
      <div className={styles.boardListContainer}>
        <h3 className={styles.boardListTitle}>게시글 목록 영역 (BoardList)</h3>
        <BoardList>
          {posts.length === 0 ? (
            <li>아직 작성된 글이 없습니다.</li>
          ) : (
            posts.map((post) => (
              <BoardItem key={post.id} post={post} deletePost={deletePost} />
            ))
          )}
        </BoardList>
      </div>
    </div>
  );
};
