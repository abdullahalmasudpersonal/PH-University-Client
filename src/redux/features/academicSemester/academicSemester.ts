import { baseApi } from "../../api/baseApi";

const academicDemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (userInfo) => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicDemesterApi;
