export interface MarkdownAttributes {
  title: string;
  images: ImageAttributes[];
  url: UrlAttributes[];
}

export interface ImageAttributes {
  href: string;
  alt: string;
}

export interface UrlAttributes {
  title: string;
  url: string;
  icon: string;
}
