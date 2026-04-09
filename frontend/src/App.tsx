import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MemberPage from "./pages/MemberPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:slug" element={<MemberPage />} />
      </Routes>
    </BrowserRouter>
  );
}