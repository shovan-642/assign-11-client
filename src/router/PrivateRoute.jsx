import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user}=useContext(AuthContext)

    if(user){
        return children
    }

    return <Navigate to={"/auth/login"}></Navigate>

};

export default PrivateRoute;