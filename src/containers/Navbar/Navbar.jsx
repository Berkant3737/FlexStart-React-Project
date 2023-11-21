import React from "react";
import NavbarBrand from "../../components/Navbar/NavbarBrand";
import NavbarContent from "../../components/Navbar/NavbarContent";

const NavbarList = [
  {
    name: "Home",
    class: "active",
  },
  {
    name: "About",
  },
  {
    name: "Services",
  },
  {
    name: "Portfolio",
  },
  {
    name: "Team",
  },
  {
    name: "Blog",
  },
  {
    name: "Drop Down",
    icon: "bi bi-chevron-down",
    class: "dropdown-item",
    menu: [
      {
        name: "Drop Down 1",
      },
      {
        name: "Drop Down 1",
      },
    ],
  },
  {
    name: "Mega Menu",
    icon: "bi bi-chevron-down",
    class: "dropdown-item",
    menu: [
      {
        name: "Drop Down 1",
      },
      {
        name: "Drop Down 1",
      },
    ],
  },
  {
    name: "Contact",
  },
  {
    name: "Get Started",
    class: "btn-get-started",
  },
];

function Navbar() {
  return (
    <div>
      <header className="fixed-top header">
        <nav className="navbar navbar-expand-lg p-0">
        <div className="container align-items-center">
            <NavbarBrand/>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              
              <span className="navbar-icon">
                <i className="bi bi-list"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <NavbarContent NavbarList={NavbarList} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;