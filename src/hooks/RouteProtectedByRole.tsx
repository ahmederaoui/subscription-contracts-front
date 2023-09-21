import {useContext, useEffect} from 'react'
import {Navigate, Outlet, useLocation} from 'react-router-dom'
import useAuth from "./useAuth.ts";

function RouteProtectedByRole ({AllowRole}) {
    const {auth}= useAuth();
    const location = useLocation();
    useEffect(()=>{
    },[])

    return (

        auth?.role===AllowRole
            ? <Outlet />
            : auth?.isAuthenticated //changed from user to accessToken to persist login after refresh
                ? <Navigate to="/login" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );

}

export default RouteProtectedByRole;