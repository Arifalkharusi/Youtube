export type ViewsType = {
  kind: string;
  etag: string;
  id: string;
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
};
