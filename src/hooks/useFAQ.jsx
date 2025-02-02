import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFAQ = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: faqs = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/faq");
      return res.data;
    },
  });

  return { faqs, isPending, refetch };
};

export default useFAQ;
