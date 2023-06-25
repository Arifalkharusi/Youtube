import VideoPrev from "./VideoPrev";
import { useEffect, useState } from "react";
import { fetchedData } from "./Types/video.type";
import { useAppSelector, useAppDispatch } from "../store/store";
import { recommendedHandler } from "../store/videoSlice";

const VideoGrid = () => {
  const [data, setData] = useState<fetchedData[] | null>(null);
  const API_KEY = "AIzaSyDRMwlchZ2LklZcVLlckdrXJrykZmy1l5c";
  // const API_KEY = "AIzaSyCEIjFMhX10vk64Rxwo6cBv8JbW8jeYVgY";
  const dispatch = useAppDispatch();

  const { search } = useAppSelector((state) => state.videoSlice);

  useEffect(() => {
    const fetchVid = async () => {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${API_KEY}`
      );
      const result = await res.json();
      setData(result.items);
      dispatch(recommendedHandler(result.items));
    };
    fetchVid();
  }, [search]);

  return (
    <div className="md:ml-[70px] p-5 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4">
      {data?.map(
        (item) =>
          item.id.kind.split("#")[1] === "video" && <VideoPrev video={item} />
      )}
    </div>
  );
};

export default VideoGrid;
