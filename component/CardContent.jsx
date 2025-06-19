import React from "react";
import { Col, ProgressBar, Card } from "react-bootstrap";
import { FaBookOpen } from "react-icons/fa";
import { TbGeometry } from "react-icons/tb";

function CardContent() {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="shadow-sm border-0 rounded-4 h-100">
        <Card.Body>
          <Card.Title className="fw-semibold mb-4">Today's Schedule</Card.Title>

          {/* Geometry Schedule Item */}
          <div className="d-flex align-items-center gap-3 mb-3">
            <div
              className="bg-primary bg-opacity-25 d-flex justify-content-center align-items-center rounded-circle"
              style={{ width: "40px", height: "40px" }}
            >
              <TbGeometry className="text-primary" />
            </div>
            <div>
              <div className="fw-semibold">Geometry</div>
              <div className="text-muted small">10:00 AM</div>
            </div>
          </div>
          <ProgressBar now={30} variant="primary" className="mb-4" />

          {/* Physics Schedule Item */}
          <div className="d-flex align-items-center gap-3 mb-3">
            <div
              className="bg-info bg-opacity-25 d-flex justify-content-center align-items-center rounded-circle"
              style={{ width: "40px", height: "40px" }}
            >
              <FaBookOpen className="text-info" />
            </div>
            <div>
              <div className="fw-semibold">Physics</div>
              <div className="text-muted small">1:00 PM</div>
            </div>
          </div>
          <ProgressBar now={50} variant="info" />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardContent;
