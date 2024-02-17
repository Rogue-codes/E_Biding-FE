import { Link, useLocation } from "react-router-dom";
import { nigalex } from "../../assets";
import { sideBarArr } from "../../utils";

export default function SideBar() {
  const location = useLocation();
  return (
    <div className="w-[26vw] fixed left-0 h-[calc(100%-3rem)] border-r border-NGA/Light bottom-12">
      <div className="w-[17vw] mx-auto h-full">
        <div className="w-full pt-10">
          <img src={nigalex} alt="" />
        </div>

        <div className="mt-12">
          {sideBarArr.map((sideBar, index) => (
            <Link to={sideBar.link} key={index}>
              <div
                className={`${
                  location.pathname === sideBar.link
                    ? "bg-NGA-Primary text-white"
                    : "bg-transparent text-NGA/Medium"
                } flex justify-start items-center px-2 rounded-[4px] py-[10px] gap-3 mt-2`}
              >
                <div>
                  {location.pathname === sideBar.link
                    ? sideBar.icon
                    : sideBar.iconInactive}
                </div>
                <p>{sideBar.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
