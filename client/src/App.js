import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css'; // Tailwind CSS is already integrated here

import Home from './component/Home/Home';
import About from './component/About/About';
import Gallery from './component/Gallery/Gallery';
import Contact from './component/Contact/Contact';

import PatientLogin from './component/Login/PatientLogin';
import DoctorLogin from './component/Login/DoctorLogin';
import EmployeeLogin from './component/Login/EmployeeLogin';
import AdministratorLogin from './component/Login/AdministratorLogin';

import PatientReg from './component/PatientReg/PatientReg';

import PatientRoutes from './routes/PatientRoutes';
import DoctorRoutes from './routes/DoctorRoutes';
import EmployeeRoutes from './routes/EmployeeRoutes';
import AdminRoutes from './routes/AdminRoutes';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <div className="container mx-auto p-4">
          {/* Main Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/regPatient" component={PatientReg} />

          {/* Login Routes */}
          <Route exact path="/patient/login" component={PatientLogin} />
          <Route exact path="/doctors/login" component={DoctorLogin} />
          <Route exact path="/employee/login" component={EmployeeLogin} />
          <Route exact path="/administrator/login" component={AdministratorLogin} />

          {/* Nested Routes */}
          <PatientRoutes />
          <DoctorRoutes />
          <EmployeeRoutes />
          <AdminRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
