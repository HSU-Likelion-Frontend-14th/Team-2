import BoardItem from './BoardItem';

function BoardList({ posts, onDelete }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {posts.length === 0 ? (
        <li>아직 작성된 글이 없습니다.</li>
      ) : (
        posts.map((post) => (
          <BoardItem key={post.id} post={post} onDelete={onDelete} />
        ))
      )}
    </ul>
  );
}

export default BoardList;