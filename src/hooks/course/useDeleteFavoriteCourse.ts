import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import http from "../../core/services/interceptor";

const useDeleteFavoriteCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-course-favorite"],
    mutationFn: async (courseFavoriteId: string) => {
      await http
        .delete("/Course/DeleteCourseFavorite", {
          data: {
            courseFavoriteId,
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      queryClient.invalidateQueries({
        queryKey: ["course-top"],
      });
      queryClient.invalidateQueries({
        queryKey: ["courseDetails"],
      });
    },
    onError: () => {
      toast.error("مشکلی در حذف دوره از علاقه مندی های شما به وجود آمد !");
    },
  });
};

export { useDeleteFavoriteCourse };
