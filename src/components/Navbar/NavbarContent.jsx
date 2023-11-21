import React from "react";
function NavbarContent({ NavbarList }) {
  return (
    <>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        {NavbarList.map((item, index) => (
          <React.Fragment key={index}>
            {item.menu ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>{item.name}</span>
                  <i className={`${item.icon}`}></i>
                </a>
                <ul className="dropdown-menu position-absoloute">
                  {item.menu.map((submenu, submenuIndex) => (
                    <li key={submenuIndex}>
                      <a className="dropdown-item" href="#">
                        {submenu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className={`nav-item ${item.class || ""}`} key={index}>
                <a
                  className={`${
                    item.class == "btn-get-started" ? "text-white" : "nav-link"
                  }`}
                  href="#"
                >
                  <span
                    className={`nav-item ${
                      item.class == "active" ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default NavbarContent;
