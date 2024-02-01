import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="app">
      <div className="app-glass">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
