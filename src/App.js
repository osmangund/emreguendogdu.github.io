import { Navbar } from "./components/Navbar/Navbar";

import { Routes, Route, HashRouter } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import { Blogpost1 } from "./pages/blogposts/Blogpost1";

export default function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpost1" element={<Blogpost1 />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </>
  );
}
