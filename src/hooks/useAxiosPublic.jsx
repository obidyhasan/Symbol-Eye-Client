import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://symbol-eye-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
