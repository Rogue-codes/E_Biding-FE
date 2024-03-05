import { useNavigate } from "react-router-dom";
import { profile } from "../../assets";
import { useGetUser } from "../../hooks/useGetUserHooks";
import { Icons } from "../../icons";
import BidDetails from "./BidDetails";
import SubmittedBids from "./SubmittedBids";
import { useQuery } from "react-query";
import {useParams} from 'react-router-dom'
import * as apiClient from '../../services/Api'
import { enqueueSnackbar } from "notistack";
export default function Bid() {
  const user = useGetUser();

  const navigate = useNavigate()

  const {id} = useParams()

  console.log('id: ==>', id)

  const { data } = useQuery(
    ["auctionByIdData", id], // Query key, typically an array of parameters
    () => apiClient.getAuctionById(id as string), // Query function
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

  const header = () => {
    return (
      <header className="w-full flex justify-between items-center">
        <button className="px-2 hover:scale-105 transition-all py-1 border border-NGA-Primary text-NGA-Primary rounded-[4px]" onClick={()=>navigate(-1)}>
          Back to Main page
        </button>

        <div className="border border-NGA/Light rounded-lg flex px-2 w-48 justify-between items-center  py-2">
          <div className="w-6 h-6 rounded-full">
            <img
              src={profile}
              className="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <p>{user?.userName}</p>
          <Icons.dropDown />
        </div>
      </header>
    );
  };

  return (
    <div className="w-full overflow-scroll h-screen -mt-36 py-9 px-4">
      {header()}
      <div className="w-full  flex justify-between items-start mt-4">
        <BidDetails data={data?.data}/>
        <SubmittedBids bids={data?.data}/>
      </div>
    </div>
  );
}
