import React, { useState } from "react";
import { Collapse, Nav } from "react-bootstrap"; // ✅ Import Collapse
import { MdSchool } from "react-icons/md";
import SidebarMenuItem from "./SidebarMuneItem";

const SidebarComponent = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div style={{ width: "250px", backgroundColor: "white" }}>
        <div className="p-4 fs-4 border-bottom border-secondary">
            
          <h4 className="fw-bold text-primary">
            <MdSchool
            style={{ fontSize: "22px", color: "#059669", marginRight: "6px" }}
            />
            insti<span className="text-success">Flow</span>
          </h4>
        </div>
        <Nav
          className="flex-column px-3 pt-3 gap-2 sidebar-menu "
          style={{ width: "300px" }}
        >
          <SidebarMenuItem/>
        </Nav>
      </div>
  );
};

export default SidebarComponent;
