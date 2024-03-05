import { useRef, useState } from "react";
import { Icons } from "../../icons";
import { IAuction } from "../../interfaces";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { formatDuration } from "../../helpers/date";
import { useForm } from "react-hook-form";

interface IBidDetails {
  data: IAuction;
}

interface IAuctionDetails {
  bidDescription: string;
  itemDescription: string;
  minimumAmount: number;
}

export default function BidDetails({ data }: IBidDetails) {
  const [fileName, setFileName] = useState<string | undefined>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file?.name);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLabelClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const {
    register,
    // handleSubmit,
    // formState: { errors },
  } = useForm<IAuctionDetails>();

  return (
    <div className="w-1/2">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-NGA/Medium font-bold">
            {data?.auctionId || <Skeleton />}
          </p>
          <p className="text-xl text-NGA/Darkest font-semibold leading-7">
            {data?.auctionId || <Skeleton />}
          </p>
        </div>

        <p className="text-[1.125rem] text-NGA/Successful font-semibold">
          {formatDuration(data?.endDate) || <Skeleton />}
        </p>
      </div>
      <div className="w-full mt-5">
        <label htmlFor="description" className="text-NGA/Darkest">
          Bid Description
        </label>
        <input
          {...register("bidDescription", {
            required: "bidDescription is required",
            minLength: {
              value: 3,
              message: "bid description must be at least 3 characters",
            },
            value: `${data?.auctionDescription}`,
          })}
          type="text"
          className="block mt-1 w-full px-4 py-2 border border-NGA/Light rounded-lg"
        />
      </div>

      <div className="w-full mt-2">
        <label htmlFor="description" className="text-NGA/Darkest">
          Item Description{" "}
          <span className="text-NGA/medium text-xs">(Optional)</span>
        </label>
        <textarea
          {...register("itemDescription", {
            required: "item description is required",
            minLength: {
              value: 3,
              message: "item description must be at least 3 characters",
            },
            value: `${data?.itemDescription}`,
          })}
          rows={4}
          className="block mt-1 w-full px-4 py-2 border border-NGA/Light rounded-lg"
        ></textarea>
      </div>

      <div className="w-full mt-3">
        <label htmlFor="description" className="text-NGA/Darkest">
          Sample Bid Image
        </label>
        <input
          type="file"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="hidden"
        />
        <div className="flex justify-between items-center mt-1 w-full px-4 py-2 border border-NGA/Light rounded-lg">
          <div className="flex justify-start items-center gap-2">
            <Icons.upload />
            <p className="text-xs text-NGA/Darkest">
              {fileName ? fileName : "choose file"}
            </p>
          </div>

          <div
            className="px-2 cursor-pointer text-white text-xs bg-NGA/Accent rounded-[4px]"
            onClick={handleLabelClick}
          >
            {fileName ? "Update File" : "Select file"}
          </div>
        </div>
      </div>

      <div className="w-full mt-5 flex justify-between">
        <div className=" w-[48%]">
          <label htmlFor="description" className="text-NGA/Darkest">
            Maximum Price (₦)
          </label>
          <input
            {...register("minimumAmount", {
              required: "Minimum amount is required",
              minLength: {
                value: 3,
                message: "Item description must be at least 3 characters",
              },
              value: Number(data?.startingAmount), // Convert to number
            })}
            type="number"
            className="block mt-1 w-full px-4 py-2 border border-NGA/Light rounded-lg"
          />
        </div>

        <div className=" w-[48%]">
          <label htmlFor="description" className="text-NGA/Darkest">
            Price Validity
          </label>
          <input
            type="text"
            value={data?.endDate && new Date(data?.endDate).toISOString().split("T")[0]} // Convert Date to string
            className="block mt-1 w-full px-4 py-2 border border-NGA/Light rounded-lg"
          />
        </div>
      </div>

      <button className="w-full mt-3 hover:scale-105 transition-all py-3 px-4 rounded-lg bg-NGA-Primary text-white">
        Update Bid request details
      </button>

      <button className="py-3 mt-3 hover:scale-105 transition-all px-4 rounded-lg bg-NGA/Successful text-white">
        Reopen bid
      </button>
    </div>
  );
}
