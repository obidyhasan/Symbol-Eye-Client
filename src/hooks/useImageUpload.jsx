import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useImageUpload = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

  const uploadImage = async (imageFile) => {
    const API_KEY = import.meta.env.VITE_IMGBB_API_KEY;
    const formData = new FormData();
    formData.append("image", imageFile);

    setLoading(true);
    try {
      const result = await axiosPublic.post(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (result.data?.success) {
        setImageUrl(result.data.data.display_url);
      } else {
        setError("Image upload failed");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { imageUrl, error, loading, uploadImage };
};

export default useImageUpload;
