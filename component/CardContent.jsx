import React from "react";
import { ProgressBar } from "react-bootstrap";
import { FaBookOpen } from "react-icons/fa";
import { TbGeometry } from "react-icons/tb";
import { Card } from 'react-bootstrap'

function CardContent() {
  return (
    <div>
      <Card className="dashboard-card myCard">
        <Card.Body>
          <Card.Title className="section-title myTitle">
            Today's Schedule
          </Card.Title>
          <div className="schedule-item">
            <div className="icon-circle bg-primary-subtle">
              <TbGeometry className="text-primary" />
            </div>
            <div>
              <div className="item-title myText">Geometry</div>
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
    </div>
  );
}

export default CardContent;
