import { Routes, Route } from "react-router-dom";

///Import Pages
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
