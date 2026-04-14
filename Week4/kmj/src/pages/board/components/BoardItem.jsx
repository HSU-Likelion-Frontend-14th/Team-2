import { useState } from 'react';
import styles from './BoardItem.module.scss';

const BoardItem = ({ post, deletePost, updatePost }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={styles.boardItemWrapper}>
      {isEditing ? (
        <>
          <div className={styles.boardItemContentWrapper}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className={styles.boardItemButtonWrapper}>
            <button
              className={styles.boardItemDeleteButton}
              onClick={() => setIsEditing(!isEditing)}
            >
              취소
            </button>
            <button
              className={styles.boardItemUpdateButton}
              onClick={() => {
                updatePost(post.id, title, content);
                setIsEditing(!isEditing);
              }}
            >
              수정 완료
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.boardItemContentWrapper}>
            <h4 className={styles.boardItemTitle}>{post.title}</h4>
            <p className={styles.boardItemContent}>{post.content}</p>
          </div>
          <div className={styles.boardItemButtonWrapper}>
            <button
              className={styles.boardItemDeleteButton}
              onClick={() => {
                deletePost(post.id);
              }}
            >
              삭제
            </button>
            <button
              className={styles.boardItemUpdateButton}
              onClick={() => setIsEditing(!isEditing)}
            >
              수정
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default BoardItem;
