function BoardItem({ post, onDelete }) {
  return (
    <li style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4 style={{ margin: '0 0 5px 0' }}>{post.title}</h4>
        <p style={{ margin: 0, color: '#555' }}>{post.content}</p>
      </div>
      <button onClick={() => onDelete(post.id)} style={{ padding: '5px 10px', cursor: 'pointer' }}>삭제</button>
    </li>
  );
}

export default BoardItem;