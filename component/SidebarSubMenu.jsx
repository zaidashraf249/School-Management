import React from 'react'
import { Collapse } from 'react-bootstrap'

function SubMenu() {
  return (
   <div className="ms-4 mt-1">
             <p className="mb-1 text-secondary" style={{ cursor: "pointer" }}>
               Overview
             </p>
             <p className="mb-1 text-secondary" style={{ cursor: "pointer" }}>
               Reports
             </p>
           </div>
  )
}

export default SubMenu