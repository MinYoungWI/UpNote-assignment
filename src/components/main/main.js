import "./main.css";
import { useEffect, useState } from "react";
import LeftNav from "../left-nav/leftNav";
import NewNote from "../newNote/newNote";
import NotebookNothing from "../notebook-nothing/notebookNothing";

function Main() {
  const [hasNotebookName, setHasNotebookName] = useState(
    localStorage.getItem("notebookName") !== null
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setHasNotebookName(localStorage.getItem("notebookName") !== null);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="main-box">
      <LeftNav />
      {hasNotebookName ? <NewNote /> : <NotebookNothing />}

      {/* <NoteList /> */}
      {/* <div className="right-text-edit">dfadfads</div> */}
    </div>
  );
}

export default Main;
