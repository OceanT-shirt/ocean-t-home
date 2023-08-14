export interface MarkdownFile {
  attributes: MarkdownAttributes;
  body: string;
}

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

export const isImageAttributes = (obj: any): obj is ImageAttributes => {
  return obj && typeof obj.href === "string" && typeof obj.alt === "string";
};

export const isUrlAttributes = (obj: any): obj is UrlAttributes => {
  return (
    obj &&
    typeof obj.title === "string" &&
    typeof obj.url === "string" &&
    typeof obj.icon === "string"
  );
};

export const isMarkdownAttributes = (obj: any): obj is MarkdownAttributes => {
  return (
    obj &&
    typeof obj.title === "string" &&
    Array.isArray(obj.images) &&
    obj.images.every(isImageAttributes) &&
    Array.isArray(obj.url) &&
    obj.url.every(isUrlAttributes)
  );
};

export const getMarkdownAttributesFromObject = (
  obj: unknown,
): MarkdownAttributes => {
  if (isMarkdownAttributes(obj)) {
    return {
      title: obj.title,
      images: obj.images,
      url: obj.url,
    };
  } else {
    return {
      title: "",
      images: [],
      url: [],
    };
  }
};
