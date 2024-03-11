import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Post from "./components/Post";
import Pagination from "./components/Pagination";
import PostModal from "./components/PostModal";

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const [postPerPage, setPostPerPage] = useState(5);
  const totalPage = Math.ceil(post.length / postPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const firstIndex = (currentPage - 1) * postPerPage;
  const lastIndex = firstIndex + postPerPage;
  const currentPost = post.slice(firstIndex, lastIndex);

  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState([]);

  return (
    <div className="container">
      <h2 className="title">Pagination</h2>

      <Post currentPost={currentPost} setShowModal={setShowModal} setItem={setItem} />

      <Pagination setPostPerPage={setPostPerPage} totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {showModal == true ? <PostModal setShowModal={setShowModal} item={item} /> : null}
    </div>
  );
}

export default App;
