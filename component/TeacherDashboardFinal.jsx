import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarComponent from "./SidebarComponent";
import TopSearchBar from "./TopSearchBar";
import Teacher from "./teacher";
const DashboardFinal = () => {
  return (
    <div
      className="d-flex"
      >
      {/* Sidebar */}
     <SidebarComponent/>

      {/* Main Area */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Topbar */}
        <TopSearchBar/>

        {/* Content */}
        <div className="p-4 dashboard-container">
          <Teacher/>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardFinal;
