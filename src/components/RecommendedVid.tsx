import { fetchedData } from "./Types/video.type";
import { datePublished } from "./Functions/dataView";

type RecommendedVidProps = {
  item: fetchedData;
};

const RecommendedVid = ({ item }: RecommendedVidProps) => {
  return (
    <div className="flex gap-2 w-full max-w-[400px] cursor-pointer">
      <div className="w-[40%]">
        <img
          src={item.snippet.thumbnails.medium.url}
          alt=""
          className="w-full rounded-xl"
        />
      </div>
      <div className="w-[60%] flex flex-col gap-2">
        <div className="text-sm font-semibold line-clamp-2">
          {item.snippet.title}
        </div>
        <div className="text-xs">
          <div>{item.snippet.channelTitle}</div>
          <div>
            <div>{datePublished(item.snippet.publishTime)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVid;
