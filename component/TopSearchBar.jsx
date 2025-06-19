import React from 'react'
import { Badge, Button, Form, InputGroup } from 'react-bootstrap'
import { FaBell, FaSearch, FaTh } from 'react-icons/fa'

function TopSearchBar() {
  return (
    <div className="topbar d-flex justify-content-between align-items-center p-4 shadow-sm bg-white ">
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
  )
}

export default TopSearchBar