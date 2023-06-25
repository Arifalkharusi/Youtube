import { AiFillHome } from "react-icons/ai";
import { GiShorts } from "react-icons/gi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

const SideBar = () => {
  return (
    <div className=" hidden flex-col fixed left-0 top-[50px] px-1 bg-white md:flex">
      <div className="flex flex-col items-center justify-center py-5 text-xs rounded-lg cursor-pointer hover:bg-slate-100">
        <AiFillHome size={23} />
        Home
      </div>
      <div className="flex flex-col items-center justify-center py-5 text-xs rounded-lg cursor-pointer hover:bg-slate-100">
        <GiShorts size={23} />
        Shorts
      </div>
      <div className="flex flex-col items-center justify-center py-5 text-xs rounded-lg cursor-pointer hover:bg-slate-100">
        <MdOutlineSubscriptions size={23} />
        Subscription
      </div>
      <div className="flex flex-col items-center justify-center py-5 text-xs rounded-lg cursor-pointer hover:bg-slate-100">
        <HiOutlineBuildingLibrary size={23} />
        Library
      </div>
    </div>
  );
};

export default SideBar;
