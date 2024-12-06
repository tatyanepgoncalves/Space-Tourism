import { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import DestinationPage from "../../pages/DestinationPage/DestinationPage";
import CrewPage from "../../pages/CrewPage/CrewPage";
import TechnologyPage from "../../pages/TechnologyPage/TechnologyPage";
import Logo from "../../assets/images/shared/logo.svg";
import MenuOpen from "../../assets/images/shared/icon-hamburger.svg";
import MenuClose from "../../assets/images/shared/icon-close.svg";
import "../../styles/Header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <header>
        <div className="content">
          <section className="logo">
            <img src={Logo} alt="" />
          </section>

          <button className="menu-open" onClick={toggleMenu}>
            <img src={MenuOpen} alt="" />
          </button>

          <nav className="menu-desktop">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>00</span>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/destination"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>01</span>
                  Destination
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/crew"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>02</span>
                  Crew
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/technology"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>03</span>
                  Technology
                </NavLink>
              </li>
            </ul>
          </nav>

          <nav className={`menu-mobile ${isOpen ? "open" : ""}`}>
            <button className="menu-close" onClick={toggleMenu}>
              <img src={MenuClose} alt="" />
            </button>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>00</span>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/destination"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>01</span>
                  Destination
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/crew"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>02</span>
                  Crew
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/technology"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <span>03</span>
                  Technology
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
