import React from 'react';
import { Route } from 'react-router-dom';

import Doctor from '../component/Doctor/Doctor';
import DocHome from '../component/Doctor/DocHome';
import DocAbout from '../component/Doctor/DocAbout';
import DocGallery from '../component/Doctor/DocGallery';
import DocContact from '../component/Doctor/DocContact';

const DoctorRoutes = () => (
  <>
    <Route exact path="/doctors/login/doctor_home" component={Doctor} />
    <Route exact path="/doctors/login/home" component={DocHome} />
    <Route exact path="/doctors/login/about" component={DocAbout} />
    <Route exact path="/doctors/login/gallery" component={DocGallery} />
    <Route exact path="/doctors/login/contact" component={DocContact} />
  </>
);

export default DoctorRoutes;
