import { useState } from "react";
import BiddingTable from "../../components/biddingManagement/BiddingTable";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import * as apiClient from "../../services/Api";
import { enqueueSnackbar } from "notistack";

export default function BiddingManagement() {
  const [page, setPage] = useState<number>(1);

  const searchText = useSelector((state: any) => state?.filter?.searchText);

  const { data, isLoading } = useQuery(
    ["autionData", page, searchText],
    () => apiClient.getAllAuctions(searchText, page),
    {
      onError: (error: any) => {
        enqueueSnackbar(error.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      },
    }
  );
  return (
    <div className="w-full relative h-[75vh] mt-36">
      <BiddingTable page={page} setPage={setPage} data={data} isLoading={isLoading} />
    </div>
  );
}
