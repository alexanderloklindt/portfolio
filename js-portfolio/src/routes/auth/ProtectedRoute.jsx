import React from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { getProjectById } from "../../content/projects";
import LoginModal from '../../components/Loginmodal';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const location = useLocation();
  let { id } = useParams();
  let project = getProjectById(Number(id));

  if (!user && project.protected) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // return <Navigate to='/signin' state={{ from: location, showModal: true}} replace />;

  }
  return !user && project.protected ? <LoginModal>{children}</LoginModal> : children;
};

export default ProtectedRoute;