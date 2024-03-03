import Loading from "react-loading";
import { IAuction, IGetAllAuctionData } from "../../interfaces";
import { formatDate, formatDuration } from "../../helpers/date";
import Pagination from "../pagination/Pagination";
import { useNavigate } from "react-router-dom";

interface IBiddingTable {
  data: IGetAllAuctionData;
  isLoading: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>
  page:number
}
export default function BiddingTable({ data, isLoading, page, setPage }: IBiddingTable) {
  console.log("auctions: => ", data);

  const loadingComponent = () => {
    return (
      <div className="w-full absolute left-0 top-24 h-40 flex justify-center items-center">
        <Loading type="spin" color="#3E4095" className="!w-12 !h-12 mx-auto" />
      </div>
    );
  };

  const navigate = useNavigate()

  return (
    <table className="w-full relative pb-24">
      <thead className="h-12 text-sm font-medium text-OBS-Darkest border-b border-NGA/Light">
        <tr>
          <th>Date Created</th>
          <th>BID ID</th>
          <th className="text-center">Bid Description</th>
          <th>Bids</th>
          <th>status</th>
        </tr>
      </thead>
      {isLoading ? (
        loadingComponent()
      ) : (
        <>
          <tbody className="text-center w-full border-b border-NGA/Light">
            {data?.data?.map((auction: IAuction) => (
              <tr className="h-12 ">
                <td className="text-xs text-OBS-Darkest">
                  {formatDate(auction?.createdAt)}
                </td>
                <td className="text-xs text-OBS-Darkest">
                  {auction?.auctionId}
                </td>
                <td className="text-xs text-OBS-Darkest">
                  <p className="w-64 truncated text-center !mx-auto">
                    {auction?.auctionDescription}
                  </p>
                </td>
                <td className="text-xs font-semibold text-OBS-Darkest">
                  {auction?.bids?.length}
                </td>
                <td className="text-xs font-semibold text-NGA/Successful">
                  {formatDuration(auction.endDate)}
                </td>
                <td className="">
                  <div className="flex justify-end items-center gap-2 mr-3">
                    <div className="text-xs py-1 px-4 font-medium flex justify-center items-center border text-NGA-Primary border-NGA-Primary rounded-[4px] !cursor-pointer hover:scale-105 transition-all" onClick={() => navigate(`/bidding-management/${12034}?view=true`) }>
                      View
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <Pagination
          setPage={setPage}
          page={page}
          lastPage={data?.meta?.last_page}
        />
        </>
      )}

      {/* {showBackDrop && (
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
      )} */}
    </table>
  );
}
