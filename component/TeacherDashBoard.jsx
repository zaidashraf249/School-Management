import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Form,
  InputGroup,
  Button,
  Badge,
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
import { BiBookAlt } from "react-icons/bi";
import { FaTriangleExclamation } from "react-icons/fa6";
import { PiMathOperationsBold } from "react-icons/pi";
import { TbGeometry } from "react-icons/tb";

const TeacherDashboard = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="d-flex min-vh-100">
      
      {/* Sidebar */}
      <div className="bg-white border-end " style={{ width: "240px" }}>
          <h4 className="fw-bold text-primary">
            insti<span className="text-success">Flow</span>
          </h4>
        <Nav className="flex-column px-3 pt-3 gap-2 sidebar-menu " style={{width:'300px'}}>
          <div className="sidebar-logo mb-4 ps-2">
           
          </div>

          {[
            {
              name: "dashboard",
              icon: <AiFillHome className="me-2" />,
              label: "Dashboard",
              items: ["Overview", "Reports"],
            },
            {
              name: "classes",
              icon: <AiOutlineBook className="me-2" />,
              label: "My Classes",
              items: ["Class List", "Assignments"],
            },
            {
              name: "performance",
              icon: <BsFillBarChartFill className="me-2" />,
              label: "Student Performance",
              items: ["By Class", "By Student"],
            },
            {
              name: "attendance",
              icon: <BsClipboardCheck className="me-2" />,
              label: "Attendance Records",
              items: ["Daily", "Monthly"],
            },
            {
              name: "notifications",
              icon: <FaBell className="me-2" />,
              label: "Notifications",
              items: ["All", "Settings"],
            },
            {
              name: "settings",
              icon: <BsFillGearFill className="me-2" />,
              label: "Settings",
              items: ["Profile", "Preferences"],
            },
          ].map((menu) => (
            <React.Fragment key={menu.name}>
              <div
                className={`sidebar-link d-flex align-items-center gap-2 px-3 py-2 rounded ${
                  openMenu === menu.name ? "active" : ""
                }`}
                role="button"
                onClick={() => toggleMenu(menu.name)}
              >
                {menu.icon}
                <span>{menu.label}</span>
              </div>

              {openMenu === menu.name && menu.items.length > 0 && (
                <div className="submenu ps-4 pt-1 text-start">
                  {menu.items.map((item, i) => (
                    <div className="py-1 text-muted " key={i}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}

          <style jsx>{`
            .sidebar-menu {
              width: 230px;
              background-color: white;
              height: 100vh;
              font-size: 14px;
            }

            .sidebar-logo {
              font-size: 20px;
            }

            .sidebar-link {
              color: #1e293b;
              font-weight: 500;
              cursor: pointer;
              transition: background 0.2s, color 0.2s;
            }

            .sidebar-link:hover {
              background-color: #f1f5f9;
            }

            .sidebar-link.active {
              background-color: #e0edff;
              color: #2563eb;
              border-left: 4px solid #2563eb;
              font-weight: 600;
            }

            .submenu {
              font-size: 13px;
            }
          `}</style>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light p-4">
        {/* Top Bar */}
        <div className="topbar d-flex justify-content-between align-items-center p-3 shadow-sm bg-white rounded">
          <InputGroup className="topbar-search">
            <InputGroup.Text className="bg-transparent border-0">
              <FaSearch className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search"
              className="border-0 bg-light rounded-pill"
            />
          </InputGroup>
          <div className="d-flex align-items-center gap-3">
            <Button variant="light" className="icon-btn rounded-circle p-2">
              <FaBell className="text-warning" />
            </Button>
            <Button variant="light" className="icon-btn rounded-circle p-2">
              <FaTh className="text-dark" />
            </Button>
            <Badge className="p-2 m-2">Teacher</Badge>
          </div>
        </div>

        <h4 className="fw-bold mb-4">Dashboard</h4>

        <div className="p-4 dashboard-container">
          <h2 className="fw-bold text-start mb-4">Teacher Dashboard</h2>
          <Row className="g-4">
            {/* Today's Schedule */}
            <Col xs={12} md={6} lg={4}>
              <Card className="dashboard-card" >
                <Card.Body>
                  <Card.Title className="section-title">
                    Today's Schedule
                  </Card.Title>
                  <div className="schedule-item">
                    <div className="icon-circle bg-primary-subtle">
                      <TbGeometry className="text-primary" />
                    </div>
                    <div>
                      <div className="item-title">Geometry</div>
                      <div className="item-subtext">10:00 AM</div>
                    </div>
                  </div>
                  <ProgressBar now={30} variant="primary" className="mb-3" />
                  <div className="schedule-item">
                    <div className="icon-circle bg-info-subtle">
                      <FaBookOpen className="text-info" />
                    </div>
                    <div>
                      <div className="item-title">Physics</div>
                      <div className="item-subtext">1:00 PM</div>
                    </div>
                  </div>
                  <ProgressBar now={50} variant="info" />
                </Card.Body>
              </Card>
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
            <Col xs={12} md={6} lg={4}>
              <Card className="dashboard-card text-center p-4">
                <BsPersonCircle
                  size={64}
                  className="mx-auto text-primary mb-3"
                />
                <h5 className="fw-bold">Teacher Emily</h5>
                <Button variant="outline-primary" size="sm" className="mt-2">
                  <FaEnvelope className="me-1" /> Messages
                </Button>
              </Card>
            </Col>

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
            .dashboard-container {
              background-color: #f9fafc;
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

export default TeacherDashboard;
