function BoardItem({ post, onDelete }) {
  return (
    <li style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
      </div>
      <button onClick={() => onDelete(post.id)}>삭제</button>
    </li>
  );
}

export default BoardItem;