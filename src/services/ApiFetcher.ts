/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import "../../src/nprogress.css";
import Nprogress from "nprogress";

const BASE_URL = import.meta.env.VITE_APP_API_URL + "";

const ApiFetcher = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
  withCredentials: true,
});

const onRequest = (request: any) => {
  Nprogress.start();
  return request;
};


const onRequestError = (error: any) => {
  Nprogress.done();
  return Promise.reject(error);
};

const onResponse = (response: any) => {
  Nprogress.done();
  return response;
};

const onResponseError = (error: any) => {
  Nprogress.done();
  // handle when the error does nit have a response
  if (!error.response)
    error.response = {
      status: 400,
    };
  return Promise.reject(error);
};

ApiFetcher.interceptors.request.use(onRequest, onRequestError);
ApiFetcher.interceptors.response.use(onResponse, onResponseError);

export default ApiFetcher;