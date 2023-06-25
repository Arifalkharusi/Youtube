export const datePublished = function (date: string) {
  // date vid uploaded
  const dateUploaded = new Date(date);
  // current time
  const now = new Date();
  // gets time passed in minutes
  let timePassed = (now.getTime() - dateUploaded.getTime()) / 1000 / 60;
  // minutes
  if (timePassed < 60) return `${Math.floor(timePassed)} minutes ago`;
  timePassed = timePassed / 60;
  // hours
  if (timePassed < 24) return `${Math.floor(timePassed)} hours ago`;
  timePassed = timePassed / 24;
  // days
  if (timePassed < 7) return `${Math.floor(timePassed)} days ago`;
  timePassed = timePassed / 7;
  // weeks
  if (timePassed < 4) return `${Math.floor(timePassed)} weeks ago`;
  timePassed = timePassed / 4;
  // months
  if (timePassed < 12) return `${Math.floor(timePassed)} months ago`;
  timePassed = timePassed / 12;
  // years
  return `${Math.floor(timePassed)} years ago`;
};

export const viewCount = function (views: string | undefined) {
  // number of views
  let numViews = Number(views);
  // hundreds
  if (numViews < 1000) return `${views}`;
  // thousands
  if (numViews >= 1000 && numViews < 1000000)
    return `${Math.floor(numViews / 1000)}K`;
  // millions
  if (numViews >= 1000000 && numViews < 1000000000)
    return `${(numViews / 1000000).toFixed(2)}M`;
  // billions
  if (numViews >= 1000000000) return `${(numViews / 1000000000).toFixed(2)}B`;
};
