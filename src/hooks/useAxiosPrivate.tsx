import useAuth from "./useAuth.ts";
import {useEffect} from "react";
import {axiosPrivate} from "../api/Axios.ts";
import {useNavigate} from "react-router-dom";

const useAxiosPrivate = () => {
    const { auth,setAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                if (error?.response?.status === 401) {
                    setAuth({...auth,
                        isAuthenticated : false,
                        username :null,
                        role : null,
                        token : null})
                    navigate("/login")
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth])

    return axiosPrivate;
}

export default useAxiosPrivate;