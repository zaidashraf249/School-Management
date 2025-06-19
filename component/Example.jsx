import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  ListGroup,
  Badge,
  Form,
  InputGroup,
  ProgressBar,
} from "react-bootstrap";
import {
  FaSearch,
  FaBell,
  FaCog,
  FaAngleDown,
  FaExclamationTriangle,
  FaTh,
  FaBookOpen,
  FaUser,
  FaFileAlt,
  FaEnvelope,
  FaChevronRight,
  FaPlus, // ✅ Added
} from "react-icons/fa";
import { AiFillHome, AiOutlineBook, AiOutlineUser } from "react-icons/ai";
import {
  BsFillBarChartFill,
  BsClipboardCheck,
  BsFillGearFill,
  BsFileTextFill,
  BsFillBookFill,
  BsPersonCircle,
} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbGeometry } from "react-icons/tb";
import { MdSchool } from "react-icons/md";
import './Example.css' 
import SidebarComponent from "./SidebarComponent";
import TeacherProfile from "./TeacherProfile";
import TopSearchBar from "./TopSearchBar";
import CardContent from "./CardContent";
const Dashboard = () => {
  const [openMenu, setOpenMenu] = React.useState(null);
  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };
  return (
    <div
      className="d-flex"
      style={{ height: "100%", backgroundColor: "#f3f4f6" }}
    >
      {/* Sidebar */}
     <SidebarComponent/>

      {/* Main Area */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Topbar */}
        <TopSearchBar/>

        {/* Content */}
        <div className="p-4 dashboard-container">
          <h2 className="fw-bold text-start mb-4">Teacher Dashboard</h2>
          <Row className="g-4">
            {/* Today's Schedule */}
            <Col xs={12} md={6} lg={4}>
              <CardContent/>
            </Col>

            {/* Recent Submissions */}
            <Col xs={12} md={6} lg={4}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title className="section-title">
                    Recent Submissions
                  </Card.Title>
                  <div className="submission-item">
                    <div className="icon-circle bg-light">
                      <FaFileAlt className="text-secondary" />
                    </div>
                    <div>
                      <div className="item-title">Research Paper</div>
                      <div className="item-subtext">Alex Johnson</div>
                    </div>
                  </div>
                  <div className="submission-item">
                    <div className="icon-circle bg-light">
                      <FaFileAlt className="text-secondary" />
                    </div>
                    <div>
                      <div className="item-title">Math Worksheet</div>
                      <div className="item-subtext">Sarah Brown</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Teacher Profile */}
            <TeacherProfile/>

            {/* Quick Links */}
            <Col xs={12} md={6} lg={4}>
              <Card className="dashboard-card">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-light">
                      <FaBookOpen className="text-dark" />
                    </div>
                    <div className="fw-semibold">Gradebook</div>
                  </div>
                  <FaChevronRight className="text-muted" />
                </Card.Body>
              </Card>
            </Col>

            {/* Performance Alerts */}
            <Col xs={12} md={6} lg={4}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title className="section-title">
                    Performance Alerts
                  </Card.Title>
                  <div className="bg-light rounded p-3 opacity-50">
                    <div className="placeholder-glow">
                      <span className="placeholder col-10"></span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Attention Required */}
            <Col xs={12} md={6} lg={4}>
              <Card className="dashboard-card d-flex align-items-center justify-content-center text-center p-4">
                <FaExclamationTriangle size={36} className="text-danger mb-2" />
                <div>
                  <h6 className="fw-bold mb-0">2 areas need attention</h6>
                </div>
              </Card>
            </Col>
          </Row>

          <style jsx>{`
          *{
          padding:"0%";
          margin:"0%";}
            .dashboard-container {
              background-color: #f9fafc;
            }

            .dashboard-container {
              background-color: #f9fafc;
            }

            .dashboard-card {
              border-radius: 1rem;
              border: none;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
              height: 100%;
            }

            .section-title {
              font-weight: 600;
              margin-bottom: 1.25rem;
              font-size: 1.1rem;
            }

            .schedule-item,
            .submission-item {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              margin-bottom: 1rem;
            }

            .icon-circle {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }

            .item-title {
              font-weight: 600;
              font-size: 1rem;
            }

            .item-subtext {
              font-size: 0.875rem;
              color: #6c757d;
            }

            /* Responsive Fixes */
            @media (max-width: 991.98px) {
              .topbar-search input {
                width: 200px;
              }

              .dashboard-card {
                margin-bottom: 1rem;
              }
            }

            @media (max-width: 767.98px) {
              .topbar-search input {
                width: 150px;
              }

              .dashboard-container h2 {
                font-size: 1.4rem;
              }

              .topbar {
                flex-direction: column;
                align-items: flex-start !important;
                gap: 1rem;
              }

              .icon-btn {
                padding: 0.4rem !important;
              }
            }

            @media (max-width: 575.98px) {
              .sidebar-menu {
                padding-left: 1rem !important;
                padding-right: 1rem !important;
              }

              .dashboard-container {
                padding: 1rem !important;
              }

              .section-title {
                font-size: 1rem;
              }
            }

            .dashboard-card {
              border-radius: 1rem;
              border: none;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }
            .section-title {
              font-weight: 600;
              margin-bottom: 1.5rem;
            }
            .schedule-item,
            .submission-item {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              margin-bottom: 1rem;
            }
            .icon-circle {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
            .item-title {
              font-weight: 600;
            }
            .item-subtext {
              font-size: 0.875rem;
              color: #6c757d;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
