import React, { useState } from "react";
import "./leftNav.css";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { PiNote } from "react-icons/pi";
import { FaRegSquareCheck } from "react-icons/fa6";
import { IoFunnelOutline } from "react-icons/io5";
import { FiCloudOff } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { SiSharp } from "react-icons/si";
import { FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import CreateNewNotebook from "../modalCreateNewNotebook/createNewNotebook";

function LeftNav() {
  const [modalOpen, setModalOpen] = useState(false);
  const [createNotebookState, setCreateNotebookState] = useState(""); // CreateNewNotebook의 상태

  const DeleteNotebooksList = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      alert("삭제되었습니다.");
      localStorage.removeItem(`notebookKey${createNotebookState}`);
    } else {
      alert("취소합니다.");
    }
  };
  return (
    <div className="left-nav-bar">
      <div className="title1 all-notes">
        <div>
          <BsChevronDown className="icon" />
          <PiNote className="icon" />
          All Notes
        </div>
        <div className="title2 uncategorized">
          <IoFunnelOutline className="icon" />
          Uncategorized
        </div>
        <div className="title2 todo">
          <FaRegSquareCheck className="icon" />
          Todo
        </div>
        <div className="title2 unsynced">
          <FiCloudOff className="icon" />
          Unsynced
        </div>
      </div>
      <div className="title1 quick-access">
        <div>
          <BsChevronDown className="icon" />
          QUICK ACCESS
        </div>
        <div className="title2 welcome">
          <FaRegStar className="icon" />
          Welome to Up...
        </div>
      </div>
      <div className="title1 notebooks">
        <div>
          <BsChevronDown className="icon" />
          NOTEBOOKS
          <FaPlus
            onClick={() => {
              setModalOpen(true);
            }}
            className="plus-icon"
          />
        </div>
        {localStorage.getItem(`notebookKey${createNotebookState}`) &&
        localStorage.getItem(`notebookKey${createNotebookState}`) !== null ? (
          <div className="title2">
            <img src="https://cdn.icon-icons.com/icons2/625/PNG/512/paper-plane_icon-icons.com_57396.png" />
            {localStorage.getItem(`notebookKey${createNotebookState}`)}
            <MdDeleteOutline
              onClick={DeleteNotebooksList}
              className="deleteBut"
            />
          </div>
        ) : (
          <div className="title2" style={{ display: "none" }}></div>
        )}
      </div>
      <div className="title1 tags">
        <div>
          <BsChevronDown className="icon" />
          TAGS
        </div>
        <div className="title2 tags-list">
          <SiSharp className="icon" />
          UpNote
        </div>
      </div>
      <div className="title1">
        <div>TEMPLATES</div>
      </div>
      <div className="title1">
        <div>TRASH</div>
      </div>
      {modalOpen && (
        <CreateNewNotebook
          setModalOpen={setModalOpen}
          createNotebookState={createNotebookState} // 상태를 props로 전달
          setCreateNotebookState={setCreateNotebookState} // 상태를 업데이트하는 함수를 props로 전달
        />
      )}
    </div>
  );
}

export default LeftNav;
