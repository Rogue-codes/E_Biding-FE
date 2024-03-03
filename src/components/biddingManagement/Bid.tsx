import { profile } from "../../assets";
import { useGetUser } from "../../hooks/useGetUserHooks";
import { Icons } from "../../icons";
import BidDetails from "./BidDetails";

export default function Bid() {
  const user = useGetUser();

  const header = () => {
    return (
      <header className="w-full flex justify-between items-center">
        <button className="px-2 py-1 border border-NGA-Primary text-NGA-Primary rounded-[4px]">
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
      <div className="w-full flex justify-between items-start border border-cyan-300 mt-7">
        <BidDetails/>
      </div>
    </div>
  );
}
