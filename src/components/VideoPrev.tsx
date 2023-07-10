import { fetchedData } from "./Types/video.type";
import { ChannelType } from "./Types/channel.type";
import { useEffect, useState } from "react";
import { ViewsType } from "./Types/Views.type";
import { useAppDispatch } from "../store/store";
import { watchHandler } from "../store/videoSlice";
import { Link } from "react-router-dom";
import { datePublished, viewCount } from "./Functions/dataView";

type VideoPrevProps = {
  video: fetchedData;
};

const VideoPrev = ({ video }: VideoPrevProps) => {
  const [chanData, setChanData] = useState<ChannelType | null>(null);
  const [viewsData, setViewsData] = useState<ViewsType | null>(null);

  const dispatch = useAppDispatch();

  const vidSelectHandler = () => {
    dispatch(
      watchHandler({
        videoId: video.id.videoId,
        chanName: video.snippet.channelTitle,
        chanThumnail: chanData?.snippet.thumbnails.high.url,
        puiblished: datePublished(video.snippet.publishTime),
        title: video.snippet.title,
        viewsCount: viewCount(viewsData?.statistics.viewCount),
        discription: video.snippet.description,
      })
    );

    window.scrollTo(0, 0);
  };

  const API_KEY = "AIzaSyDRMwlchZ2LklZcVLlckdrXJrykZmy1l5c";
  // const API_KEY = "AIzaSyCEIjFMhX10vk64Rxwo6cBv8JbW8jeYVgY";

  const { url } = video.snippet.thumbnails.medium;
  const { title } = video.snippet;
  const { channelTitle } = video.snippet;

  useEffect(() => {
    const fetchChannel = async () => {
      const resChan = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&key=${API_KEY}`
      );
      const dataChan = await resChan.json();
      setChanData(dataChan.items[0]);
      // console.log(dataChan);
    };

    const fetchView = async () => {
      const resView = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${video.id.videoId}&key=${API_KEY}`
      );
      const dataView = await resView.json();
      setViewsData(dataView.items[0]);
    };

    fetchChannel();
    fetchView();
  }, [video]);

  return (
    <Link to="watch">
      <div className="flex flex-col gap-3" onClick={vidSelectHandler}>
        <div className="relative cursor-pointer">
          <img src={url} alt="" className="w-full rounded-lg" />
          <div className="absolute px-1 text-xs font-semibold text-white bg-black rounded-sm bottom-2 right-2">
            10:32
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-[40px] min-w-[40px]">
            <img
              src={chanData?.snippet.thumbnails.high.url}
              alt=""
              className="w-full rounded-full cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-1 cursor-pointer">
            <div className="font-semibold line-clamp-2">{title}</div>
            <div>
              <div className="text-sm text-gray-600 line-clamp-1 dark:text-gray-400">
                {channelTitle}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {viewCount(viewsData?.statistics.viewCount)} views &bull;{" "}
                {datePublished(video.snippet.publishTime)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoPrev;
