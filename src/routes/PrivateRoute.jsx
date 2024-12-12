import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation() 

    if(loading){
        return <div className='w-full flex justify-center items-center mx-auto my-40'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(user) {
        return children
    }

    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;