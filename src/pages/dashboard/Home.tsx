import { useQuery } from "react-query";
import * as apiClient from "../../services/Api";
import Table from "../../components/accountManagementComponents/Table";
import { enqueueSnackbar } from "notistack";

export default function Home() {

  const {data:clientData, isLoading, isSuccess} = useQuery('clientData', apiClient.getAllClient, {
    onSuccess: (data: any) => {
      enqueueSnackbar(data.message, {
        variant: 'success',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    },
    onError: (error: any) => {
      console.error('An error occurred:', error);
      enqueueSnackbar(error.message, {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    },
  });

  console.log(clientData)

  return (
    <div className="w-full relative h-screen mt-56">
      <Table clientData={clientData} isLoading={isLoading}/>
    </div>
  );
}
