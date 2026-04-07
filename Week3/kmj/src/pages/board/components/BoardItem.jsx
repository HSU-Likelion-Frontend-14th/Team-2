import styles from './BoardItem.module.scss';

const BoardItem = ({ post, deletePost }) => {
  return (
    <li className={styles.boardItemWrapper} key={post.id}>
      <div className={styles.boardItemContentWrapper}>
        <h4 className={styles.boardItemTitle}>{post.title}</h4>
        <p className={styles.boardItemContent}>{post.content}</p>
      </div>
      <div>
        <button
          className={styles.boardItemDeleteButton}
          onClick={() => {
            deletePost(post.id);
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default BoardItem;
