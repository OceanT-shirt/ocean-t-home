interface ProductProps {
  id: string;
  title: string;
  area: string;
  text: string;
  techTags: string[];
  mediaUrls: MediaUrl[];
  links: Link[];
}

class Product {
  id: string;
  title: MultiLingualText;
  area: MultiLingualText;
  text: MultiLingualText;
  techTags: string[];
  mediaUrls: MediaUrl[];
  links: Link[];

  constructor(
    id: string,
    title: MultiLangDict,
    area: MultiLangDict,
    text: MultiLangDict,
    techTags: string[],
    mediaUrls: MediaUrl[],
    links: Link[],
  ) {
    this.id = id;
    this.title = multiLingualTextFromDict(title);
    this.area = multiLingualTextFromDict(area);
    this.text = multiLingualTextFromDict(text);
    this.techTags = techTags;
    this.mediaUrls = mediaUrls;
    this.links = links;
  }

  getDataByLocale(locale: 'en' | 'ja'): ProductProps {
    return {
      id: this.id,
      title: this.title.getTextByLocale(locale),
      area: this.area.getTextByLocale(locale),
      text: this.text.getTextByLocale(locale),
      techTags: this.techTags,
      mediaUrls: this.mediaUrls,
      links: this.links,
    };
  }
}

interface MultiLangDict {
  EN: string;
  JA?: string;
}

function multiLingualTextFromDict(dict: MultiLangDict) {
  return new MultiLingualText(dict.EN, dict.JA);
}

class MultiLingualText {
  ja?: string;
  en: string;

  constructor(en: string, ja?: string) {
    this.en = en;
    if (ja) this.ja = ja;
  }

  getTextByLocale(locale: 'en' | 'ja'): string {
    if (locale == 'en' && this.ja) return this.ja;
    return this.en;
  }

  getDict(): MultiLangDict {
    return {
      EN: this.en,
      JA: this.ja || '',
    };
  }
}

type MediaUrl = {
  alt: string;
  type: 'img' | 'video';
  url: string;
};

type Link = {
  title: string;
  url: string;
};

export { Product, MultiLingualText };
export type { ProductProps, MultiLangDict, MediaUrl, Link };
