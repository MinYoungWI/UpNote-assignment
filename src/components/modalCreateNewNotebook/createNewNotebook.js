import "./createNewNotebook.css";
import React, { useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

function CreateNewNotebook({ modalOpen, setModalOpen }) {
  const modalRef = useRef();

  // 모달 외부 클릭 시 닫기
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    // 이벤트 리스너 추가
    document.addEventListener("mousedown", handleOutsideClick);

    // 컴포넌트가 unmount될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const Square = () => {
    return <button className="create-square"></button>;
  };

  const numberOfSquares = 7;
  const squaresArray = Array.from({ length: numberOfSquares }, (v, i) => i);

  return (
    <div ref={modalRef} className="createNewNotebook-modal-box">
      <div className="modal-title">Create New Notebook</div>
      <div className="left-create-wrap">
        <div className="name">Name</div>
        <div>Lock</div>
        <div>Cover</div>
      </div>
      <div className="right-create-wrap">
        <input placeholder="Enter Notebook name"></input>
        <div className="notebooks">
          Notebooks
          <BsChevronDown
            style={{ fontSize: "13px", marginLeft: "5px", marginTop: "3px" }}
          />
        </div>
        <div className="displayFlex">
          <div className="white-oval"></div>
          <img
            alt="lock"
            className="lockImg"
            src="https://cdn.icon-icons.com/icons2/2104/PNG/512/padlock_icon_129399.png"
          />
        </div>
        <div className="sqare-wrap">
          {squaresArray.map((square, index) => (
            <Square key={index} />
          ))}
        </div>
      </div>
      <button className="createbtn">Create</button>
    </div>
  );
}

export default CreateNewNotebook;
