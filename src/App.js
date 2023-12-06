import "./App.css";
import TopNav from "./components/top-nav/topNav";
import LeftNav from "./components/left-nav/leftNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="main-box">
        <LeftNav />
        <div className="center-notes-list">ddddd</div>
        <div className="right-text-edit">dfadfads</div>
      </div>
    </div>
  );
}

export default App;
