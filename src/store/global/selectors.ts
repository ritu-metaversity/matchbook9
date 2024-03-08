import { createSelector } from "@reduxjs/toolkit"

export const selectors = {
  isSignedIn: createSelector(
    (state: any) => state.global.isSignedIn,
    (state) => state,
  ),
}
