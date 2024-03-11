export default function Post({ currentPost, setShowModal, setItem }) {
  return (
    <table>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {currentPost.map((item, i) => {
          return (
            <tr
              key={item.id}
              onClick={() => {
                setShowModal(true);
                setItem(item);
              }}
            >
              <td>{i + 1}</td>
              <td>{item.title}</td>
              <td>{item.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
