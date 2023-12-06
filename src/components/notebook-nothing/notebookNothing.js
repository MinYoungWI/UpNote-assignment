import "./notebookNothing.css";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

function NotebookNothing() {
  return (
    <div className="notebook-nothing-box">
      {/* 네비바 */}
      <div className="top-search-box">
        <div className="margin left-sort">Notebooks ({0})</div>
        <div className="margin icon-wrap">
          <div>
            <TfiLayoutGrid2 />
          </div>
          <div>
            <AiOutlineMenu />
          </div>
        </div>
        <input className="margin" type="text" placeholder="Search"></input>
        <div className="margin">
          <FaPlus />
        </div>
      </div>
      {/* 본문 */}
      <div className="description-box">
        <div className="desc-center-sort">
          <img src="https://cdn.icon-icons.com/icons2/37/PNG/512/books_3025.png" />
          <div>You can organize notes of same topic into notebooks.</div>
          <div className="color-blue">Create New Notebook</div>
        </div>
      </div>
    </div>
  );
}

export default NotebookNothing;
