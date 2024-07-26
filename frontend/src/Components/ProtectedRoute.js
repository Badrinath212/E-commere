import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';

const ProtectedRoute = ({element:Component}) => {
    const isAuthenticated=useSelector(store=>store.config.userInfo.isAuthenticated);
  return isAuthenticated ? Component : <Navigate to={'/'}/>
}

export default ProtectedRoute;