import { useQuery } from "@tanstack/react-query";

import http from "../../core/services/interceptor";

import { NewsInterface } from "../../types/news";

interface newsAPIInterface {
  detailsNewsDto: NewsInterface;
}

const useNewsById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["newsDetails", id],
    queryFn: async () =>
      await http.get<newsAPIInterface>(`/News/${id}`).then((res) => res.data),
  });
};

export { useNewsById };
