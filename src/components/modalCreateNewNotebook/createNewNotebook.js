import "./createNewNotebook.css";
import React, { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

function CreateNewNotebook({ setModalOpen, setCreateNotebookState }) {
  const modalRef = useRef();

  const [nameValue, setNameValue] = useState("");

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

  const Square = ({ index }) => {
    const colors = ["one", "two", "three", "four", "five", "six", "seven"];
    const colorIndex = index % colors.length;
    const squareColor = colors[colorIndex];

    return <button className={`create-square ${squareColor}`}></button>;
  };

  const numberOfSquares = 7;
  const squaresArray = Array.from({ length: numberOfSquares }, (v, i) => i);

  const clickedCreateBtn = (event) => {
    setNameValue(event.target.value);
    localStorage.setItem(`notebookKey${nameValue}`, nameValue);
    localStorage.setItem(`notebookKey`, nameValue);
    // setCreateNotebookState를 사용하여 상태 업데이트
    setCreateNotebookState(nameValue);
    setModalOpen(false);
  };

  return (
    <div ref={modalRef} className="createNewNotebook-modal-box">
      <div className="modal-title">Create New Notebook</div>
      <div className="left-create-wrap">
        <div className="name">Name</div>
        <div>Lock</div>
        <div>Cover</div>
      </div>
      <div className="right-create-wrap">
        <input
          placeholder="Enter Notebook name"
          onChange={(e) => setNameValue(e.target.value)}
        ></input>
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
            <Square key={index} index={index} />
          ))}
        </div>
      </div>
      <button className="createbtn" onClick={clickedCreateBtn}>
        Create
      </button>
    </div>
  );
}

export default CreateNewNotebook;
