import { apiSlice } from "@/appstore/api-slice";

const baseURL = "/public/advisors";

export const advisorAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    advisorsPublicProfile: build.query({
      query: ({ rcicNumber }) => {
        return `${baseURL}/${rcicNumber}`;
      },
      keepUnusedDataFor: 10,
    }),
    getAllAdvisor: build.query({
      query: ({ advisorQueryString }) =>
        `/public/advisors${advisorQueryString}`,

      // providesTags: ["advisor"],
    }),
  }),
});

export const { useAdvisorsPublicProfileQuery, useGetAllAdvisorQuery } =
  advisorAPI;
