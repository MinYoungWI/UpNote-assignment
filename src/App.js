import "./App.css";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { PiNote } from "react-icons/pi";
import { FaRegSquareCheck } from "react-icons/fa6";
import { IoFunnelOutline } from "react-icons/io5";
import { FiCloudOff } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { SiSharp } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <div className="top-nav-bar"></div>
      <div className="main-box">
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
            </div>
            <div className="title2 get-started">
              <img src="https://cdn.icon-icons.com/icons2/625/PNG/512/paper-plane_icon-icons.com_57396.png" />
              Get Started
            </div>
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
        </div>
        <div className="center-notes-list">ddddd</div>
        <div className="right-text-edit">dfadfads</div>
      </div>
    </div>
  );
}

export default App;
