import { apiSlice } from "@/appstore/api-slice";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_API_URI;

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (data) => ({
        url: `${baseURL}/auth/admin-signin`,
        method: "POST",
        body: data,
        keepUnusedDataFor: 0,
      }),

      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result) {
            Cookies.remove("userToken");
            Cookies.remove("refreshToken");
            Cookies.set("userToken", result.data.accessToken, { secure: true });
            Cookies.set("refreshToken", result.data.refreshToken, {
              secure: true,
            });
          }
          window.location.href = `/admin/categories`;
        } catch (error) {
          //
        }
      },
    }),
    signUp: build.mutation({
      query: (data) => ({
        url: `${baseURL}`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          if (result) {
            window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-otp`;
          }
        } catch (error) {
          //
        }
      },
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: `${baseURL}/change-password`,
        method: "PUT",
        body: data,
      }),
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: `${baseURL}/update-profile`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ProfileData"],
    }),
    profile: build.query({
      query: () => {
        return `${baseURL}/profile`;
      },
      transformResponse: (response: any) => {
        const jsonString =
          response?.socialLink && response?.socialLink !== null
            ? response?.socialLink
            : "[]";
        const socialLinks = jsonString ? JSON.parse(jsonString) : [];
        const facebook =
          socialLinks.find((link: any) => link.media === "Facebook")?.link ||
          "";
        const twitter =
          socialLinks.find((link: any) => link.media === "Twitter")?.link || "";
        const linkedin =
          socialLinks.find((link: any) => link.media === "Linkedin")?.link ||
          "";
        const instagram =
          socialLinks.find((link: any) => link.media === "Instagram")?.link ||
          "";

        delete response?.socialLinks;

        const data = {
          id: response.id,
          namePrefix: response?.namePrefix ?? "",
          linkedin,
          facebook,
          instagram,
          twitter,
          firstName: response?.firstName ?? "",
          aboutMe: response?.aboutMe ?? "",
          email: response?.email ?? "",
          picture: response?.picture ?? "",
          bannerImage: response?.bannerImage ?? "",
          userName: response?.userName ?? "",
          languages: response?.languages ?? "",
          lastName: response?.lastName ?? "",
          cellPhone: response?.cellPhone ?? "",
          country: response?.country ?? "",
          province: response?.province ?? "",
          workPhone: response?.workPhone ?? "",
          gender: response?.gender ?? "",
          expertise: response?.expertise ?? "",
          website: response?.website ?? "",
          licenseIssuingAuthority:
            response?.licenseIssuingAuthority ?? undefined,
          designation: response?.designation ?? undefined,
          rcicNumber: response?.rcicNumber ?? "",
          licenseNumber: response?.licenseNumber ?? "",
          businessName: response?.businessName ?? "",
          businessAddress: response?.businessAddress ?? "",
          businessPhone: response?.businessPhone ?? "",
          businessEmail: response?.businessEmail ?? "",
        };
        return data;
      },
      keepUnusedDataFor: 10,
      providesTags: ["ProfileData"],
    }),
    confirmOtp: build.query({
      query: (queryString) => {
        return `${baseURL}/confirm${queryString}`;
      },
    }),
    logout: build.query({
      query: () => `${baseURL}/logout`,
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          if (result) {
            Cookies.remove("userToken");
            Cookies.remove("refreshToken");
          }
          window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/login`;
        } catch (error) {
          //
        }
      },
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useProfileQuery,
  useLogoutQuery,
  useChangePasswordMutation,
  useConfirmOtpQuery,
  useUpdateProfileMutation,
} = authApi;
