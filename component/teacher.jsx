import { Row, Col, Card } from "react-bootstrap";
import { FaBookOpen, FaFileAlt, FaExclamationTriangle, FaChevronRight } from "react-icons/fa";
import TeacherProfile from "./TeacherProfile";
import CardContent from "./CardContent";

const Teacher = () => {
  return (
    <div className="p-4 bg-light">
      <h2 className="fw-bold text-start mb-4">Teacher Dashboard</h2>
      <Row className="g-4">
        {/* Today's Schedule */}
        <CardContent />

        {/* Recent Submissions */}
        <Col xs={12} md={6} lg={4}>
          <Card className="shadow-sm border-0 rounded-4 h-100">
            <Card.Body>
              <Card.Title className="fw-semibold mb-4">Recent Submissions</Card.Title>

              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-light d-flex justify-content-center align-items-center rounded-circle" style={{ width: "40px", height: "40px" }}>
                  <FaFileAlt className="text-secondary" />
                </div>
                <div>
                  <div className="fw-semibold">Research Paper</div>
                  <div className="text-muted small">Alex Johnson</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-light d-flex justify-content-center align-items-center rounded-circle" style={{ width: "40px", height: "40px" }}>
                  <FaFileAlt className="text-secondary" />
                </div>
                <div>
                  <div className="fw-semibold">Math Worksheet</div>
                  <div className="text-muted small">Sarah Brown</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Teacher Profile */}
        <TeacherProfile />

        {/* Quick Links */}
        <Col xs={12} md={6} lg={4}>
          <Card className="shadow-sm border-0 rounded-4 h-100">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-light d-flex justify-content-center align-items-center rounded-circle" style={{ width: "40px", height: "40px" }}>
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
          <Card className="shadow-sm border-0 rounded-4 h-100">
            <Card.Body>
              <Card.Title className="fw-semibold mb-4">Performance Alerts</Card.Title>
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
          <Card className="shadow-sm border-0 rounded-4 d-flex align-items-center justify-content-center text-center p-4 h-100">
            <FaExclamationTriangle size={36} className="text-danger mb-2" />
            <div>
              <h6 className="fw-bold mb-0">2 areas need attention</h6>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Teacher;
