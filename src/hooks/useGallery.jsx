import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGallery = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: gallery = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/gallery");
      return res.data;
    },
  });

  return { gallery, isPending, refetch };
};

export default useGallery;
