/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { dropIn } from "../../utils/framerMotionVariants";
import { Icons } from "../../icons";
import * as apiClient from "../../services/Api";
import { enqueueSnackbar } from "notistack";
import { useQuery } from "react-query";
import { IClient } from "../../interfaces";

interface IViewClientModal {
  id: string;
  closeModal: () => void;
}
export default function ViewClientModal({ id, closeModal }: IViewClientModal) {
  const { data: clientData, isLoading } = useQuery(
    ["clientByIdData", id], // Query key, typically an array of parameters
    () => apiClient.getClientById(id), // Query function
    {
      onSuccess: (data) => {
        enqueueSnackbar(data.message, {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      },
      onError: (error: any) => {
        enqueueSnackbar(error.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      },
    }
  );

  const BASE_URL = import.meta.env.VITE_ViEW_PDF_URL + "";

  const handleFileView = () => {
    window.open(BASE_URL + "/" + clientData?.data?.cacDoc, "_blank");
  };

  const client: IClient = clientData?.data;

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-[42.5vw] bg-white rounded-xl py-16 px-8 relative"
    >
      <Icons.close
        className="absolute right-4 w-4 h-4 hover:scale-105 transition-all cursor-pointer top-4"
        onClick={closeModal}
      />
      <div className="w-[10.25rem] flex justify-center items-center h-[10.25rem] bg-NGA/Light rounded-full mx-auto ">
        <Icons.client />
      </div>

      <div className="mt-5">
        <div>
          <p className="text-sm leading-6 text-NGA/Darkest">Full Name</p>
          <p className="text-[18px] leading-6 text-NGA/Darkest">
            {isLoading ? "loading.." : client.name}
          </p>
        </div>

        <div className="my-2">
          <p className="text-sm left-6 text-NGA/Darkest">Company Name</p>
          <p className="text-[18px] leading-6 text-NGA/Darkest">
            {isLoading ? "loading..." : client.companyName}
          </p>
        </div>

        <div>
          <p className="text-sm left-6 text-NGA/Darkest">Company Address</p>
          <p className="text-[18px] leading-6 text-NGA/Darkest">
            {isLoading ? "loading..." : client.companyAddress}
          </p>
        </div>

        <div className="my-2">
          <p className="text-sm left-6 text-NGA/Darkest">Email Address</p>
          <p className="text-[18px] leading-6 text-NGA/Darkest">
            {isLoading ? "loading..." : client.email}
          </p>
        </div>

        <div className="w-full flex justify-start gap-24 items-center">
          <div>
            <p className="text-sm left-6 text-NGA/Darkest">Phone Number</p>
            <p className="text-[18px] leading-6 text-NGA/Darkest">
              {isLoading ? "loading..." : client.phoneNumber}
            </p>
          </div>

          <div className="my-2">
            <p className="text-sm left-6 text-NGA/Darkest">
              Alternate Phone Number
            </p>
            <p className="text-[18px] leading-6 text-NGA/Darkest">
              {isLoading ? "loading..." : client.alternatePhoneNumber}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-start gap-24 items-center">
          <div>
            <p className="text-sm left-6 text-NGA/Darkest">RC Number</p>
            <p className="text-[18px] leading-6 text-NGA/Darkest">
              {isLoading ? "loading..." : `RC: ${client.RcNumber}`}
            </p>
          </div>

          <div>
            <p className="text-sm left-6 text-NGA/Darkest">Postal Code</p>
            <p className="text-[18px] leading-6 text-NGA/Darkest">
              {isLoading ? "loading..." : client.postalCode}
            </p>
          </div>
        </div>

        <div className="w-full py-2 px-4 border border-NGA/Light mt-4 flex justify-between items-center rounded-lg">
          <p className="text-black leading-6 text-sm">
            {isLoading ? "loading..." : client.cacDoc}
          </p>
          <button
            className="px-3 py-1 bg-NGA-Primary border border-NGA-Primary text-white rounded-[4px] text-xs cursor-pointer hover:scale-105 transition-all"
            onClick={handleFileView}
          >
            Download
          </button>
        </div>
      </div>
    </motion.div>
  );
}
