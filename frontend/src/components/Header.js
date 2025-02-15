import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header class="header">
        <div class="header-container">
          <div class="logo">
            <img src="book1.png" width="25" height="25" />
            <div class="logo-text">StoryMosaic</div>
          </div>
          <div class="user-controls">
            <Link to="/login" class="nav-link">
              Login
            </Link>
            <div class="user-avatar">👤</div>
          </div>
        </div>
      </header>

      <nav class="main-menu">
        <div class="menu-container">
          <div class="nav-menu">
            <Link to="/" class="nav-link">
              Home
            </Link>
            <Link to="/story" class="nav-link">
              Explore Stories
            </Link>
            <a href="#" class="nav-link">
              Collaborations
            </a>
            <a href="#" class="nav-link">
              Community
            </a>
            <a href="#" class="nav-link">
              Support
            </a>
          </div>
          <div class="user-controls">
            <a href="#" class="create-btn">
              <Link to="/write-story">Create Story</Link>
            </a>
          </div>
          <button class="mobile-menu-btn">☰</button>
        </div>
      </nav>
    </>
  );
}
