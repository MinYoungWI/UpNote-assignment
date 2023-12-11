import "./main.css";
import { useEffect, useState } from "react";
import LeftNav from "../left-nav/leftNav";
import NewNote from "../newNote/newNote";
import NotebookNothing from "../notebook-nothing/notebookNothing";

function Main() {
  return (
    <div className="main-box">
      <LeftNav />
      {localStorage.getItem("notebookKey") &&
      localStorage.getItem("notebookKey") !== null ? (
        <NewNote />
      ) : (
        <NotebookNothing />
      )}

      {/* <NoteList /> */}
      {/* <div className="right-text-edit">dfadfads</div> */}
    </div>
  );
}

export default Main;
