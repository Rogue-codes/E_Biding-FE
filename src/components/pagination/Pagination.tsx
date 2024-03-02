import { Icons } from "../../icons";

interface IPagination {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  lastPage:number
}
export default function Pagination({ setPage, page, lastPage }: IPagination) {
  const handlePageChange = (type: string) => {
    switch (type) {
      case "doublePrev":
        if (page > 2) {
          setPage((prev) => prev - 2);
        } else {
          setPage(1);
        }
        break;

      case "singlePrev":
        if (page > 1) {
          setPage((prev) => prev - 1);
        } else {
          setPage(1);
        }
        break;

      case "singleNext":
        setPage((prev) => prev + 1);
        break;

      case "doubleNext":
        setPage((prev) => prev + 2);
        break;

      default:
        setPage(1);
        break;
    }
  };

  return (
    <div className="w-full absolute mt-4 flex justify-center gap-2">
      <div
        className="w-9 h-7 flex justify-center items-center border border-NGA/Light cursor-pointer"
        onClick={() => handlePageChange("doublePrev")}
      >
        <Icons.doublePrev />
      </div>

      <div
        className="w-9 h-7 flex justify-center items-center border border-NGA/Light cursor-pointer"
        onClick={() => handlePageChange("singlePrev")}
      >
        <Icons.Prev />
      </div>

      <div className="w-9 h-7 border border-NGA/Light cursor-pointer flex justify-center items-center">
        {page}
      </div>

      <div className="w-9 h-7 flex justify-center items-center">
        <p className="text-sm ">Of {lastPage}</p>
      </div>

      <div
        className="w-9 h-7 flex justify-center items-center border border-NGA/Light cursor-pointer"
        onClick={() => handlePageChange("singleNext")}
      >
        <Icons.next />
      </div>

      <div
        className="w-9 h-7 flex justify-center items-center border border-NGA/Light cursor-pointer"
        onClick={() => handlePageChange("doubleNext")}
      >
        <Icons.doubleNext />
      </div>
    </div>
  );
}
