import React from 'react'
import { Link } from 'react-router-dom'
import { EmployeesList } from './EmployeesList'

export const Home = () => {

  return (
    <>
      <br />
      <h2 align="center" className="p-1">Home page</h2>
      <div className="p-3">
        <div id="button" align="right" className="p-3">
          <Link to="/employees" className="btn btn-outline-success">Add Employee</Link>
        </div>
        <div className="card">
          <EmployeesList />
        </div>
      </div>
    </>
  )
}
