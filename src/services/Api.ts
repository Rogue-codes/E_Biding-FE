/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILoginForm } from "../pages/auth/login/Login";
import ApiFetcher from "./ApiFetcher";
import { enqueueSnackbar } from "notistack";

export const login = async (formData: ILoginForm) => {
  try {
    const response = await ApiFetcher.post(`/admin/login`, formData);
    return response.data;
  } catch (error: any) {
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};

export const getSession = async () => {
  try {
    const response = await ApiFetcher.get(`/validate-token`);
    return response.data;
  } catch (error: any) {
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};

export const getAllClient = async (
  searchText: string,
  page?: number,
  onlyApproval?: boolean
) => {
  try {
    const response = await ApiFetcher.get(
      `/admin/clients/all?search=${searchText}&page=${page}${
        onlyApproval && `&status=pending`
      }`
    );
    return response.data;
  } catch (error: any) {
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};

export const getClientById = async (id: string) => {
  try {
    const response = await ApiFetcher.get(`/admin/client/${id}`);
    return response.data;
  } catch (error: any) {
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};

export const approveClient = async (id: string) => {
  try {
    const response = await ApiFetcher.patch(`/admin/client/${id}/approve`);
    return response.data;
  } catch (error: any) {
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};

export const rejectClient = async (id: string) => {
  try {
    const response = await ApiFetcher.delete(`/admin/client/${id}/reject`);
    return response.data;
  } catch (error: any) {
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};

export const getAllAuctions = async (
  searchText: string,
  page?: number,
) => {
  try {
    const response = await ApiFetcher.get(
      `/auctions/all?search=${searchText}&page=${page}`
    );
    return response.data;
  } catch (error: any) {
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};

export const getAuctionById = async (id: string) => {
  try {
    const response = await ApiFetcher.get(`/auction/${id}`);
    return response.data;
  } catch (error: any) {
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};