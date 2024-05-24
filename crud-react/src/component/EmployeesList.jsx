import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export const EmployeesList = () => {

    const [employees, setEmployees] = useState([]);
    const [isDeleted, setDeleted] = useState(false);
    const [deparment, setDepartment] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployees();
    }, [isDeleted, error])

    /**
     *  Fetches all employee
     */
    const getEmployees = () => {
        EmployeeService.getEmployees()
            .then(data => {
                if (data.status === 200) {
                    console.log(data.data);
                    setEmployees(data.data);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const updateEmployeeById = (id) => {
        navigate("/employees/" + id);
    }

    /**
     * Deletes employee based on id
     * @param {*} id 
     */
    const deleteEmployeeById = (id) => {
        EmployeeService.deleteEmployeeById(id)
            .then(data => {
                if (data.status === 200) {
                    setDeleted(true);
                    setTimeout(() => {
                        setDeleted(false);
                    }, 500);
                    console.log(data.data);
                }
            })
            .catch(error => console.log(error));
    }

    /**
     * Fetches employees by department
     * 
     */
    const searchByDepartment = (e) => {
        e.preventDefault();
        EmployeeService.getEmployeeByDepartment(deparment)
            .then(data => {
                if (data.status === 200) {
                    if (data.data.length === 0) {
                        setError(true);
                        setTimeout(() => {
                            setError(false);
                        }, 2000)
                    }
                    console.log(data.data);
                    setEmployees(data.data);
                    setDepartment("");
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div id="search">
                {error && <div className="alert alert-warning">No search result</div>}
                <br />
                <input className="p-1"
                    type="search"
                    placeholder="Department"
                    aria-label="Search"
                    formNoValidate
                    value={deparment}
                    onChange={(e) => setDepartment(e.target.value)} />&nbsp;
                <button className="btn btn-outline-success"
                        id="searchButton"
                        type="submit" 
                        onClick={searchByDepartment}>Search</button>
                <br />
                <br />
            </div>
            <table align="center" className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>{employee.phone}</td>
                            <td><button type="button" className="btn btn-primary" onClick={() => { updateEmployeeById(employee.id) }}>Update</button> &nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => { deleteEmployeeById(employee.id) }}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
