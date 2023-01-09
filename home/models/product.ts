type Product = {
  title: MultiLangStr;
  area: MultiLangStr;
  text: MultiLangStr;
  techTags: string[];
  mediaUrls: MediaUrl[];
  links: Link[];
};

type MultiLangStr = {
  EN: string;
  JA?: string;
};

type MediaUrl = {
  alt: string;
  type: 'img' | 'video';
  url: string;
};

type Link = {
  title: string;
  url: string;
};

export type { Product, MultiLangStr, MediaUrl, Link };
