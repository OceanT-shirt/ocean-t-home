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

export const mocks: Product[] = [
  {
    title: {
      EN: 'GOLE',
    },
    area: {
      EN: 'NLP',
    },
    text: {
      EN: 'This is sample.',
    },
    techTags: ['MUI'],
    mediaUrls: [],
    links: [],
  },
];

export const getProductMock = (lang: 'JA' | 'EN') => {
  const m = mocks.map((mock) => {
    return {
      title: mock.title.EN,
      area: mock.area.EN,
      text: mock.text.EN,
      techTags: mock.techTags,
    };
  });
  return m;
};
