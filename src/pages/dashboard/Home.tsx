/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import * as apiClient from "../../services/Api";
import Table from "../../components/accountManagementComponents/Table";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const [page, setPage] = useState<number>(1);

  const searchText = useSelector((state: any) => state?.filter?.searchText);

  console.log(page);

  const { data: clientData, isLoading } = useQuery(
    ["clientData", page, searchText],
    () => apiClient.getAllClient(searchText, page),
    {
      onError: (error: any) => {
        console.error("An error occurred:", error);
        enqueueSnackbar(error.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      },
    }
  );

  // const queryclient = useQueryClient();

  console.log(clientData);

  return (
    <div className="w-full relative h-[75vh] mt-36">
      <Table
        setPage={setPage}
        page={page}
        clientData={clientData}
        isLoading={isLoading}
      />
    </div>
  );
}
