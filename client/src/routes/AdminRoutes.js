import React from 'react';
import { Route } from 'react-router-dom';

import Admin from '../component/Admin/Admin';
import AdHome from '../component/Admin/AdHome';
import AdminAbout from '../component/Admin/AdminAbout';
import AdminGallery from '../component/Admin/AdminGallery';
import AdminContact from '../component/Admin/AdminContact';

const AdminRoutes = () => (
  <>
    <Route exact path="/administrator/login/admin_home" component={Admin} />
    <Route exact path="/administrator/login/home" component={AdHome} />
    <Route exact path="/administrator/login/about" component={AdminAbout} />
    <Route exact path="/administrator/login/gallery" component={AdminGallery} />
    <Route exact path="/administrator/login/contact" component={AdminContact} />
  </>
);

export default AdminRoutes;
