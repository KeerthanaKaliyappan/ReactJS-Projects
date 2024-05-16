import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import Announcements from './components/Announcements';
import StudentProfile from './components/StudentProfile';
import StudentMarks from './components/StudentMarks';
import ErrorPage from './components/ErrorPage';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<StudentDashboard />}></Route>
            <Route exact path="/login" element={<StudentLogin />}></Route>
            <Route exact path="/student" element={<StudentProfile />}></Route>
            <Route exact path="/studentMarks" element={<StudentMarks />}></Route>
            <Route exact path="/announcements" element={<Announcements />}></Route>
            <Route exact path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
