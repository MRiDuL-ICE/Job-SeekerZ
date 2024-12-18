import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-seekerz-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptor", error);

        if (error.status === 401 || error.status === 403) {
          userLogout()
            .then((res) => {
              Swal.fire({
                title: "Unauthorized access!",
                text: "You have been logged out!",
                icon: "error",
              });
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
