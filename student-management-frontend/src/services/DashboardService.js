import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/studentDashboard/";

class DashboardService{

    getProfile(studentId){
        return axios.get(STUDENT_API_BASE_URL + 'student/' + studentId);
    }

    getMarks(studentId){
        return axios.get(STUDENT_API_BASE_URL + 'studentMarks/' + studentId);
    }

    getAnnouncements(){
        return axios.get(STUDENT_API_BASE_URL + 'announcements');
    }

}

export default new DashboardService()