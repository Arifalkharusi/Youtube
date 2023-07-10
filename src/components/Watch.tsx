import { useAppSelector } from "../store/store";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import RecommendedVid from "./RecommendedVid";

const Watch = () => {
  const { watch, fetchedData } = useAppSelector((state) => state.videoSlice);

  return (
    <div className="flex flex-col items-start justify-center gap-5 p-5 lg:flex-row dark:bg-gray-950">
      <div className="flex flex-col gap-5 w-full lg:w-[70%]">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-none"
            allow="autoPlay"
            allowFullScreen
            src={`https://www.youtube.com/embed/${watch.videoId}?autoplay=1`}
          ></iframe>
        </div>
        <div>
          <div className="mb-4 font-semibold line-clamp-1">{watch.title}</div>
          <div className="flex justify-between">
            <div className="flex items-center gap-7">
              <div className="flex items-center gap-2">
                <div>
                  <img
                    src={watch.chanThumnail}
                    alt=""
                    className="w-[40px] rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold line-clamp-1">
                    {watch.chanName}
                  </div>
                  <div className="text-[13px] text-gray-700 dark:text-gray-400">
                    850K subscribers
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 text-white bg-black cursor-pointer rounded-3xl hover:bg-slate-800 dark:text-gray-950 dark:bg-gray-50 dark:hover:bg-slate-200">
                Subscribe
              </div>
            </div>
            <div className="items-center hidden gap-4 md:flex">
              <div className="flex items-center">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer rounded-s-3xl hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-slate-700 ">
                  <AiOutlineLike size={23} />
                  4.1K
                </div>
                <div className="px-3 py-2 bg-gray-100 cursor-pointer rounded-e-3xl hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-slate-700">
                  <AiOutlineDislike size={23} />
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer rounded-3xl hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-slate-700">
                <PiShareFat size={23} />
                Share
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3 bg-gray-100 rounded-lg dark:bg-gray-900">
          <div className="flex gap-3 text-sm font-semibold">
            <div>{watch.viewsCount} views</div>
            <div>{watch.puiblished}</div>
          </div>
          <div className="text-sm">{watch.discription}</div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {fetchedData.map(
          (item) =>
            item.id.kind.split("#")[1] === "video" && (
              <RecommendedVid item={item} />
            )
        )}
      </div>
    </div>
  );
};

export default Watch;
