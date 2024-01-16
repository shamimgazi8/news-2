import { apiSlice } from "../api-slice";

export const postsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllPosts: build.query({
      query: ({
        keyword,
        status,
        start_date,
        end_date,
        category,
        source,
        page,
        limit,
        isTrash,
      }) => {
        let url;

        if (start_date != null && end_date != null) {
          url = `/news?keyword=${keyword}&status=${status}&category=${category}&start_date=${start_date}&end_date=${end_date}&source=${source}&page=${page}&limit=${limit}`;
        } else {
          url = `/news/all?status=DRAFT&status=PUBLIC&isTrash=${isTrash}`;
        }
        return {
          url: `${url}`,
        };
      },
      providesTags: ["News"],
    }),

    getSinglePost: build.query({
      query: ({ id }) => `news/${id}`,
      transformResponse: (Response: any) => {
        const categoryidstr = Response.categories
          ? Response.categories[0].id
          : [];
        const metaKeyArray = Response?.metaKeyword
          ? Response?.metaKeyword.split(",")
          : [];

        const data = {
          slug: Response.slug,
          categoryIds: categoryidstr,
          subTitle: Response.subTitle,
          title: Response.subTitle,
          contentType: Response.contentType,
          description: Response.description,
          shortDescription: Response.shortDescription,
          newsType: Response.newsType,
          publishedAt: Response.publishedAt,
          metaTitle: Response.metaTitle,
          metaDescription: Response.metaDescription,
          metaKeyword: metaKeyArray,
        };
        return data;
      },
    }),
    useGetNewsSource: build.query({
      query: () => `/public/news/sources`,
    }),
    addPost: build.mutation({
      query: (data) => ({
        url: "/news",
        method: "POST",
        body: data,
      }),
    }),
    updatePost: build.mutation({
      query: ({ id, data }) => ({
        url: `/news/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["News"],
    }),
    deletePost: build.mutation({
      query: ({ id, isTrash }) => ({
        url: isTrash ? `/news/${id}/force` : `/news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),
    restoreNews: build.mutation({
      query: ({ id }) => {
        return {
          url: `/news/${id}/restore`,
          method: "PUT",
        };
      },
      invalidatesTags: ["News"],
    }),
    getNewsSource: build.query({
      query: () => `/public/news/sources`,
    }),
    postBulkDelete: build.mutation({
      query: (data) => ({
        url: "/news/bulk-destroy",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["News"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetSinglePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetNewsSourceQuery,
  usePostBulkDeleteMutation,
  useUseGetNewsSourceQuery,
  useRestoreNewsMutation,
} = postsApi;
