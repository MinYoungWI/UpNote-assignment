import "./topNav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { VscRefresh } from "react-icons/vsc";
import { TbBoxMultiple } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

function TopNav() {
  return (
    <div className="top-nav-bar">
      {/* 왼쪽 정렬 아이콘 */}
      <div className="left-sort">
        <div>
          <AiOutlineMenu className="top-nav-bar-icon" />
        </div>
        <div>
          <GrPrevious className="top-nav-bar-icon" />
        </div>
        <div>
          <GrNext className="top-nav-bar-icon" />
        </div>
        <div>
          <VscRefresh className="top-nav-bar-icon" />
        </div>
        <div>
          <input type="text" placeholder="Search"></input>
        </div>
      </div>
      {/* 오른쪽 정렬 아이콘 */}
      <div className="right-sort">
        <div>
          <button className="new-note">New Note</button>
        </div>
        <div>
          <TbBoxMultiple className="top-nav-bar-icon" />
        </div>
        <div>
          <FiSettings className="top-nav-bar-icon" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
