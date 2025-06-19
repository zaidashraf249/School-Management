import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Badge,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  FaExclamationCircle,
  FaUser,
  FaUserFriends,
  FaThLarge,
  FaUserTie,
  FaMoneyBill,
  FaChartBar,
  FaComments,
  FaBars,
  FaSearch,
  FaBell,
  FaTh,
} from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashBoard.css";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);

const feeData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Fee Collection",
      data: [10000, 35000, 2000, 15000],
      fill: true,
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0.05)");
        return gradient;
      },
      borderColor: "#3b82f6",
      pointBackgroundColor: "#fff",
      pointBorderColor: "#3b82f6",
      pointRadius: 4,
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { font: { size: 12 } },
    },
  },
  scales: {
    x: {
      ticks: { font: { size: 10 } },
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: { size: 10 },
        callback: function (value) {
          return "$" + value.toLocaleString();
        },
      },
    },
  },
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Container fluid>
        {/* Mobile Topbar */}
        <div className="mobile-topbar p-2 bg-white shadow-sm d-flex justify-content-between align-items-center d-lg-none">
          <button
            className="btn btn-outline-primary"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
          <span className="fw-bold">
            insti<span style={{ color: "#3b82f6" }}>Flow</span>
          </span>
        </div>

        {/* Sidebar */}
        <div className={`custom-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="brand px-3 mb-4 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <MdSchool
                style={{ fontSize: "22px", color: "#059669", marginRight: "6px" }}
              />
              <span className="fw-bold fs-5">
                insti<span style={{ color: "#3b82f6" }}>Flow</span>
              </span>
            </div>
            <button className="btn d-lg-none" onClick={toggleSidebar}>✕</button>
          </div>
          <a className="sidebar-link active" href="#">
            <FaThLarge className="me-2" /> Dashboard
          </a>
          <a className="sidebar-link" href="#">
            <FaUser className="me-2" /> Students
          </a>
          <a className="sidebar-link" href="#">
            <FaUserTie className="me-2" /> Teachers
          </a>
          <a className="sidebar-link" href="#">
            <FaMoneyBill className="me-2" /> Fees
          </a>
          <a className="sidebar-link" href="#">
            <FaChartBar className="me-2" /> Reports
          </a>
          <a className="sidebar-link" href="#">
            <FaComments className="me-2" /> Notifications
          </a>
        </div>
      </Container>

      {/* Main Content */}
      <div className="main-content p-3">
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
            <Button className="px-3 py-1 bg-light rounded-pill fw-medium text-muted">
              Admin
            </Button>
          </div>
        </div>

        <div>
          <h1 className="mb-4 fw-bold text-start">Dashboard</h1>
          <Row className="text-center">
            {[{ label: "Total Students", value: "1,250", icon: <FaUserFriends style={{ color: "#3b82f6" }} />, bg: "#e0e7ff" },
              { label: "Total Teachers", value: "50", icon: <FaUser style={{ color: "#0ea5e9" }} />, bg: "#e0f2fe" },
              { label: "Fees Collected", value: "$250,000", icon: <AiFillDollarCircle style={{ color: "#059669" }} />, bg: "#d1fae5" },
              { label: "Pending Fees", value: "$15,000", icon: <FaExclamationCircle style={{ color: "#f59e0b" }} />, bg: "#fef3c7" }].map((item, i) => (
              <Col xs={12} sm={6} md={3} key={i} className="mb-3 d-flex justify-content-center">
                <Card body className="shadow-sm text-start dashboard-card">
                  <div className="d-flex align-items-center mb-2">
                    <div className="dashboard-icon-box me-2" style={{ backgroundColor: item.bg }}>
                      {item.icon}
                    </div>
                    <span className="dashboard-label fw-semibold">{item.label}</span>
                  </div>
                  <div className="dashboard-value h4 fw-bold">{item.value}</div>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mb-4">
            <Col xs={12} md={6} className="mb-3">
              <Card className="shadow-sm w-100 chart-card">
                <Card.Body className="p-0">
                  <Card.Title className="section-title text-start px-3 pt-3">
                    Fee Collection
                  </Card.Title>
                  <div className="chart-container px-3" style={{ width: "100%", height: "200px" }}>
                    <Line data={feeData} options={chartOptions} />
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <Card className="shadow-sm w-100 table-card">
                <Card.Body style={{ padding: "0" }}>
                  <Card.Title className="section-title text-start px-3 pt-3">
                    Recent Payments
                  </Card.Title>
                  <Table borderless responsive hover size="sm" className="recent-table">
                    <thead>
                      <tr>
                        <th>Student</th>
                        <th>Date</th>
                        <th className="text-end">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="text-start">
                      <tr><td>John Doe</td><td>Apr 20, 2024</td><td className="text-end">$5,000</td></tr>
                      <tr><td>Jane Smith</td><td>Apr 18, 2024</td><td className="text-end">$3,500</td></tr>
                      <tr><td>Jane Smith</td><td>Apr 15, 2024</td><td className="text-end">$4,000</td></tr>
                      <tr><td>Jane Smith</td><td>Apr 10, 2024</td><td className="text-end">$3,000</td></tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h4 className="text-start">Recent Payment</h4>
          <Table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Naim Ansari</td>
                <td>Apr 20, 2025</td>
                <td>$5,000</td>
                <td>
                  <Badge bg="warning" text="danger" className="p-2 bg-opacity-25">
                    Pending
                  </Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;