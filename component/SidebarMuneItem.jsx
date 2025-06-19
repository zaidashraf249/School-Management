import React, { useState } from "react";
import { Collapse } from "react-bootstrap"; // ✅ Import Collapse

import { FaBell, FaChevronDown, FaChevronRight, FaHome } from "react-icons/fa"; // ✅ Add FaHome
import SubMenu from "./SidebarSubMenu";

const SidebarMenuItem = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div style={{ width: "250px", height: "100vh", padding: "1rem" }}>
      {/* Dashboard Menu */}
      <div
        className={`d-flex align-items-center p-2 rounded ${
          openMenu === "dashboard"
            ? "bg-light border-start border-primary border-4"
            : ""
        }`}
        style={{ cursor: "pointer" }}
        onClick={() => toggleMenu("dashboard")} // ✅ Fixed
      >
        <FaHome className="me-2 text-primary" />
        <span
          className={`fw-semibold d-flex justify-content-between align-items-center w-100 ${
            openMenu === "dashboard" ? "text-primary" : "text-dark"
          }`}
        >
          Dashboard
          {openMenu === "dashboard" ? (
            <span className="ms-auto">
              <FaChevronDown />
            </span>
          ) : (
            <span className="ms-auto">
              <FaChevronRight />
            </span>
          )}
        </span>
      </div>

      {openMenu === "dashboard" && (
        <Collapse in={true}>
          <SubMenu />
        </Collapse>
      )}

      {/* Add more menus similarly */}
    </div>
  );
};

export default SidebarMenuItem;
