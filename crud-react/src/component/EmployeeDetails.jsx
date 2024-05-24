import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link, useParams } from 'react-router-dom'

export const EmployeeDetails = () => {

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    phone: 0
  });
  const [isSaved, setSaved] = useState(false);
  const { id } = useParams();
  const [update, setUpdate] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [departmentError, setDepartmentError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isUpdateDisabled, setUpdateDisabled] = useState(false);
  const [isAddDisabled, setAddDisabled] = useState(false);

  useEffect(() => {
    if (id !== undefined) {
      getEmployeeById();
    }
    else {
      setUpdate(true);
    }
  }, [])

  /**
   * Add new employee
   * @param {*} e 
   */
  const addEmployee = (e) => {
    e.preventDefault();

    setAddDisabled(emptyField());
    EmployeeService.addEmployee(employee)
      .then(data => {
        if (data.status === 200) {
          console.log(data.data);
          setSaved(true);
          setTimeout(() => {
            setSaved(false);
          }, 2000);
          resetForm();
        }
      })
      .catch(error => console.log(error));
  }

  const resetForm = () => {
    setEmployee({
      name: "",
      email: "",
      department: "",
      phone: ""
    });
  }

  const handleChange = (e) => {
    if (e.target.name === "name" &&
      e.target.value !== "" &&
      (e.target.value.length < 4 ||
        e.target.value.length > 15)) {
      setNameError(true);
    }
    else {
      setNameError(false);
    }

    if (e.target.name === "department" &&
      e.target.value !== "" &&
      (e.target.value.length < 2 ||
        e.target.value.length > 8)) {
      setDepartmentError(true);
    }
    else {
      setDepartmentError(false);
    }

    if (e.target.name === "phone" &&
      e.target.value !== "" &&
      (e.target.value.length < 10 ||
        e.target.value.length > 10)) {
      setPhoneError(true);
    }
    else {
      setPhoneError(false);
    }

    if (e.target.name === "email" &&
      e.target.value !== "" &&
      (e.target.value.length < 6 ||
        e.target.value.length > 25)) {
      setEmailError(true);
    }
    else {
      setEmailError(false);
    }

    setUpdateDisabled(emptyField());
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  }

  /**
   * Update employee details
   */
  const updateEmployeeById = (e) => {
    e.preventDefault();

    setUpdateDisabled(emptyField());
    EmployeeService.updateEmployeeById(id, employee)
      .then(data => {
        if (data.status === 200) {
          console.log(data.data);
        }
      })
      .catch(error => {
        console.log(error);
      })

  }

  const getEmployeeById = () => {
    EmployeeService.getEmployeeById(id)
      .then(data => {
        if (data.status === 200) {
          console.log(data);
          setEmployee(data.data);
        }
      })
      .catch(error => console.log(error));
  }

  const emptyField = () => {
    if (employee.name !== "" &&
      employee.email !== "" &&
      employee.department !== "" &&
      employee.phone.length > 1
    ) {
      return true;
    }
    else {
      return false;
    }
  }

  return (
    <>
      <h1>Employee Details</h1>
      <div className="p-2" align="left">
        <Link to="/" className="btn btn-danger">Back to home</Link>
      </div>
      {isSaved &&
        <div className="alert alert-success">Saved successfully!</div>}
      {nameError &&
        <div className="alert alert-success">Invalid name</div>}
      {emailError &&
        <div className="alert alert-success">Invalid email!</div>}
      {departmentError &&
        <div className="alert alert-success">Invalid department</div>}
      {phoneError &&
        <div className="alert alert-success">Invalid phone number</div>}
      <div className="card p-3">
        <form>
          <div className="form-group">
            <label className="col-sm-2 col-form-label">Name:</label>
            <input name="name"
              id="name"
              placeholder="Name"
              value={employee.name}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label">Email:</label>
            <input name="email"
              id="email"
              placeholder="Email"
              value={employee.email}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label">Department:</label>
            <input name="department"
              id="department"
              placeholder="Department"
              value={employee.department}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="col-sm-2 col-form-label">Phone:</label>
            <input name="phone"
              id="phone"
              type="number"
              value={employee.phone}
              placeholder="Phone"
              onChange={handleChange} />
          </div>
          <div className="form-group">
            {update ?
              <button type="submit"
                className="btn btn-success"
                disabled={isAddDisabled}
                onClick={(e) => addEmployee(e)}>Add</button>
              :
              <button type="submit"
                className="btn btn-success"
                disabled={isUpdateDisabled}
                onClick={(e) => updateEmployeeById(e)}>Update</button>
            }
          </div>
        </form>
      </div>
    </>
  )
}
