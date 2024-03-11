import { useState } from "react";

export default function Pagination({ setPostPerPage, totalPage, currentPage, setCurrentPage }) {
  const pageBtn = [];
  for (let i = 1; i <= totalPage; i++) {
    pageBtn.push(i);
  }

  // 버튼은 5개씩 노출
  const btnPerPage = 5;
  const [currentBtnList, setCurrentBtnList] = useState(1);
  const firstBtnIndex = (currentBtnList - 1) * btnPerPage;
  const lastBtnIndex = firstBtnIndex + btnPerPage;
  const currentBtns = pageBtn.slice(firstBtnIndex, lastBtnIndex);
  const totalBtnList = Math.ceil(pageBtn.length / btnPerPage);

  const nextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage == 5) {
      setCurrentBtnList(2);
    } else if (currentPage == 10) {
      setCurrentBtnList(3);
    } else if (currentPage == 15) {
      setCurrentBtnList(4);
    }
  };

  const prevBtn = () => {
    setCurrentPage(currentPage - 1);

    if (currentPage == 16) {
      setCurrentBtnList(3);
    } else if (currentPage == 11) {
      setCurrentBtnList(2);
    } else if (currentPage == 6) {
      setCurrentBtnList(1);
    }
  };

  return (
    <div className="pagination">
      <div></div>
      <div className="pagination-btns">
        <button
          onClick={() => {
            prevBtn();
          }}
          disabled={currentPage === 1}
        >
          prev
        </button>
        {currentBtns.map((item) => {
          return (
            <button
              className={item == currentPage ? "active" : ""}
              key={item}
              onClick={() => {
                setCurrentPage(item);
              }}
            >
              {item}
            </button>
          );
        })}
        <button
          onClick={() => {
            nextBtn();
          }}
          disabled={currentPage === totalPage}
        >
          next
        </button>
      </div>

      <select
        onChange={(e) => {
          setPostPerPage(Number(e.target.value));
          setCurrentPage(1);
        }}
      >
        <option value="5">5줄 보기</option>
        <option value="10">10줄 보기</option>
        <option value="15">15줄 보기</option>
      </select>
    </div>
  );
}
