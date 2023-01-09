import { Product } from '../models/product';

export const mocks: Product[] = [
  {
    title: {
      EN: 'GOLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
    area: {
      EN: 'NLPLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
    text: {
      EN: 'This is a sample.This is a sample.This is a sample.This is a sample. This is a sample.This is a sample.This is a sample.This is a sample.This is a sample.This is a sample.This is a sample.This is a sample.This is a sample.This is a sample.',
    },
    techTags: ['MUI', 'Colly'],
    mediaUrls: [],
    links: [],
  },
  {
    title: {
      EN: 'GOLE',
    },
    area: {
      EN: 'NLP',
    },
    text: {
      EN: 'This is a sample.',
    },
    techTags: ['MUI', 'Colly'],
    mediaUrls: [
      {
        alt: 'main',
        type: 'img',
        url: 'https://placeimg.com/640/480/any',
      },
      {
        alt: 'main',
        type: 'img',
        url: 'https://placeimg.com/1920/1080/any',
      },
    ],
    links: [
      {
        title: 'GitHub',
        url: '',
      },
    ],
  },
];

export const getProductMock = (lang: 'JA' | 'EN') => {
  const m = mocks.map((mock) => {
    return {
      title: mock.title.EN,
      area: mock.area.EN,
      text: mock.text.EN,
      techTags: mock.techTags,
      mediaUrls: mock.mediaUrls,
      links: mock.links,
    };
  });
  return m;
};
