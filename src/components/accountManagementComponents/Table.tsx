
export default function Table() {
  return (
    <table className="w-full">
      <thead className="h-12 text-sm font-medium text-OBS-Darkest border-b border-NGA/Light">
        <tr>
          <th>Date Created</th>
          <th>User’s Name</th>
          <th>User’s Email</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="text-center w-full">
        <tr className="h-12 ">
          <td className="text-xs text-OBS-Darkest">01-01-2023</td>
          <td className="text-xs text-OBS-Darkest">Emeka Nzekwe</td>
          <td className="text-xs text-OBS-Darkest">Emailsemail@gmail.com</td>
          <td className="text-xs font-semibold text-OBS-Darkest">Pending</td>
          <td className="w-[30%]">
            <div className="flex justify-end items-center gap-2 mr-3">
              <div className="text-xs py-1 px-4 font-medium flex justify-center items-center border text-NGA-Primary border-NGA-Primary rounded-[4px] cursor-pointer hover:scale-105 transition-all">
                View
              </div>
              <div className="text-xs py-1 px-4 font-medium flex justify-center items-center border text-white bg-OBS-Green rounded-[4px] cursor-pointer hover:scale-105 transition-all">
                Approve
              </div>
              <div className="text-xs py-1 px-4 font-medium flex justify-center items-center border text-white bg-OBS-Red rounded-[4px] cursor-pointer hover:scale-105 transition-all">
                Reject
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
