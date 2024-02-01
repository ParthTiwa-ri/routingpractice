import { Outlet } from "react-router-dom";
import "./Main.css";
function Main() {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
}

export default Main;
