import { Icons } from "../../icons";
import { IAuction } from "../../interfaces";
import BidCard from "./BidCard";

interface ISubmittedBids {
  bids: IAuction;
}

export default function SubmittedBids({ bids }: ISubmittedBids) {
  return (
    <div className="w-[45%] px-4 h-screen overflow-y-scroll">
      <div className="w-full pb-3 flex justify-between items-center border-b border-NGA/Light">
        <p>Submitted Bids</p>

        <div className="flex justify-start items-center gap-3">
          <p>Sort</p>
          <button className="border border-[#DAE8F2] flex justify-between items-center gap-2 rounded-[4px] text-[#142633] text-sm py-[5px] px-3">
            Last first <Icons.dropDown />
          </button>
        </div>
      </div>

      {bids?.bids?.length > 1 ? (
        bids?.bids?.map((_item: any) => <BidCard />)
      ) : (
        <p className="text-center mt-12 text-NGA/Medium text-sm">
          no bids available for this auction.
        </p>
      )}
    </div>
  );
}
