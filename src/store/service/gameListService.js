import { createApi } from "@reduxjs/toolkit/query/react"
import { getDynamicBaseQuery } from "./getDynamicBaseQuery"
export const gameListApi = createApi({
  reducerPath: "gameListApi",
  baseQuery: getDynamicBaseQuery(),
  endpoints: (builder) => ({
    LeftMenuData: builder.query({
      query() {
        return {
          url: "/enduser/left-menu-data-open",
          method: "POST",
          // body: data,
        }
      },
    }),
    DroupUserBalance: builder.query({
      query(data) {
        return {
          url: "/matchBox/matchBox-userBalance",
          method: "POST",
          body: data,
        }
      },
    }),
    ActiveUserList: builder.mutation({
      query(data) {
        return {
          url: "/user/child-list-active-user",
          method: "POST",
          body: data,
        }
      },
    }),
    InActiveUserList: builder.mutation({
      query(data) {
        return {
          url: "/user/child-list",
          method: "POST",
          body: data,
        }
      },
    }),
    DWC: builder.mutation({
      query(data) {
        return {
          url: "/dwc/depositwithdrawdata",
          method: "POST",
          body: data,
        }
      },
    }),
    AccountStatement: builder.mutation({
      query(data) {
        return {
          url: "/report/account-statement",
          method: "POST",
          body: data,
        }
      },
    }),
    currBet: builder.mutation({
      query(data) {
        return {
          url: "/report/current-bets",
          method: "POST",
          body: data,
        }
      },
    }),
    ProfitLoss: builder.mutation({
      query(data) {
        return {
          url: "/report/profit-loss-match-wise",
          method: "POST",
          body: data,
        }
      },
    }),
    oddsPnl: builder.query({
      query(data) {
        return {
          url: "/bets/odds-pnl",
          method: "POST",
          body: data,
        }
      },
    }),
    fancyPnl: builder.query({
      query(data) {
        return {
          url: "/bets/fancy-pnl",
          method: "POST",
          body: data,
        }
      },
    }),
    betList: builder.query({
      query(data) {
        return {
          url: "/bets/bet-list-by-matchid",
          method: "POST",
          body: data,
        }
      },
    }),
    betSearch: builder.mutation({
      query(data) {
        return {
          url: "/bets/search",
          method: "POST",
          body: data,
        }
      },
    }),
    changePassword: builder.mutation({
      query(data) {
        return {
          url: "/user/change-password-self",
          method: "POST",
          body: data,
        }
      },
    }),
    DepositeChips: builder.mutation({
      query(body) {
        return {
          url: "/dwc/deposit-chips-pnl",
          method: "POST",
          body
        }
      },
    }),
    withdrawChips: builder.mutation({
      query(body) {
        return {
          url: "/dwc/withdraw-chips-pnl",
          method: "POST",
          body
        }
      },
    }),
    creaditLimit: builder.mutation({
      query(body) {
        return {
          url: "/matchBox/matchBox_credit-Exposure-amount",
          method: "POST",
          body
        }
      },
    }),
    updateLimit: builder.mutation({
      query(body) {
        return {
          url: "/matchBox/update-limit",
          method: "POST",
          body
        }
      },
    }),
    childChangePassword: builder.mutation({
      query(body) {
        return {
          url: "/user/change-password-child",
          method: "POST",
          body
        }
      },
    }),
  }),
})

export const {
  useLeftMenuDataQuery,
  useDroupUserBalanceQuery,
  useActiveUserListMutation,
  useInActiveUserListMutation,
  useDWCMutation,
  useAccountStatementMutation,
  useCurrBetMutation,
  useProfitLossMutation,
  useOddsPnlQuery,
  useFancyPnlQuery,
  useBetListQuery,
  useBetSearchMutation,
  useChangePasswordMutation,
  useDepositeChipsMutation,
  useWithdrawChipsMutation,
  useCreaditLimitMutation,
  useUpdateLimitMutation,
  useChildChangePasswordMutation
} = gameListApi
