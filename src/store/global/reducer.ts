import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "global",
  initialState: {
    isSignedIn: false,
  },
  reducers: {
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload
    },
   
  },
})
export const { setIsSignedIn} = slice.actions
export default slice.reducer
