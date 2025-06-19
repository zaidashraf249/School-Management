import React from "react";
import { Row, Col, Card, Badge, Button, ProgressBar } from "react-bootstrap";
import { FaBookOpen, FaFileAlt, FaExclamationTriangle, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

const Teacher = () => {
  return (
    <div className="p-4 dashboard-container">
      <h2 className="fw-bold text-start mb-4">Teacher Dashboard</h2>
      <Row className="g-4">
        {/* Today's Schedule */}
        <Col xs={12} md={6} lg={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="section-title">Today's Schedule</Card.Title>
              <div className="schedule-item">
                <div className="icon-circle bg-primary-subtle">
                  <FaBookOpen className="text-primary" />
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
              <Card.Title className="section-title">Recent Submissions</Card.Title>
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
            <BsPersonCircle size={64} className="mx-auto text-primary mb-3" />
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
              <Card.Title className="section-title">Performance Alerts</Card.Title>
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
  );
};

export default Teacher;
