import "./App.css";
import TopNav from "./components/top-nav/topNav";
import LeftNav from "./components/left-nav/leftNav";
import NotebookNothing from "./components/notebook-nothing/notebookNothing";
import NoteList from "./components/note-list/noteList";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="main-box">
        <LeftNav />
        <NotebookNothing />
        {/* <NoteList /> */}
        {/* <div className="right-text-edit">dfadfads</div> */}
      </div>
    </div>
  );
}

export default App;
