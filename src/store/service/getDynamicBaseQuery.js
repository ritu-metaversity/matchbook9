import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { toast } from "react-toastify";



export const getDynamicBaseQuery = (baseUrl) => {
  return async (args, WebApi, extraOptions) => {
    const rawBaseQuery = fetchBaseQuery({
      baseUrl: baseUrl || "https://adminapi.247idhub.com/admin-new-apis",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const result = await rawBaseQuery(args, WebApi, {});

    handleErrors(result?.error, extraOptions);
    handleData(result?.data, extraOptions);

    return result;
  };
};

const handleErrors = (error, extraOptions) => {
  if (error) {
    const { status } = error;
    if (status === 401) {
      handleUnauthorized();
    } else if (["hasError", "all"].includes(extraOptions?.toastType || "")) {
      toast.error((error.data)?.message);
    }
  }
};

const handleData = (data, extraOptions) => {
  if (data) {
    const raw = data ;
    if (extraOptions?.toastType) {
      if (
        raw.status === false &&
        ["hasError", "all"].includes(extraOptions?.toastType) &&
        raw.message
      ) {
        toast.error(raw.message);
      }
      if (
        ["all"].includes(extraOptions?.toastType) &&
        raw.status === true &&
        raw.message
      ) {
        toast.success(raw.message);
      }
    }
  }
};

const handleUnauthorized = () => {
  localStorage.clear();
  window.location.replace("/login");
};
