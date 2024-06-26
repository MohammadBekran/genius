import http from "../../interceptor";

import { NewsInterface } from "../../../../types/news";

export const newsAPI = async (
  pageNumber: number | undefined,
  rowsOfPage: number | undefined,
  sortingCol: string | undefined,
  sortType: string | undefined,
  query: string | undefined,
  newsCategoryId: number | undefined
) => {
  try {
    const response = await http.get<{ news: NewsInterface[] }>("/News", {
      params: {
        pageNumber: pageNumber ? pageNumber : undefined,
        rowsOfPage: rowsOfPage ? rowsOfPage : undefined,
        sortingCol: sortingCol ? sortingCol : undefined,
        sortType: sortType ? sortType : undefined,
        query: query ? query : undefined,
        newsCategoryId: newsCategoryId ? newsCategoryId : undefined,
      },
    });

    return response.data;
  } catch (error) {
    return false;
  }
};
