import React, { useState } from "react";
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
import "./AdminDashBoard2.css";

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
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
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

const Dashboard2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const summaryCards = [
    {
      label: "Total Students",
      value: "1,250",
      icon: <FaUserFriends style={{ color: "#3b82f6" }} />,
      bg: "#e0e7ff",
    },
    {
      label: "Total Teachers",
      value: "50",
      icon: <FaUser style={{ color: "#0ea5e9" }} />,
      bg: "#e0f2fe",
    },
    {
      label: "Fees Collected",
      value: "$250,000",
      icon: <AiFillDollarCircle style={{ color: "#059669" }} />,
      bg: "#d1fae5",
    },
    {
      label: "Pending Fees",
      value: "$15,000",
      icon: <FaExclamationCircle style={{ color: "#f59e0b" }} />,
      bg: "#fef3c7",
    },
  ];

  return (
    <Container fluid className="admin-dashboard p-0">
      {/* Mobile Header */}
        <Container fluid >
            <div className="d-md-none p-2 bg-white shadow-sm d-flex justify-content-between align-items-center">
              <button className="btn btn-outline-primary" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                <FaBars />
              </button>
              <span className="fw-bold">insti<span style={{ color: "#3b82f6" }}>Flow</span></span>
            </div>
      
            <div className={`custom-sidebar ${sidebarOpen ? "open" : ""}`}>
              <div className="brand px-3 mb-4 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <MdSchool style={{ fontSize: "22px", color: "#059669", marginRight: "6px" }} />
                  <span className="fw-bold fs-5">insti<span style={{ color: "#3b82f6" }}>Flow</span></span>
                </div>
                <button className="btn d-md-none" onClick={toggleSidebar}>✕</button>
              </div>
      
              <a className="sidebar-link active" href="#"><FaThLarge className="me-2" /> Dashboard</a>
              <a className="sidebar-link" href="#"><FaUser className="me-2" /> Students</a>
              <a className="sidebar-link" href="#"><FaUserTie className="me-2" /> Teachers</a>
              <a className="sidebar-link" href="#"><FaMoneyBill className="me-2" /> Fees</a>
              <a className="sidebar-link" href="#"><FaChartBar className="me-2" /> Reports</a>
              <a className="sidebar-link" href="#"><FaComments className="me-2" /> Notifications</a>
            </div>
          </Container>

      {/* Main Content */}
      <div className="main-content p-3">
        {/* Topbar */}
        <div className="topbar d-flex justify-content-between align-items-center mb-4" style={{width:"100%"}}>
          <InputGroup className="search-box w-50">
            <InputGroup.Text className="bg-white border-end-0"><FaSearch /></InputGroup.Text>
            <Form.Control type="text" placeholder="Search" className="border-start-0" />
          </InputGroup>
          <div className="d-flex align-items-center gap-3">
            <Button variant="light"><FaBell className="text-warning" /></Button>
            <Button variant="light"><FaTh /></Button>
            <Button className="admin-name px-3 py-1 bg-light rounded-pill text-muted">Admin</Button>
          </div>
        </div>

        {/* Summary Cards */}
        <Row className="g-3 mb-4">
            <h1 className="text-start fw-bold ">Dashboard</h1>
          {summaryCards.map((item, i) => (
            <Col xs={12} sm={6} lg={3} key={i}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div className="me-2 p-2 rounded" style={{ backgroundColor: item.bg }}>{item.icon}</div>
                    <div>
                      <div className="fw-semibold">{item.label}</div>
                      <div className="h5 fw-bold">{item.value}</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Charts & Tables */}
        <Row className="g-3">
          <Col xs={12} md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold">Fee Collection</Card.Title>
                <div style={{ height: "200px" }}>
                  <Line data={feeData} options={chartOptions} />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold">Recent Payments</Card.Title>
                <Table borderless responsive hover size="sm">
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Date</th>
                      <th className="text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
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

        {/* Status Table */}
        <h5 className="mt-4 mb-3 fw-semibold">Recent Payment</h5>
        <Table className="table">
          <thead>
            <tr><th>Name</th><th>Date</th><th>Amount</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Naim Ansari</td>
              <td>Apr 20, 2025</td>
              <td>$5,000</td>
              <td><Badge bg="warning" text="danger">Pending</Badge></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Dashboard2;