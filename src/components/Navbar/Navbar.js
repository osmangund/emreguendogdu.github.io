import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";
import "./Navbar.scss";

export function Navbar() {
  return (
    <nav>
      <div className="nav-home">
        <a href="/">Emre Guendogdu</a>
      </div>
      <div className="nav-pages">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/portfolio">Portfolio</a>
      </div>
      <div className="toggle-button">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
