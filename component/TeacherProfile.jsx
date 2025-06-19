import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { BsPersonCircle } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'

function TeacherProfile() {
  return (
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
  )
}

export default TeacherProfile