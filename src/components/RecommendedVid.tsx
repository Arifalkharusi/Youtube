import { fetchedData } from "./Types/video.type";
import { datePublished, viewCount } from "./Functions/dataView";
import { useEffect, useState } from "react";
import { watchHandler } from "../store/videoSlice";
import { useAppDispatch } from "../store/store";
import { ChannelType } from "./Types/channel.type";
import { ViewsType } from "./Types/Views.type";

type RecommendedVidProps = {
  item: fetchedData;
};

const RecommendedVid = ({ item }: RecommendedVidProps) => {
  const [chanData, setChanData] = useState<ChannelType | null>(null);
  const [viewsData, setViewsData] = useState<ViewsType | null>(null);
  const dispatch = useAppDispatch();
  const API_KEY = "AIzaSyDRMwlchZ2LklZcVLlckdrXJrykZmy1l5c";
  // const API_KEY = "AIzaSyCEIjFMhX10vk64Rxwo6cBv8JbW8jeYVgY";

  useEffect(() => {
    const fetchChannel = async () => {
      const resChan = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${API_KEY}`
      );
      const dataChan = await resChan.json();
      setChanData(dataChan.items[0]);

      const resView = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=${API_KEY}`
      );
      const dataView = await resView.json();
      setViewsData(dataView.items[0]);
      // console.log(dataChan);
    };

    fetchChannel();
  }, [item]);

  const selectHandler = () => {
    dispatch(
      watchHandler({
        videoId: item.id.videoId,
        chanName: item.snippet.channelTitle,
        chanThumnail: chanData?.snippet.thumbnails.high.url,
        puiblished: datePublished(item.snippet.publishTime),
        title: item.snippet.title,
        viewsCount: viewCount(viewsData?.statistics.viewCount),
        discription: item.snippet.description,
      })
    );

    window.scrollTo(0, 0);
  };

  return (
    <div
      className="flex gap-2 w-full max-w-[400px] cursor-pointer"
      onClick={selectHandler}
    >
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
            <div>
              {viewCount(viewsData?.statistics.viewCount)} views &bull;{" "}
              {datePublished(item.snippet.publishTime)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVid;
