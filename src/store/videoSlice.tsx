import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchedData } from "../components/Types/video.type";

type WatchVideo = {
  videoId: string | undefined;
  title: string | undefined;
  chanThumnail: string | undefined;
  chanName: string | undefined;
  puiblished: string | undefined;
  viewsCount: string | undefined;
  discription: string | undefined;
};

type StateType = {
  search: string;
  watch: WatchVideo;
  fetchedData: fetchedData[];
};

const initialState: StateType = {
  search: "",
  watch: {
    videoId: "",
    title: "",
    chanThumnail: "",
    chanName: "",
    puiblished: "",
    viewsCount: "",
    discription: "",
  },
  fetchedData: [],
};

export const videoSlice = createSlice({
  name: "videoSlice",
  initialState,
  reducers: {
    searchHandler: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    watchHandler: (state, action: PayloadAction<WatchVideo>) => {
      state.watch = action.payload;
    },
    recommendedHandler: (state, action: PayloadAction<fetchedData[]>) => {
      state.fetchedData = action.payload;
    },
  },
});

export const { searchHandler, watchHandler, recommendedHandler } =
  videoSlice.actions;
export default videoSlice.reducer;
