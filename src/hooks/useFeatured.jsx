import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useFeatured = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: featuredProduct = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/featured/products");
      return res.data;
    },
  });

  return { featuredProduct, isPending, refetch };
};

export default useFeatured;
