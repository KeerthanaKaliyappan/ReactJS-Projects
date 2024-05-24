import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './component/Home';
import { ErrorPage } from './component/ErrorPage';
import { EmployeeDetails } from './component/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeDetails />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
