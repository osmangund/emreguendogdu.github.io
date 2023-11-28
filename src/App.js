import { Navbar } from "./components/Navbar/Navbar";

import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import { Blogpost1 } from "./pages/blogposts/Blogpost1";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blogpost1" element={<Blogpost1 />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}
