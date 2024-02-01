import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
// import Sidebar from "./components/Sidebar/Sidebar";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="orders"
            element={<h1 style={{ textAlign: "center" }}>Orders</h1>}
          />
          <Route path="customers" element={<h1>Customers</h1>} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
