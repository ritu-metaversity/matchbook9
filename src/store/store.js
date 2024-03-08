import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { loginApi } from "./service/loginService";
import { gameListApi } from "./service/gameListService";
import { betfairApi } from "./service/betfairApiServices";

export const store = configureStore({
   reducer: {
      // [globalApi.reducerPath]: globalApi.reducer, 
      [loginApi.reducerPath]: loginApi.reducer,
      [gameListApi.reducerPath]: gameListApi.reducer,
      [betfairApi.reducerPath]: betfairApi.reducer
    
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loginApi.middleware).concat(gameListApi.middleware).concat(betfairApi.middleware)
        //  .concat(userApi.middleware)
       
});

setupListeners(store.dispatch);
