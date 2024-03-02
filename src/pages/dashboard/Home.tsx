/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import * as apiClient from "../../services/Api";
import Table from "../../components/accountManagementComponents/Table";
import { enqueueSnackbar } from "notistack";

export default function Home() {

  const {data:clientData, isLoading} = useQuery('clientData', apiClient.getAllClient, {
    onError: (error: any) => {
      console.error('An error occurred:', error);
      enqueueSnackbar(error.message, {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }
  });

  console.log(clientData)

  return (
    <div className="w-full relative h-screen mt-56">
      <Table clientData={clientData} isLoading={isLoading}/>
    </div>
  );
}
