import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/studentController/";

class StudentService{

    loginStudent(email){
        return axios.get(STUDENT_API_BASE_URL + 'login/' + email);
    }

}

export default new StudentService()