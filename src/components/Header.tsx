import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillYoutube } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { BsFillMicFill, BsBell, BsPersonCircle } from "react-icons/bs";
import { RiVideoUploadLine } from "react-icons/ri";
import React, { useState } from "react";
import { useAppDispatch } from "../store/store";
import { searchHandler } from "../store/videoSlice";
import { useNavigate } from "react-router-dom";

type ToolTipProps = {
  children: React.ReactNode;
};

const ToolTip = ({ children }: ToolTipProps) => {
  return (
    <div className="absolute bottom-[-50px] bg-gray-600 text-white p-1 text-xs left-[50%] translate-x-[-50%] hidden  group-hover:block rounded-md w-max">
      {children}
    </div>
  );
};

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const resultsHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchHandler(search));
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-white">
      <div className="flex items-center gap-3 ">
        <div className="cursor-pointer">
          <div className="relative p-2 rounded-full hover:bg-gray-100 group">
            <RxHamburgerMenu size={23} />
            <ToolTip>Menu</ToolTip>
          </div>
        </div>
        <div className="items-center hidden gap-0 cursor-pointer md:flex">
          <AiFillYoutube size={35} color="red" />
          <div className="text-xl font-bold">YouTube</div>
          <div className="self-start text-xs">&#x3387;</div>
        </div>
      </div>
      <div className="flex items-center w-full max-w-2xl gap-3">
        <form className="flex items-center w-full" onSubmit={resultsHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border-[1px] focus:border-blue-800 border-gray-400 shadow-inner px-7 rounded-s-3xl focus:outline-none"
            placeholder="Search"
          />
          <button className="flex items-center justify-center h-full px-6 py-[10px] border-[1px] border-l-0 border-gray-400 cursor-pointer bg-gray-100 rounded-e-3xl hover:bg-gray-200 relative group">
            <GoSearch size={20} />
            <ToolTip>Search</ToolTip>
          </button>
        </form>
        <div className="relative hidden p-3 rounded-full cursor-pointer hover:bg-gray-100 md:block group">
          <BsFillMicFill size={20} />
          <ToolTip>Search with your voice</ToolTip>
        </div>
      </div>
      <div className="items-center hidden gap-5 md:flex">
        <div className="relative cursor-pointer group">
          <RiVideoUploadLine size={25} />
          <ToolTip>Create</ToolTip>
        </div>
        <div className="relative cursor-pointer group">
          <BsBell size={25} />
          <ToolTip>Notifications</ToolTip>
          <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-sm text-white bg-red-500 rounded-full">
            2
          </div>
        </div>
        <div className="cursor-pointer">
          <BsPersonCircle size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
