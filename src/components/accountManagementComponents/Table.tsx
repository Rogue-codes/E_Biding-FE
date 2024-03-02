import Loading from "react-loading";
import { IClient, IGetAllClientData } from "../../interfaces";
import { useState } from "react";
import Backdrop from "../modal/Backdrop";
import ViewClientModal from "../modal/ViewClientModal";
import ApprovalModal from "../modal/ApprovalModal";
import RejectionModal from "../modal/RejectionModal";

interface ITable {
  clientData: IGetAllClientData;
  isLoading: boolean;
}
export default function Table({ clientData, isLoading }: ITable) {
  const [showBackDrop, setShowBackDrop] = useState<boolean>(false);
  const [client, setClient] = useState<IClient | null>();
  const [showViewModal, setShowViewModal] = useState<boolean>(false);
  const [showApprovalModal, setShowApprovalModal] = useState<boolean>(false);
  const [showRejectionModal, setShowRejectionModal] = useState<boolean>(false);

  const showModal = (client: IClient, clickedButton: string) => {
    setShowBackDrop(true);
    switch (clickedButton) {
      case "view":
        setShowViewModal(true);
        setShowApprovalModal(false);
        setShowRejectionModal(false);
        break;
      case "approve":
        setShowViewModal(false);
        setShowApprovalModal(true);
        setShowRejectionModal(false);
        break;
      default:
        setShowViewModal(false);
        setShowApprovalModal(false);
        setShowRejectionModal(true);
        break;
    }
    setClient(client);
  };
  

  const closeModal = () => {
    setShowBackDrop(false);
    setClient(null);
  };
  const loadingComponent = () => {
    return (
      <div className="w-full absolute left-0 top-24 h-40 flex justify-center items-center">
        <Loading type="spin" color="#3E4095" className="!w-12 !h-12 mx-auto" />
      </div>
    );
  };

  console.log(clientData?.data);
  return (
    <table className="w-full relative">
      <thead className="h-12 text-sm font-medium text-OBS-Darkest border-b border-NGA/Light">
        <tr>
          <th>Date Created</th>
          <th>User’s Name</th>
          <th>User’s Email</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      {isLoading ? (
        loadingComponent()
      ) : (
        <tbody className="text-center w-full">
          {clientData?.data?.map((client) => (
            <tr className="h-12 " key={client._id}>
              <td className="text-xs text-OBS-Darkest">01-01-2023</td>
              <td className="text-xs text-OBS-Darkest">{client?.name}</td>
              <td className="text-xs text-OBS-Darkest">{client?.email}</td>
              <td className="text-xs font-semibold text-OBS-Darkest">
                {client?.status}
              </td>
              <td className="w-[30%]">
                <div className="flex justify-center items-center gap-2 mr-3">
                  <div
                    className="text-xs py-1 px-4 font-medium flex justify-center items-center border text-NGA-Primary border-NGA-Primary rounded-[4px] !cursor-pointer hover:scale-105 transition-all"
                    onClick={() => showModal(client, "view")}
                  >
                    View
                  </div>
                  {client.status === "pending" && (
                    <div
                      className="text-xs py-1 px-4 font-medium flex justify-center items-center border text-white bg-OBS-Green rounded-[4px] !cursor-pointer hover:scale-105 transition-all"
                      onClick={() => showModal(client, "approve")}
                    >
                      Approve
                    </div>
                  )}
                  {client.status === "pending" && (
                    <div
                      className="text-xs py-1 px-4 font-medium flex justify-center items-center border text-white bg-OBS-Red rounded-[4px] !cursor-pointer hover:scale-105 transition-all"
                      onClick={() => showModal(client, "reject")}
                    >
                      Reject
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      )}

      {showBackDrop && (
        <Backdrop closeModal={closeModal}>
          {showViewModal && (
            <ViewClientModal
              id={client?._id as string}
              closeModal={closeModal}
            />
          )}

          {showApprovalModal && (
            <ApprovalModal closeModal={closeModal} client={client as IClient} />
          )}

          {showRejectionModal && (
            <RejectionModal
              closeModal={closeModal}
              client={client as IClient}
            />
          )}
        </Backdrop>
      )}
    </table>
  );
}
