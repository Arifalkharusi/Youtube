import { AiFillHome } from "react-icons/ai";
import { GiShorts } from "react-icons/gi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

const SideBar = () => {
  return (
    <div className=" hidden flex-col fixed left-0 top-[50px] px-1 bg-white md:flex dark:bg-gray-950 h-full">
      <div className="flex flex-col items-center justify-center py-5 text-xs rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
        <AiFillHome size={23} />
        Home
      </div>
      <div className="flex flex-col items-center justify-center py-5 text-xs rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
        <GiShorts size={23} />
        Shorts
      </div>
      <div className="flex flex-col items-center justify-center py-5 text-xs rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
        <MdOutlineSubscriptions size={23} />
        Subscription
      </div>
      <div className="flex flex-col items-center justify-center py-5 text-xs rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
        <HiOutlineBuildingLibrary size={23} />
        Library
      </div>
    </div>
  );
};

export default SideBar;
