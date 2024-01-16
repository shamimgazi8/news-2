import { apiSlice } from "@/appstore/api-slice";

export const tagApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllTag: build.query({
      query: ({ queryString, isTrash }) =>
        `/tags?status=ACTIVE&status=INACTIVE&isTrash=${isTrash}`,
      providesTags: ["Tag"],
    }),

    createTag: build.mutation({
      query: (data) => ({
        url: "/tags",
        method: "POST",
        body: data,
      }),
    }),
    restoreTags: build.mutation({
      query: ({ id }) => {
        return {
          url: `/tags/${id}/restore`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["Tag"],
    }),

    getSingleTag: build.query({
      query: ({ id }) => `/tags/${id}`,
      transformResponse: (response: any) => {
        const metaKeyArray = response?.metaKeyword
          ? response?.metaKeyword.split(",")
          : [];

        const keywordArr = response?.searchKeyword
          ? response?.searchKeyword.split(",")
          : [];

        const data = {
          id: response.id,
          title: response.title,
          title_en:
            response.title_en == "null" || null ? "" : response.title_en,
          slug: response.slug,
          searchKeyword: keywordArr,
          metaTitle:
            response.metaTitle == "null" || null ? "" : response.metaTitle,
          metaDescription:
            response.metaDescription == "null" || null
              ? ""
              : response.metaDescription,
          metaKeyword: metaKeyArray,
          status: response.status,
          sub_title:
            response.sub_title == "null" || null ? "" : response.sub_title,
          heading: response.heading == "null" || null ? "" : response.heading,
          content: response.content == "null" || null ? "" : response.content,
          featuredImage: response.feature_img,
          feature_alt:
            response.feature_alt == "null" || null ? "" : response.feature_alt,
        };

        return data;
      },
    }),

    updateTag: build.mutation({
      query: ({ data, id }) => ({
        url: `/tags/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tag"],
    }),

    deleteTag: build.mutation({
      query: ({ id, isTrash }) => ({
        url: isTrash ? `/tags/${id}/force` : `/tags/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tag"],
    }),
    tagBulkDelete: build.mutation({
      query: (data) => ({
        url: "/tags/bulk-destroy",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tag"],
    }),
  }),
});

export const {
  useRestoreTagsMutation,
  useGetAllTagQuery,
  useCreateTagMutation,
  useGetSingleTagQuery,
  useUpdateTagMutation,
  useDeleteTagMutation,
  useTagBulkDeleteMutation,
} = tagApi;
