import React from 'react';
import { Route } from 'react-router-dom';

import PatientHome from '../component/Patient/PatientHome';
import PatHome from '../component/Patient/PatHome';
import PatientAbout from '../component/Patient/PatientAbout';
import PatientGallery from '../component/Patient/PatientGallery';
import PatientContact from '../component/Patient/PatientContact';

const PatientRoutes = () => (
  <>
    <Route exact path="/patient/login/patient_home" component={PatientHome} />
    <Route exact path="/patient/login/home" component={PatHome} />
    <Route exact path="/patient/login/about" component={PatientAbout} />
    <Route exact path="/patient/login/gallery" component={PatientGallery} />
    <Route exact path="/patient/login/contact" component={PatientContact} />
  </>
);

export default PatientRoutes;
