import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}