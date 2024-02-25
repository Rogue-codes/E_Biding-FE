import { motion } from "framer-motion";
import { Icons } from "../../icons";
import { dropIn } from "../../utils/framerMotionVariants";
import { IClient } from "../../interfaces";
import { useMutation } from "react-query";
import * as apiClient from "../../services/Api";
import { enqueueSnackbar } from "notistack";
import Loading from "react-loading";
import { useEffect } from "react";

interface IApproveModal {
  closeModal: () => void;
  client: IClient;
}
export default function ApprovalModal({ closeModal, client }: IApproveModal) {
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    "approveClient", // Query key, typically a string
    (id: string) => apiClient.approveClient(id), // Mutation function
    {
      onSuccess: (data) => {
        enqueueSnackbar(data.message, {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      },
      onError: (error: any) => {
        console.error("An error occurred:", error);
        enqueueSnackbar(error.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      },
    }
  );

  if(isSuccess){
    closeModal()
  }


  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-[42.5vw] bg-white rounded-xl py-12 px-5 relative"
    >
      <Icons.close
        className="absolute right-4 top-4 hover:scale-105 transition-all cursor-pointer"
        onClick={closeModal}
      />

      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <Loading type="spin" color="#3E4095" className="w-16 h-16 mx-auto" />
        </div>
      ) : (
        <>
          <p className="text-NGA/Darkest text-xl  font-bold text-center pb-4">
            APPROVE USER : {client?.name}
          </p>
          <hr />
          <div className="w-full flex justify-center items-center gap-8 pt-6">
            <button
              className="text-white bg-NGA-Primary py-2 px-12 rounded-[4px] hover:scale-105 transition-all cursor-pointer"
              onClick={() => mutate(client?._id)}
            >
              Confirm
            </button>
            <button
              className="text-white bg-OBS-Red py-2 px-12 rounded-[4px] hover:scale-105 transition-all cursor-pointer"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
