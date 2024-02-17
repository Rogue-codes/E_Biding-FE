import { useMemo, useState } from "react";
import { Icons } from "../../icons";
import DateSelect from "../DateSelect/DateSelect";
import { getFutureDate } from "../../helpers";

export default function Filter() {
    const [fromDate, setFromDate] = useState<Date | null>(null);
    const [toDate, setToDate] = useState<Date | null>(null);

    const minReturnDate = useMemo(() => {
        const returnFuture = getFutureDate(
          1,
          fromDate ? fromDate : getFutureDate(1),
        );
        if (toDate && toDate < fromDate!) setToDate(null);
        return returnFuture;
      }, [fromDate, toDate]);

  return (
    <div className="w-[calc(100%-25.5vw)] bg-white z-20 fixed left-[26vw] top-24 py-2 px-4">
      {/* search */}
      <div className="w-[45vw] h-10 rounded-lg border border-NGA/Light flex justify-between items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[90%] rounded-tl-lg rounded-bl-lg h-full focus:outline-none px-3"
        />
        <button className="bg-NGA-Primary h-full flex justify-center rounded-tr-lg rounded-br-lg items-center w-[10%]">
          <Icons.search />
        </button>
      </div>
      {/* ------------ */}

      <div className="w-full flex justify-between mt-4 pb-4 border-b border-NGA/Light items-center">
      <div className="w-[40vw] flex justify-start items-center gap-2 ">
        <DateSelect
          selected={fromDate}
          onChange={(date) => {
            setFromDate(date);
          }}
          placeholderText="dd-mm-yy"
          className="border !w-48 !border-NGA-Light px-4 rounded-lg h-[30px] shadow-[0px_1px_2px_0px_rgba(16,24,48,0.05)]"
        />
        <p>-</p>
        <DateSelect
          selected={toDate}
          onChange={(date) => {
            setToDate(date);
          }}
          placeholderText="dd-mm-yy"
          className="border !w-48 !border-NGA-Light px-4 rounded-lg h-[30px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
          minDate={minReturnDate}
        />

        <button className="bg-NGA-Primary px-2 text-sm py-1 rounded-[4px] text-white hover:scale-105 transition-all">Apply filter</button>
      </div>

      <button className="bg-NGA-Primary text-white text-xs flex justify-start items-center gap-2 p-2 rounded-[4px] hover:scale-105 transition-all"><Icons.add/>Create Bid Request</button>
      </div>


    </div>
  );
}
