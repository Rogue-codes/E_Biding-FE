export default function BidCard() {
  return (
    <div className="mt-5 border-b border-NGA/Light pb-3">
      <div className="flex justify-start gap-4 items-center">
        <p className="text-sm mt-2 text-NGA/Darkest font-medium">
          Date Submitted:
        </p>
        <p className="text-sm mt-2">01-03-2024</p>
      </div>

      <div className="flex justify-start gap-4 items-center">
        <p className="text-sm mt-2 text-NGA/Darkest font-medium">Company:</p>
        <p className="text-sm mt-2">KENNY CONSTRUCTIONS LTD</p>
      </div>

      <div className="flex justify-start gap-4 items-center">
        <p className="text-sm mt-2 text-NGA/Darkest font-medium">Bid Amount:</p>
        <p className="text-sm mt-2">₦8,500,000</p>
      </div>

      <button className="px-3 py-1 border border-NGA-Primary text-NGA-Primary text-xs rounded-[4px] mt-3 hover:scale-105 transition-all">
        View Bid
      </button>
    </div>
  );
}
