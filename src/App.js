import { Navbar } from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}
