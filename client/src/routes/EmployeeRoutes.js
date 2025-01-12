import React from 'react';
import { Route } from 'react-router-dom';

import Employee from '../component/Employee/Employee';
import EmpHome from '../component/Employee/EmpHome';
import EmpAbout from '../component/Employee/EmpAbout';
import EmpGallery from '../component/Employee/EmpGallery';
import EmpContact from '../component/Employee/EmpContact';

const EmployeeRoutes = () => (
  <>
    <Route exact path="/employee/login/employee_home" component={Employee} />
    <Route exact path="/employee/login/home" component={EmpHome} />
    <Route exact path="/employee/login/about" component={EmpAbout} />
    <Route exact path="/employee/login/gallery" component={EmpGallery} />
    <Route exact path="/employee/login/contact" component={EmpContact} />
  </>
);

export default EmployeeRoutes;
