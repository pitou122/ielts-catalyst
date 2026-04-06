import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MemberPage from "./pages/MemberPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:slug" element={<MemberPage />} />
      </Routes>
    </BrowserRouter>
  );
}