import http from "../../../interceptor";

export const getCourseCommentsAPI = async (courseId: string) => {
  try {
    const response = await http.get(`/Course/GetCourseCommnets/${courseId}`);

    return response;
  } catch (error) {
    return false;
  }
};
