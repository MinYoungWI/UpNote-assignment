import "./main.css";

import LeftNav from "../left-nav/leftNav";
import NotebookNothing from "../notebook-nothing/notebookNothing";

function Main() {
  return (
    <div className="main-box">
      <LeftNav />
      <NotebookNothing />
      {/* <NoteList /> */}
      {/* <div className="right-text-edit">dfadfads</div> */}
    </div>
  );
}

export default Main;
