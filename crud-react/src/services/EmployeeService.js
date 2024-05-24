import axios from 'axios'

const API_BASE_URL = "http://localhost:8080/api/employees";

/**
 * Note: Upon using string literal, 
 * no need to pass string literal param separately
 * 
 * Eg: get(URL+'/${id}', id) // Results in 415 error
 * 
 */
class EmployeeService {
  getEmployees() {
    return axios.get(API_BASE_URL);
  }

  getEmployeeById(id) {
    return axios.get(API_BASE_URL + `/${id}`);
  }

  getEmployeeByDepartment(department) {
    return axios.get(API_BASE_URL + `?department=${department}`);
  }

  addEmployee(employee) {
    return axios.post(API_BASE_URL, employee);
  }

  updateEmployeeById(id, employee) {
    return axios.put(API_BASE_URL + `/${id}`, employee);
  }

  deleteEmployeeById(id) {
    return axios.delete(API_BASE_URL + `/${id}`);
  }

}

export default new EmployeeService()
