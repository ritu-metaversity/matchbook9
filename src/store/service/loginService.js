import { createApi } from "@reduxjs/toolkit/query/react"
import { getDynamicBaseQuery } from "./getDynamicBaseQuery"
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: getDynamicBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      query(data) {
        return {
          url: "login/auth",
          method: "POST",
          body: data,
        }
      },
    }),
  }),
})

export const {
  useLoginMutation,
} = loginApi
