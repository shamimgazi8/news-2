import { apiSlice } from "@/appstore/api-slice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: ({ queryString, isTrash }) =>
        `/categories?status=ACTIVE&status=INACTIVE&isTrash=${isTrash}`,
      providesTags: ["Category"],
    }),
    createCategory: build.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    singleCategory: build.query({
      query: ({ id }) => `/categories/${id}`,
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
    updatecategory: build.mutation({
      query: ({ data, id }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: build.mutation({
      query: ({ id, isTrash }) => ({
        url: isTrash ? `/categories/${id}/force` : `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    restoreCategory: build.mutation({
      query: ({ id }) => {
        return {
          url: `/categories/${id}/restore`,
          method: "PUT",
        };
      },
      invalidatesTags: ["Category"],
    }),
    getCategoryDropdowns: build.query({
      query: ({ keyword = "" }) =>
        `/public/categories/dropdowns?keyword=${keyword}`,
    }),
    categoryBulkDelete: build.mutation({
      query: ({ ids }) => ({
        url: "/categories/bulk-destroy",
        method: "POST",
        body: { ids: ids },
      }),
      invalidatesTags: ["Category"],
    }),
    moveNews: build.mutation({
      query: (data) => ({
        url: "/news/change-category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category", "News"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useSingleCategoryQuery,
  useUpdatecategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryDropdownsQuery,
  useCategoryBulkDeleteMutation,
  useMoveNewsMutation,
  useRestoreCategoryMutation,
} = categoryApi;
