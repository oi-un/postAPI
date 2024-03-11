export default function PostModal({ setShowModal, item }) {
  return (
    <>
      <div
        className="modal-background"
        onClick={() => {
          setShowModal(false);
        }}
      ></div>
      <div className="modal-main">
        <span
          className="modal-close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          ×
        </span>
        <h2 className="modal-title">{item.title}</h2>
        <p className="modal-content">{item.body}</p>
      </div>
    </>
  );
}
