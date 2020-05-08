interface Thumbnail {
  url: string;
  width: string;
  height: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
  channelTitle: string;
  regionCode: string;
}

interface Video {
  etag: string;
  kind: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
}

interface VideoRowData {
  image: string;
  publishedAt: string;
  title: string;
  description: string;
  videoId: string;
}

export {
  Video,
  VideoRowData,
};
