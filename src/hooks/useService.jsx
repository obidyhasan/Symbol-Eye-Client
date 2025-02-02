import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useService = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: services = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/services");
      return res.data;
    },
  });

  return { services, isPending, refetch };
};

export default useService;
